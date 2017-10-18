<template>
    <div class="listvue">
      <div style="height:44px;">
        <div class="searchinput">
          <div></div>
          <search@result-click="resultClick"
            @on-change="getResult"
            :results="results"
            v-model="value"
            position="absolute"
            auto-scroll-to-top top="46px"
            @on-focus="onFocus"
            @on-cancel="onCancel"
            @on-submit="onSubmit"
            ref="search">
          </search>
        </div>
        <div class="peisongyuan">
          <span>配送员:#####</span>
          <span class="nextday">&gt;</span>
          <span class="nowdate">2017-09-16</span>
          <span class="preday">&lt;</span>
        </div>
        <sticky scroll-box="vux_view_box_body" ref="sticky" :offset="46" :check-sticky-support="false">
          <tab :line-width="3">
            <tab-item selected ref="tab1">全部(数值)</tab-item>
            <tab-item ref="tab1">配送中(数值)</tab-item>
            <tab-item ref="tab1">已完成(数值)</tab-item>
          </tab>
        </sticky>
      </div>
      <div class="list-body">
          <div v-for="item in lists" class="listitem">
            <div class="listheader">
              <span>配送任务编号:{{item.listnum}}</span>
              <span @click="slideshow($event)" :class="showorhide"></span>
              <span>订单票数:**</span>
            </div>
            <div class="listshoworhide">
                <div class="listnum">
                <span>1</span><span>订单编号:{{item.listnum}}</span><span>已出发</span>
                </div>
                <div class="listtime">
                    <span></span><span>配送时间:</span>
                </div>
                <div class="listreceive">
                    <span></span>
                    <span>收货人</span>
                    <span>呼叫</span>
                </div>
                <div class="listadd">
                    <span></span><span>收货地址</span>
                </div>
                <button class="listbuttonsure">确认收货</button>
                <button>订单详情</button>
                <button><router-link :to="{name:'error'}">订单异常</router-link></button>
            </div>
            
          </div> 
      </div>
    </div>
  </template>

<script>
    import {
        Search,
        XButton,
        Tab,
        TabItem,
        Sticky
    } from 'vux';


    export default {
        components: {
            Tab,
            TabItem,
            Sticky,
            Search,
            XButton
        },
        data() {
            return {
                showSpace: false,
                lists: [{
                    listnum: "2017091608220001",
                    sendtime: new Date(),
                    receiveman: "张三",
                    add: "66号公路"
                }, {
                    listnum: "2017091608220001",
                    sendtime: new Date(),
                    receiveman: "张三",
                    add: "66号公路"
                }, {
                    listnum: "2017091608220001",
                    sendtime: new Date(),
                    receiveman: "张三",
                    add: "66号公路"
                }, {
                    listnum: "2017091608220001",
                    sendtime: new Date(),
                    receiveman: "张三",
                    add: "66号公路"
                }],
                results: [],
                value: '请输入用户名/手机号码',
                showorhide:"show"

            }
        },
        methods: {
            spaceChange() {
                this.showSpace = !this.showSpace
                this.$nextTick(() => {
                    this.$refs.sticky.bindSticky();
                })
            },
            slideshow(event){
                if(this.showorhide==="show"){
                    this.showorhide="hide"
                    event.target.parentNode.parentNode.children[1].style.display="none";
                    event.target.parentNode.parentNode.style.height="50px";
                }else{
                    this.showorhide="show";
                    event.target.parentNode.parentNode.children[1].style.display="block";
                    event.target.parentNode.parentNode.style.height="300px";
                }
            },
            setFocus () {
                this.$refs.search.setFocus()
            },
            resultClick (item) {
                window.alert('you click the result item: ' + JSON.stringify(item))
            },
            getResult (val) {
                this.results = val ? getResult(this.value) : []
            },
            onSubmit () {
                this.$refs.search.setBlur()
                this.$vux.toast.show({
                type: 'text',
                position: 'top',
                text: 'on submit'
                })
            },
            onFocus () {
            console.log('on focus')
            },
            onCancel () {
            console.log('on cancel')
            }
        },
        created(){
             this.$http.get('http://my.chint.weilian.cn:40892/centralManagerApi/centralManagerObject',{"getSignNo":{"staffname":"敏敏"}}).then(response => {
                    console.log(response);
                }, response => {
                    console.log(response);
                });
        }
    }
    function getResult (val) {
    let rs = []
    for (let i = 0; i < 20; i++) {
        rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
        })
    }
    return rs
    }
