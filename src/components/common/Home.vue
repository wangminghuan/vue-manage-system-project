<template>
    <div class="outer-wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="outer-content-wrap">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    export default {
        components:{
            vHead,
            vSidebar
        }
    }
</script>
<style lang="scss">
.outer-content-wrap{
    background: none repeat scroll 0 0 #fff;
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom:0;
    width: auto;
    padding:40px;
    box-sizing: border-box;
    overflow-y: scroll;
    .ql-container-wrap {
    height: 300px;
    strong,
    b {
      font-weight: bold;
    }
    i,
    em,
    address,
    b {
      font-style: italic;
    }
  }
}
</style>

