<template>
  <div class="listdetails">
    <div class="listdetailsheader">
      <p>
        订单详情
      </p>
    </div>
    <div class="centent">
      <!--订单状态-配送中-->
      <div class="order_status clearfix">
        <div class="aui-pull-left">
          <h3>配送中</h3>
          <p>宁家小哥正在送货途中</p>
        </div>
        <div class="aui-pull-right">
          <i class="icon njfont nj-peisongzhong1"></i>
          <em></em>
        </div>
      </div>
      <!--订单状态-配送中end-->
      <!--订单状态-已签收-->
      <div class="order_status" style="display: none;">
        <div class="aui-pull-left">
          <h3>已签收</h3>
          <p>您的包裹已确认签收</p>
        </div>
        <div class="aui-pull-right">
          <i class="icon njfont nj-yiqianshou1"></i>
          <em></em>
        </div>
      </div>
      <!--订单状态-已签收end-->
      <!--商品列表-->
      <div class="aui-content">
        <ul class="aui-list aui-media-list top_div">
          <li class="aui-list-item li1" id="logistics">
            <div class="aui-media-list-item-inner clearfix">
              <div class="aui-list-item-label-icon">
                <i class="icon njfont nj-peisongzhong"></i>
              </div>
              <div class="aui-list-item-inner aui-list-item-arrow">
                <div class="aui-list-item-text">
                  <div class="aui-list-item-title"><strong class="aui-text-danger orderstatus">配送中</strong><span class="aui-font-size-14 text_c_gray"></span></div>
                </div>
                <p class="orderstatustime">2016.11.16 23:50</p>
              </div>
            </div>
          </li>
          <li class="aui-list-item li2">
            <div class="aui-media-list-item-inner clearfix">
              <div class="aui-list-item-label-icon">
                <i class="icon njfont nj-shijian"></i>
              </div>
              <div class="aui-list-item-inner">
                <div class="aui-list-item-text">
                  <div class="aui-list-item-title">配送时间：<span id="picker3">今天 11:00-11:30</span></div>
                </div>
              </div>
            </div>
          </li>
          <li class="aui-list-item li3">
            <div class="aui-media-list-item-inner clearfix">
              <div class="aui-list-item-label-icon">
                <i class="icon njfont nj-dizhi"></i>
              </div>
              <div class="aui-list-item-inner">
                <div class="aui-list-item-text">
                  <div class="aui-list-item-title consigneename">收货人：张晓天(18878996688)<span class="aui-font-size-14 text_c_gray"></span></div>
                  <div class="aui-list-item-right aui-font-size-14"></div>
                </div>
                <p class="consigneeaddr"><span class="aui-label aui-label-info">公司</span>&nbsp;广西省南宁市青秀区航洋国际城A座03室</p>
              </div>
            </div>
          </li>
        </ul>
        <div class="space"></div>
        <ul class="aui-list aui-media-list commodity_list subtotal_list aui-margin-b-15 goodsinfo">
          <li class="aui-list-item lishopinfo">
            <div class="shopinfo clearfix">
              <span>商品信息</span>
              <span>共6件</span>
            </div>
          </li>
          <li class="aui-list-item">
            <div class="aui-media-list-item-inner clearfix goodsdetails">
              <div class="aui-list-item-media goodsdetails-left">
                <img src="../assets/demo1.png">
              </div>
              <div class="aui-list-item-inner suggest goodsdetails-right">
                <h4>商品标题最多可显示两行商品标题最多可显示两行</h4>
                <p>规格：500g/盒</p>
                <p>单价：￥74.8/盒&nbsp;&nbsp;&nbsp;<del>￥98.8</del></p>
              </div>
              <div class="subtotal">
                <span>￥74.8</span>
                <p>1盒</p>
              </div>
            </div>
          </li>
          <li class="aui-list-item">
            <div class="aui-media-list-item-inner clearfix goodsdetails">
              <div class="aui-list-item-media goodsdetails-left">
                <img src="../assets/demo1.png">
              </div>
              <div class="aui-list-item-inner suggest goodsdetails-right">
                <h4>商品标题最多可显示两行商品标题最多可显示两行</h4>
                <p>规格：500g/盒</p>
                <p>单价：￥74.8/盒&nbsp;&nbsp;&nbsp;<del>￥98.8</del></p>
              </div>
              <div class="subtotal">
                <span>￥74.8</span>
                <p>1盒</p>
              </div>
            </div>
          </li>  
          <li class="aui-list-item totalprice">
            <div class="total_list">
              <span>商品总价</span>
              <font>￥98.8</font>
            </div>
          </li>
          <li class="aui-list-item youhuiprice">
            <div class="total_list">
              <span>优惠金额</span>
              <font>-￥2.6</font>
            </div>
          </li>
          <li class="aui-list-item payprice">
            <div class="total_text">实付金额：<span class="prices_text">¥<strong>16.80</strong></span>&nbsp;(免费配送)</div>
          </li>
        </ul>
        <div class="space"></div>
        <ul class="aui-list aui-media-list">
          <li class="aui-list-item order-list">
            <div class="aui-list-item-inner">
              <div class="aui-list-item-text copylistnum">
                  <div class="aui-list-item-title order-number copylistnum-left">
                    <span>订单编号：88888989998</span>
                  </div>
                  <div class="aui-list-item-right aui-font-size-14 copylistnum-right">
                    <button>复制</button>
                  </div>
              </div>
              <p class="order-createtime">下单时间：2016.11.16 23:50</p>
              <p class="order-paytime">付款时间：2016.11.16 23:50</p>
              <p class="order-time">配送时间：2016.11.16 23:50</p>
            </div>
          </li>
        </ul>
      </div>
      <!--商品列表 end-->
    </div>
  
  </div>