</script>
<style scoped>
    .listvue {
        margin-top: -14px;
    }
    
    .space-btn {
        padding: 5px 0;
        margin: 10px;
        text-align: center;
        border: 1px red solid;
    }
    
    .space {
        padding: 30px 0;
        margin: 10px;
        text-align: center;
        border: 1px green solid;
    }
    /* .vux-tab-ink-bar {
        background-color: red;
    } */
    
    .list-body {
        margin-top: 90px;
    }
    
    .list-body button {
        display: inline-block;
        width: 5rem;
        height: 30px;
        border-radius: 30px;
        border:1px solid #797979;
        float:right;
        margin:10px 5px 0px;
        background-color:#f5f5f5;
    }
    .list-body button a{
        color:#000;
    }
    .list-body .listitem .listbuttonsure{
        color:#EB3838;
        border:1px solid #EB3838;
    }
    .list-body .listitem{
        transition:all 0.2s;
        height:300px;
    }
    .searchinput input{
        width:80%;
        margin:10px auto;
        display:block;
        height:30px;
        border-radius:30px;
        border:1px solid #797979;
        padding-left:10px;
        outline-style:none;
    }
    .peisongyuan{
        height:50px;
        border-top:1px solid #797979;
        border-bottom:1px solid #797979;
        line-height:50px;
    }
    .peisongyuan span:nth-child(1){
        float:left;
    }
    .peisongyuan span:nth-child(2),
    .peisongyuan span:nth-child(3),
    .peisongyuan span:nth-child(4){
        float:right;
    }
    .peisongyuan .nextday,.peisongyuan .preday{
        border:1px solid #ccc;
        height:30px;
        width:30px;
        margin-top:10px;
        line-height:30px;
        text-align:center;
    }
    .peisongyuan .nowdate{
        margin:0 10px;
    }

    .list-body .listheader{
        height:50px;
        background-color:#ccc;
        line-height:50px;
    }
    .listheader span:nth-child(1){
        float:left;
    }
    .listheader span:nth-child(3),.listheader span:nth-child(2){
        float:right;
    }
    .listheader span:nth-child(2){
        height:30px;
        width:30px;
        margin: 0 10px;
        background-color:#fff;
        background:url(../assets/down.png) no-repeat;
        background-size:30px 30px;
        margin-top:10px;
        line-height:30px;
        text-align:center;
    }
    .list-body .listadd{
        border-bottom:1px solid #797979;
    }
    .list-body .listadd,.list-body .listnum,.list-body .listreceive,.list-body .listtime{
        height:50px;
        line-height:50px;
    }
    .list-body .listnum span:nth-child(1),.list-body .listnum span:nth-child(2){
        float:left;
    }
    .list-body .listnum span:nth-child(3){
        float:right;
        margin-right:20px;
    }
    .list-body .listreceive span:nth-child(1),.list-body .listreceive span:nth-child(2){
        float:left;
    }
    .list-body .listreceive span:nth-child(3){
        float:right;
        margin-right:20px;
    }
    .list-body .listnum span:nth-child(1),.list-body .listtime span:nth-child(1),.list-body .listreceive span:nth-child(1),.list-body .listadd span:nth-child(1){
        display:inline-block;
        width:30px;
        height:30px;
        margin-left:20px;
    }
</style>