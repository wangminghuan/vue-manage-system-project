<template>
    <div class="com-head">
         <router-link class="logo" tag="div" to="/home">极夫特商城内部管理后台</router-link>
         <ul class="user-info clearfix">
            <li class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
            </li>
            <li>
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">{{userName}}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                fullscreen: false,
                userName:sessionStorage.getItem('userName')||"admin"
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    sessionStorage.clear();
                    this.$router.push('/login');
                }
            },
            handleFullScreen(){
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            }
        }
    }
</script>
<style lang="scss">
.com-head{
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
         background-color: rgb(64, 158, 255);
  .logo{
        float: left;
        width:250px;
        text-align: center;
        cursor: pointer;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
        li{
            display: inline-block;
            vertical-align: middle;
            margin-right: 20px;
        }
    }
    .btn-fullscreen{
            position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
        transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
    i{
            position: absolute;
    top: 7px;
    left: 0;
    }
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        // padding-left: 10px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
}
</style>
