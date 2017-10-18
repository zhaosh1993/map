<template>
  <div class="hello">
  	
  	<ul>
  		<li><div></div></li>
  		<li v-for="item in items">{{item.msg}}</li>
  	</ul>

  	<ul>
  		<li>请及时签到，准备配送任务</li>
  		<li>您前面还有：{{people}}人</li>
  		<li>临近前排人员：{{peopleName}}</li>
  		<li>刷新:{{time}}</li>
  		<li><button v-on:click="dothis" v-bind:class="styles" >{{qiaodao}}</button></li>
  	</ul>
  	
   
  </div>
</template>

<script>
import { dateFormat } from 'vux';
export default {
  name: 'test',
  data () {
    return {
       items: [
      { msg: '用户名' },
      { msg: '1841234567' }
    ],
    people:'66',
    peopleName:'君立',
    qiaodao:'签到', 
    doing:'正在签到',
    time: dateFormat(new Date(), 'HH:mm:ss'),
    styles:'change'
    }   
  },
  methods:{
     	dothis:function(event){
        if(this.styles==='changs'){
          this.styles='change';
     		  event.target.innerHTML ='签到';
        }else{
          this.styles='changs';
     		  event.target.innerHTML ='取消签到';
       console.log()
        }
     		
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		list-style: none;
	}
	
h1, h2 {
  font-weight: normal;
}

div>ul:nth-child(1){
  padding: 40px 0;
  border-bottom: 1px solid gainsboro;
  /*border-top: 1px solid gainsboro;*/
  text-align: center;
}

div>ul:nth-child(1)>li:nth-child(1) div{
	height: 60px;
	width: 60px;
	background:url("../assets/000.jpg") no-repeat -13px 0px;
  background-size:148%;
}
div>ul:nth-child(1)>li:nth-child(1){
	height: 60px;
	width: 60px;
	border-radius:50% ;
	overflow: hidden;
	display: inline-block;
}


div>ul:nth-child(2){
	padding: 20px 0 300px 0px;
	text-align: center;
}
div>ul:nth-child(2) li{
	margin-bottom:20px ;
}
div>ul:nth-child(2)>li:nth-child(4){
	height: 30px;
  line-height:30px;
	display: inline-block;
  background: #FF9000;
  color: #FFFFFF;
  border-radius:30px;
  padding: 0 12px;
}
div>ul:nth-child(2)>li button{
  outline-style:none;
}

/*div>ul:nth-child(2)>li:nth-child(5) button{

}*/

.change{
width: 90%;
height: 50px;
color: #FFFFFF;
font-size:16px ;
border: none;
border-radius: 10px ;
background: #0767B1;
}
.changs{
width: 90%;
height: 50px;
color: #000;
font-size:16px ;
border: none;
border-radius: 10px ;
background: green;

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
</style>
