<template>
    <div class="outer-sidebar-wrap">
        <el-menu :default-active="onRoutes" unique-opened router>
            <template v-for="item in (items)">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
// 全局菜单
const sidebarMenu = [
  {
    icon: "el-icon-tickets",
    index: "merchant",
    title: "商户管理",
    isallow: true,
    subs: [
      {
        index: "merchant_check_list",
        title: "服务商审核列表",
        isallow: true
      },
      {
        index: "merchant_servicer_list",
        title: "服务商列表",
        isallow: true
      },
      {
        index: "merchant_supplier_list",
        title: "供应商列表",
        isallow: true
      }
    ]
  },
];
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
    items() {
      //不涉及权限管理
        return sidebarMenu;
    },
    onRoutes() {
     return this.$route.path.replace("/", "");
    }
  },
  created() {
  }
};
</script>

<style lang="scss">
.outer-sidebar-wrap {
  display: block;
  position: absolute;
  width: 250px;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow: auto;
  ul {
    height: 100%;
  }
  // .el-menu {
  //   background-color: #324157;
  // }
  // .el-menu-item,
  // .el-submenu__title {
  //   color: #bfcbd9;
  // }
  // .el-menu-item.el-menu-item.is-active,
  // .el-submenu__title.el-menu-item.is-active {
  //   color: #409eff;
  // }
  // .el-menu-item:hover,
  // .el-submenu__title:hover {
  //   background-color: #48576a;
  // }
  // .el-menu-item:focus {
  //   outline: 0;
  //   // background-color: #ecf5ff;
  //   background-color: #48576a;
  // }
  // .el-submenu .el-menu {
  //   background-color: #1f2d3d;
  // }
}
</style>
