<template>
    <!-- <div> -->
    <div class="login-wrap" >
        <canvas id="canvas-root" :width="docWidth" :height="docHeight"></canvas>
        <div class="login-inner-wrap" v-if="isShowLogin">
        <div class="ms-title">极夫特商城内部管理后台</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="user">
                    <el-input v-model="ruleForm.user" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="pwd">
                    <el-input type="password" placeholder="请输入密码" v-model="ruleForm.pwd" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-form-item class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
                <div class="login-tips-btn" @click="handleShowModify">修改密码</div>
            </el-form>
        </div>
        </div>
        <section v-else class="modify-inner-wrap">
        <div class="md-title">修改密码</div>
        <div class="modify-wrap">
        <el-form :model="modifyRuleForm" :rules="modifyRules" ref="modifyRuleForm" label-width="100px">
                <el-form-item prop="user" label="管理员账号">
                    <el-input v-model="modifyRuleForm.user" placeholder="请输入管理员账号"></el-input>
                </el-form-item>
                <el-form-item prop="pwd" label="原密码">
                    <el-input type="password" placeholder="请输入原密码" v-model="modifyRuleForm.pwd"></el-input>                   
                </el-form-item>
                <el-form-item prop="newPwd" label="新密码">
                    <el-input type="password" placeholder="请输入新密码" v-model="modifyRuleForm.newPwd"></el-input>
                </el-form-item>
                <el-form-item prop="verifyPwd" label="确认新密码">
                    <el-input type="password" placeholder="请确认新密码" v-model="modifyRuleForm.verifyPwd"></el-input>
                </el-form-item>
                <el-form-item class="login-btn" label="">
                    <el-button type="primary" @click="isShowLogin=true" plain>取消</el-button>
                    <el-button type="primary" @click="confirmModifyCode('modifyRuleForm')">确认</el-button>
                </el-form-item>
                <span class="code-tips">若忘记原密码请联系超管重置</span>
            </el-form>
        </div>
         </section>
         
    </div>
</template>

<script>
import CanvasParticle from "../../utils/canvasParticle.js";
import {getClientHeight,getClientWidth} from"../../utils/utils.js"
export default {
        data: function(){
            return {
                docWidth:getClientWidth(),
                docHeight:getClientHeight()/1.5,
                isShowLogin:true,
                ruleForm: {
                    user: localStorage.getItem('userName')||"",
                    pwd: ''
                },
                rules: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    pwd: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                },
                modifyRuleForm: {
                    user: '',
                    pwd: '',
                    newPwd: '',
                    verifyPwd: '',
                },
                modifyRules: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    pwd: [
                        { required: true, message: '请输入原密码', trigger: 'blur' }
                    ],
                     newPwd: [
                        { required: true, message: '请输入新密码', trigger: 'blur' }
                    ],
                     verifyPwd: [
                        { required: true, message: '请确认新密码', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            handleShowModify(){
                this.isShowLogin=false;
                for(var key in this.modifyRuleForm){
                    this.modifyRuleForm[key]=""
                }
            },
            // 修改密码
            confirmModifyCode(formName){
            this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(this.modifyRuleForm.newPwd!==this.modifyRuleForm.verifyPwd){
                             this.$message.error("两次密码不一致，请确认！");
                              return false;
                        }
                        this.$axios.post('/permission/adminer/updatePassword',this.modifyRuleForm)
                        .then((res)=> {
                            const _data=res.data;
                            if(_data.code==0){
                                this.$message({
                                    message: '恭喜你，修改成功，请使用新密码进行登录！',
                                    type: 'success'
                                });
                                setTimeout(()=>{
                                    this.isShowLogin=true;
                                    this.ruleForm.pwd="";
                                },1000)
                                
                            }else{
                                this.$message.error(_data.message);
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$router.push('/home');
                        sessionStorage.setItem('__uid__',"1");
                        sessionStorage.setItem('userName',this.ruleForm.user);
                        return;
                        // 登录逻辑
                        this.$axios.post('/app/login/login',this.ruleForm)
                        .then((res)=> {
                            const _data=res.data;
                            if(_data.code==0){
                                sessionStorage.setItem('__uid__',"1");
                                localStorage.setItem('userName',this.ruleForm.user);
                                if(["admin","administrator"].indexOf(this.ruleForm.user)>-1){
                                    sessionStorage.setItem('__isAdmin',"1");
                                    // 根据用户名判断，如果是"admin"或"administrator"，认为是超级管理员，右侧菜单不判断，则拥有所有权限
                                }else{
                                    sessionStorage.setItem('column',JSON.stringify(_data.data));
                                }
                                sessionStorage.setItem('__token__',(new Date).getTime());
                                this.$router.push('/home');
                            }else{
                                this.$message.error(_data.message);
                            }
                        }).catch(()=>{
                            this.$message.error(_data.message);
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        },
        created(){
            sessionStorage.clear();
        },
        mounted() {
        var _canvas = new CanvasParticle(document.querySelector("#canvas-root"),{length:100,clicked:true,moveon:true})
        _canvas.Run()
        },
    }
</script>

<style lang="scss">
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        // background: #324157;
        background-image: url("../../../static/img/sky.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        .login-tips-btn{
        font-size:14px;
        color:#999;
        text-align:right;
        cursor: pointer;
        
        }
    }
   .login-inner-wrap{
        position: absolute;
        left:0;
        right:0;
        top:50%;
        width:400px;
        margin:0 auto;
        margin-top:-180px;
        .login-btn button{
        width:100%;
        height:50px;
    }
     }
    .ms-title,.md-title{
        text-align: center;
        font-size:30px;
        color: #fff;
        margin-bottom:10px;

    }
    .md-title{
        font-size:20px;
    }
    .ms-login, .modify-wrap{

        // height:160px;
        margin:0 auto;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    
    .modify-inner-wrap{
         position: absolute;
        left:0;
        right:0;
        top:50%;
        width:600px;
        margin:0 auto;
        margin-top:-210px;
    }
    .code-tips{
        // position: absolute;
       font-size: 12px;
       color: #999;
       text-align:left;
       padding-left: 100px;
       display: block;
    }
</style>