</template>
<script>
  
</script>
<style>
  .order_status {
    height:120px;
    background-color:#eb3838;
  }
  
  .order_status .aui-pull-left{
    float:left;
    margin:1rem 0 0 2rem;
    color:#fff;
  }
  .order_status .aui-pull-right{
    float:right;
    width:1rem;
    height:1rem;
    margin-right:80px;
    margin-top:10px;
  }
  .order_status .aui-pull-right i.icon{
    font-size:65px;
    color:#fff;
  }
  .aui-content .li1,.aui-content .li2,.aui-content .li3{
    height:60px;
  }

  .aui-content .li1>div>div,.aui-content .li2>div>div,.aui-content .li3>div>div{
    float:left;
  }

  .aui-content li>div>div:nth-child(1){
    margin:5px 10px 0px;
  }
  .aui-list-item .aui-media-list-item-inner .aui-label-info{
    background-color:#044C83;
    color:#fff;
  } 
  .aui-content .space{
    height:10px;
    background-color:#ddd;
  }
  .aui-content .shopinfo{
    height:40px;
    line-height:40px;
    padding:0px 20px;
    border-bottom:1px solid #ccc;
  }
  .aui-content .shopinfo span:nth-child(1){
    float:left;
  }
  .aui-content .shopinfo span:nth-child(2){
    float:right;
  }
  .aui-content .goodsdetails .goodsdetails-left,.aui-content .goodsdetails .goodsdetails-right{
    float:left;
  }
  .aui-content .goodsdetails .subtotal{
    float:right;
    margin-right:10px;
  }
  .aui-content .goodsdetails .subtotal span{
    font-weight:bold;
  }
  .aui-content .goodsdetails .goodsdetails-left img{
    width:100px;
    height:80px;
  }
  .aui-content .goodsdetails .goodsdetails-right{
    width:200px;
  }
  .aui-content .goodsdetails .goodsdetails-right p{
    font-size:14px;
  }
  .aui-content .totalprice,.aui-content .youhuiprice,.aui-content .payprice{
    height:40px;
    line-height:40px;
    padding:0 20px;
  }
  .aui-content .youhuiprice{

  }
  .aui-content .payprice{
    border-top:1px solid #ccc;
    text-align:right;
  }
  .aui-content .payprice span{
    color:red;
  }
  .copylistnum{
    height:30px;
  }
  .copylistnum .copylistnum-left{
    float:left;
  }
  .copylistnum .copylistnum-right{
    float:right;
  }
  .aui-content .order-list p{
    padding:0 10px;
  }
 .copylistnum .copylistnum-right button{
   height:28px;
   width:60px;
   border:1px solid #ccc;
   background-color:#f5f5f5;
   border-radius:10px;
 }


  .clearfix:after{
  content: ""; 
  display: block; 
  height: 0; 
  clear: both;  
  }
</style>