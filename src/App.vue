<template>
  <div id="app" style="height:100%; background: #F5F5F5;">
    <loading v-model="isLoading"></loading>
    <drawer :show.sync="drawerVisibility" :show-mode="showModeValue" :placement="showPlacementValue" @on-show="changeDrawerShow" :drawer-style="{'background-color':'#35495e', width: '200px'}">

      <!-- drawer content -->
      <div slot="drawer">
      	
      	
      	 <group  style="margin-top:30px;" class='top'>
         <!--  <cell title="人员签到" link="/pages/test" @click.native="drawerVisibility = false">
          
         </cell> -->
        <ul v-show="true" class="sidebar">
          <!--<cell title="Buy me a coffee" link="/pages/NotFoundComponent.vue" @click.native="drawerVisibility = false">-->
          	<!--<router-link to="/router2"><span>router2</span></router-link>-->
         	<li @click="showTogglesubItem('/test')"><span>人员签到</span></li>
         	<li @click="showTogglesubItem('/qrcode')"><span>扫码绑单</span></li>
          <li @click="showTogglesubItem('/List')"><span>配送订单</span></li>  
          <li @click="showTogglesubItem('/map')"><span>线路规划</span></li>  
          <li @click="showTogglesubItem('/Home')"><span>通讯录</span></li>
          <li @click="showTogglesubItem('/NotFoundComponent')"><span>我的配送</span></li>
          <li @click="showTogglesubItem('/quren')"><span>确认配送任务</span></li> 
          <li @click="showTogglesubItem('/listdetails')"><span>订单详情</span></li>   
        </ul>
        </group>
         
      </div>

      <!-- main content -->
      <view-box ref="viewBox" body-padding-top="59px" body-padding-bottom="55px" >
        <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100">
          <span slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
            <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
          </span><span>{{titletext}}</span>
        </x-header>

        <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
        <transition :name="'vux-pop-in'">
        <router-view class="router-view"></router-view>
        </transition>
      </view-box>
    </drawer>
  </div>
</template>

<script>
import { Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, TransferDom } from 'vux'
import { mapState } from 'vuex';

export default {
  name: 'app',
  methods: {
    changeDrawerShow(state) {
      this.drawerShow = state;
    },
    showToggle: function(item) {
      item.isSubShow = !item.isSubShow
    },
    showTogglesubItem: function(componen) {
      this.drawerVisibility = false;
      var that=this;
    // setTimeout(function() {

      // that.$router.push("/component/Test")
      that.$router.push(componen);
      switch(componen){
        case "/test":
        this.titletext="人员签到";
        break;
        case "/NotFoundComponent":
        this.titletext="我的配送";
        break;
        case "/Home":
        this.titletext="通讯录";
        break;
        case "/quren":
        this.titletext="确认配送任务";
        break;
        case "/map":
        this.titletext="线路规划";
        break;
        case "/ErrorVue":
        this.titletext="订单异常";
        break;
        case "/List":
        this.titletext="配送订单";
        break;
      };
    // }, 300);
    }
  },
  data() {
    return {
      items: [
        {
//        name: '家用电器',
          isSubShow: true,
          subItems: [
            {
              name: '人员签到'
            },
            {
              name: '扫码绑定'
            },
            {
              name: '通讯录'
            },
            {
            	name:'线路规划'
            },
            {
              name:'确定配送任务'	
            }
          ]
        },
//      {
////        name: '服装',
//        isSubShow: true,
//        subItems: [
//          {
//            name: '男士服装'
//          },
//          {
//            name: '女士服装'
//          },
//          {
//            name: '青年服装'
//          }
//        ]
//      }
      ],
//    menus: {
//      'language.noop': '<span class="menu-title">Language</span>',
//      'zh-CN': '中文',
//      'en': 'English'
//    },
      drawerVisibility: false,
      showMode: 'push',
      showModeValue: 'push',
      showPlacement: 'left',
      showPlacementValue: 'left',
      titletext:"人员签到"
    }
  },
  components: {
    Radio,
    Group,
    Cell,
    Badge,
    Drawer,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Loading,
    Actionsheet
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  },
  mounted:function(){
    var that=this;
    setTimeout(function() {

      // that.$router.push("/component/test")
    }, 2000);
  }
}


</script>

<style lang="less">
// @import 'suneee.less';
@import '/static/iconfont/iconfont.css';

@import '~vux/src/styles/reset.less';


body {
  background-color: #fbf9fe;
}
li{
  list-style:none;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  min-width:320px;
}
span{
	color: black;
}
.demo-icon-22 {
  font-family: 'vux-demo';
  font-size: 22px;
  color: #888;
}

.sidebar{
  background-color:rgb(53, 73, 94);
}
.sidebar li{
  height:40px;
  line-height:40px;
  margin-left:20px;
}
.sidebar li span{
  color:#fff;
}

.vux-header-title span{
  color:#fff;
}

.weui-cells:before{
  border-top: 1px solid rgb(53,73,94) !important;
}

.weui-cells:after{
  border-bottom: 1px solid rgb(53,73,94) !important;
}

.weui-tabbar.vux-demo-tabbar {
  /** backdrop-filter: blur(10px);
  background-color: none;
  background: rgba(247, 247, 250, 0.5);**/
}

.vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
  color: #F70968;
}

.vux-demo-tabbar .weui-tabbar_item.weui-bar__item_on .vux-demo-tabbar-icon-home {
  color: rgb(53, 73, 94);
}

.demo-icon-22:before {
  content: attr(icon);
}

.vux-demo-tabbar-component {
  background-color: #F70968;
  color: #fff;
  border-radius: 7px;
  padding: 0 4px;
  line-height: 14px;
}

.weui-tabbar__icon+.weui-tabbar__label {
  margin-top: 0!important;
}

.vux-demo-header-box {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}

@font-face {
  font-family: 'vux-demo';
  /* project id 70323 */
  src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot');
  src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.woff') format('woff'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.svg#iconfont') format('svg');
}

.demo-icon {
  font-family: 'vux-demo';
  font-size: 20px;
  color: #04BE02;
}

.demo-icon-big {
  font-size: 28px;
}

.demo-icon:before {
  content: attr(icon);
}

.router-view {
  width: 100%;
  top: 59px;
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 59px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.menu-title {
  color: #888;
}
</style>
