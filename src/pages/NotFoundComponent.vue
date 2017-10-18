<template>
  <div class="hello" >
    <div>  
    	<ul>
    		<li class="avatar"><div></div></li>
    		<li><span>用户名：111111</span>
    			<span>会员部门</span>
    		</li>
    		<li><button>签到</button></li>
    	</ul>
    	
    	
    	<ul>
    		<li><span>9月待结算收益</span><span>98987.00</span></li>
    		<li><span>9月配送订单</span><span>120票</span></li>
    		<li><span>累计收益</span><span>98987.00</span></li>
    	</ul>
    	
    	<p class="tixian"><span>可提现金额：</span><span>198</span><span>查看明细</span><button>提现</button></p>
    	
    	
    	<ul class="three">
    		
    		<p>配送消息</p>
    		<li>
    			<span>您的订单已准备完毕请及时提货</span>
    			<span>配送任务编号：12346</span>
    			<span>订单任务数目：11票</span>
    			<span>今天&nbsp&nbsp9:23</span>
    		</li>
    		<li>
    			<span>您的订单已准备完毕请及时提货</span>
    			<span>配送任务编号：12346</span>
    			<span>订单任务数目：11票</span>
    			<span>今天&nbsp&nbsp9:23</span>
    		</li>
    		<li>
    			<span>您的订单已准备完毕请及时提货</span>
    			<span>配送任务编号：12346</span>
    			<span>订单任务数目：11票</span>
    			<span>今天&nbsp&nbsp9:23</span>
    		</li>
    	</ul>
    	
    	
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'NotFoundComponent',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	list-style: none;
	padding: 0;
	margin: 0;
}
button{
	outline: none;
}
.hello{
	margin-top:-14px;
}
.hello .avatar{
	width:60px;
	height:60px;
	margin-left:20px;
	margin-top:5px;
}
.hello .avatar>div{
	width:60px;
	height:60px;
	background:url("../assets/000.jpg") no-repeat -13px 0px;
  background-size:148%;
	border-radius:50%;
}
.hello>div:nth-child(1)>ul:nth-child(1){
	padding-top: 20px;
	height: 100px;
	background: #0767B1;
	position: relative;
	
}
.hello>div:nth-child(1)>ul:nth-child(1)>li:nth-child(2) span{
	display: block;
	color: #FFFFFF;
}

.hello>div:nth-child(1)>ul:nth-child(1)>li:nth-child(2){
	position:absolute;
	left:100px;
	top:35px;
}
.hello>div:nth-child(1)>ul:nth-child(1)>li:nth-child(3) button{
	position: absolute;
	bottom: 45px;
	right:1.5rem;
	border: none;
	color: #FFFFFF;
	height: 30px;
	width: 4rem;
	border-radius: 50px;
	background: #3784BF;
}

.hello>div:nth-child(1)>ul:nth-child(1)>li:nth-child(2){
	
	
}
.hello>div:nth-child(1)>ul:nth-child(2){
	height: 30%;
	background: #2076B9;
	display: flex;
}
.hello>div:nth-child(1)>ul:nth-child(2) li{
	width: 33%;
	text-align: center;
	margin: 10px 0;
		
	border-right:1px solid #FFFDEF;
	/*padding: 10px;*/
	flex-direction: row;
}
.hello>div:nth-child(1)>ul:nth-child(2) li span{
	display: block;
	font-size: 14px;
	color: #fff;
}
.hello>div:nth-child(1)>ul:nth-child(2) li>span:nth-child(1){
	color: #6CC0F8;
}


.hello>div:nth-child(1)>ul:nth-child(2)>li:nth-child(3){
	border:none
}
.tixian {
	position:relative;
	padding: 20px 10px;
	height: 30px;
	line-height: 30px;
	background: #FFFFFF;
	display: flex;
	font-size: 14px;
	/*margin-bottom: 30px;*/
}
.tixian>span:nth-child(1){
	color: #9A9A9A;

	flex-direction: row;
	
}
.tixian>span:nth-child(2){
	color: #0767B1;

			flex-direction: row;
}
.tixian>span:nth-child(3){
	color: #FF9000;
	margin:0 10px;
	flex-direction: row;
}
.tixian button{
	width: 80px;
	height: 30px;
	background:  #FF9000;
	color: #FFFFFF;
	border-radius: 80px;
	border: none;
	outline:none;
	position:absolute;
	right:50px
}

.three{	
	margin-top: 30px;
	border: 1px solid gainsboro;
	background: #FFFFFF;;
	height: 600px;
	width: 100%;

}

.three>p {
	text-indent: 20px; 
	height: 20px;
	line-height: 20px;
	font-size:16px ;
	
}
.three li:nth-child(2){
	border-top:1px solid gainsboro;
}
.three li{
	font-size:1rem;
	padding-left: 20px;
	padding-top: 20px;
	height: 100px;
	background: #FFFFFF;
	border-bottom:1px solid gainsboro;
	position: relative;
}
.three span:nth-child(-n+2){
	display: block;
}
.three span:nth-child(2){
	color: #A0A0A0;
}
.three span:nth-child(3){
	color: #A0A0A0;
}
.three span:last-child{
	margin-left: 200px;
	position: absolute;
	top: 20px;
	right: 20px;
	color: #A0A0A0;
}
</style>
