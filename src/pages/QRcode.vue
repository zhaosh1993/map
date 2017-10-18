<!--<template>
	<div id="code">
		<ul>
			<li></li>
			<li>
				<p>扫码绑定订单号</p>
				<p>扫描商品单号确认订单</p>
				<button @click="QCodePlugin('')"><i class="icon njfont">&#xe6f2;</i>开始扫描</button>	
			</li>
		</ul>
	</div>
</template>

<script >
	export default {
  name:'code',
  data () {
    return {
      
    }
  },
  mounted(){
  	this.showScanResult();
//	this.changeData();
  },
    methods:{
//  	showScanResult();
    	
    	showScanResult(){
    	console.log('1111');
    	var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios
//      if(isAndroid){
            getJs("android");           
//      }else if(isiOS){
//          getJs("ios");
//      }
        
        function getJs(src){
	console.log('222');
            $.getScript("../static/js/cordova/"+src+"/cordova.js",function(){
            	
            	console.log('12221',111111)
//              document.querySelector("button").addEventListener("click",function(){
//                                                        
//              });
//           $('button').on(click,function(){
//           	
//           	QCodePlugin("QCode");
//           })
//           QCodePlugin("QCode");
            });
        }
        
        
       function QCodePlugin(url, opts, className) {
        	console.log("333")
            cordova.exec(
                function(data) {
                	alert(1);
                    alert(data);
                    
                    console.log("333")
                },
                function(e) {
                	alert(2);
                    alert(e)
                },
                "QCodePlugin", "start", [className, url, opts || {}]
            );
        }; 	
    	}
    }
}
	

//console.log($);


</script>

<style scoped>
    div{
    	background: #FFFFFF;
    	
    }
   	ul{
   	  margin-top: -14px;
   		text-align: center;
   		padding: 50px 0 600px 0 ;
   	}
	div>ul>li:nth-child(1){
		/*background: red;*/
		width: 50%;
		height: 14rem;	
		list-style: none;
		margin: 0 auto;
		background: url("../assets/code.jpg") ;
		background-size:100% 100%;
	}
	
	div>ul>li:nth-child(2){
		margin-top: 20px;
	}
	div>ul>li:nth-child(2)>p:nth-child(1){
		font-size: 26px;
		font-weight: 600;
	}
	div>ul>li:nth-child(2)>p:nth-child(2){
		margin-top: 10px;
		font-size: 16px;
		color: #999999;
	}
	div>ul>li:nth-child(2) button{
		margin-top: 50px;
		outline: none;
		border: none;
		background: #0767B1;
		color: #FFFFFF;
		height: 40px;
		line-height: 40px;
		width: 50%;
		border-radius: 40px;
		position: relative;
		font-size: 20px;
	}
	i{
		position: absolute;
		left: 1rem;
	}
</style>-->