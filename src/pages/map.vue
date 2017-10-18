<template>
  <div id="map">
    

        <!--<mapDrag @drag="dragMap" class="mapbox"></mapDrag>
        <ul class="info">
          <li><span>经度：</span>{{ dragData.lng }}</li>
          <li><span>纬度：</span>{{ dragData.lat }}</li>
          <li><span>地址：</span>{{ dragData.address }}</li>
          <li><span>最近的路口：</span>{{ dragData.nearestJunction }}</li>
          <li><span>最近的路：</span>{{ dragData.nearestRoad }}</li>
          <li><span>最近的POI：</span>{{ dragData.nearestPOI }}</li>
        </ul>-->
     
      <div id="container"></div>
			
    </div>
 
 
</template>

<script>
//import mapDrag from '../components/mapDrag'
export default {
name: 'map',
//components: {
//  mapDrag
//},
  data () {
    return {
      dragData: {
//      lng: null,
//      lat: null,
//      address: null,
//      nearestJunction: null,
//      nearestRoad: null,
//      nearestPOI: null
//       path = [];
				
      },
   
    }
  }, 
  mounted(){
  	var map, route, marker, polyline, startMarker, geolocation;
			var path = [];
			var locationg = '上海市嘉里中心';
			//基本地图加载
			map = new AMap.Map("container", {
				resizeEnable: true,
//				 center: [116.397428, 39.90923]        
			});

  	
  },
  methods: {
//  dragMap (data) {
//    console.log(data)
//    this.dragData = {
//      lng: data.position.lng,
//      lat: data.position.lat,
//      address: data.address,
//      nearestJunction: data.nearestJunction,
//      nearestRoad: data.nearestRoad,
//      nearestPOI: data.nearestPOI
//    }
//  }
//		//浏览器定位
//			map.plugin('AMap.Geolocation', function() {
//				geolocation = new AMap.Geolocation({
//					enableHighAccuracy: true, //是否使用高精度定位，默认:true
//					timeout: 10000, //超过10秒后停止定位，默认：无穷大
//					buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
//					zoomToAccuracy: false, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
//					buttonPosition: 'RB',
//					panToLocation: false, //定位成功后将定位到的位置作为地图中心点，默认：true
//					//          buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
//					showButton: false, //显示定位按钮，默认：true
//					showCircle: false,
//					//          noIpLocate:3,
//					//          noGeoLocation:0
//				});
//				map.addControl(geolocation);
//				geolocation.getCurrentPosition();
//				AMap.event.addListener(geolocation, 'complete', onComplete); //返回定位信息       
//			});
//			
//			//解析定位结果
//			function onComplete(data) {
//				path.unshift([data.position.getLng(), data.position.getLat()]);
//				map.plugin("AMap.DragRoute", function() {
//					route = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE); //构造拖拽导航类
//					route.search(); //查询导航路径并开启拖拽导航
//				});
//			}
//			//获取目的地的经纬度
//			function geocoder(location) {
//				var geocoder = new AMap.Geocoder({
//					city: "全国", //城市，默认：“全国”
//					radius: 10000 //范围，默认：500
//				});
//				//地理编码,返回地理编码结果
//				geocoder.getLocation(locationg, function(status, result) {
//					if(status === 'complete' && result.info==='OK') {
//						var geocode = result.geocodes;
//						path.unshift([geocode[0].location.getLng(),geocode[0].location.getLat()]);
//
//					}
//				});
//			}

  }
}

//console.log(locationg)
</script>

<style>
body{ margin: 0; }
.mapbox{
	height: 40rem;
	width: 80%;
	margin: 0 auto;
}

</style>
