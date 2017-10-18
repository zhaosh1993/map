<template>
	<div id="quren">
			<ul>
			<li><span>配送任务编码：&nbsp&nbsp</span><span>1546</span></li>
			<li><span>配送订单数：&nbsp&nbsp</span><span>02013</span></li>
			<li><span>配送人员：&nbsp&nbsp</span><span>用户名</span></li>
		</ul>
		<button @click="dothis" v-bind:class="[styles]">已清点订单，确认配送任务</button>
	</div>
</template>

<script>
export default {
  name:'quren',
  data () {
    return {
      styles:"changes"
    }
  },
    methods:{
    	dothis:function(event){
    		var that= this;
    		this.styles='change'
    		event.target.innerHTML='开始规划'
    		setTimeout(function(){
    			that.$router.push("map")
    		},1000)
    		

    	}
    }
}
</script>


<style scoped>
div{
		
		text-align: center;
	}
ul {
	margin-top: 20px;
	list-style:none;
}
li{
	text-align: left;
	text-indent: 10px;
	height: 30px;
	line-height: 30px;
	border-bottom: 1px solid gainsboro;
	}
li>span:nth-child(1){
	color: #CCCCCC;
	}
.changes{
	margin-top: 20px;
	width: 90%;
	border: none;
	outline: none;
	color: #FFFFFF;
	height: 50px;
	background: #0767B1;
	border-radius: 5px;
	}

.change{
	margin-top: 20px;
	width: 90%;
	border: none;
	outline: none;
	color: #FFFFFF;
	height: 50px;
	background: gray;
	border-radius: 5px;
	}
</style>