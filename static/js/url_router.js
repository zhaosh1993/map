/*
 ** 所有的restful接口地址都需要在这里配置，然后在各个页面里面调用，统一管理接口，
 ** 页面里引用这个js，然后直接在逻辑里面用url_router.INDEX_URL
 */
(function (window, undefined) {
	"use strict";
	var url_router = {
		INDEX_URL: "http://baidu.com",
		JNQ_INDEX_URL: "http://baidu.com",
		PNQ_INDEX_URL: "http://baidu.com",
		//H5_HOST_URL:"http://172.19.5.201:30917",
		H5_HOST_URL:"",
		ERP_HOST:"http://172.16.36.70:40884",
		// 用户模块接口名称-start
		REGISTER_ONE:"/user/registerStepOne",
		REGISTER_TWO:"/user/registerStepTwo",
		LOGIN:"/user/login",
		LOGOUT:"/user/logout",
		ACCESSLOGIN:"/user/accessLogin",
		FINDPWDSTEPONE:"/user/findPwdStepOne",
		FINDPWDSTEPTWO:"/user/findPwdStepTwo",
		GET_USERINFO:"/user/getUserInfo",
		UPDATE_USERINFO:"/user/updateUserInfo",
		REFRESHUSERINFO:"/user/refreshUserInfo",
		// 用户模块接口名称-end
		//订单模块接口-start
		ADD_ORDER:"/order/insertOrder",
		GET_ORDERALLINFO:"/order/get",
		UPDATE_ORDER:"/order/update",
		//订单模块接口-end
		//图片上传
		UPLOAD_IMG:"http://172.16.36.70:8999/upload",
		//获取消息公告url
		MESSAGE_LIST_URL:"/broadCast/qryBroadCastListFromH5",
		UPDATE_MESSAGE_URL:"/broadCast/updateBroadCastFromH5",
		NOTICE_LIST_URL:"/bulletin/qryBulletinListFromH5",
		//h5服务中心url
		COMMONPROBLEM_LIST:"/qaAnswerRestService/queryQaAnswerListFromH5",
		FEEDBACK:"/qaAdviceRestService/insertQaAdviceFromH5",
		//问题类型 建议类型
        QACATEGORY:"/qaCategoryRestService/queryQaCategoryList",
		// 首页配置接口
		HOME_CONFIG_SEVER: "http://test.njxs.weilian.cn:8112",
	};

	window.url_router = url_router;
  url_router.H5_HOST_URL_CAR_REVISE = url_router.H5_HOST_URL
  url_router.H5_HOST_URL_CAR_DEL = url_router.H5_HOST_URL
  url_router.H5_HOST_URL_CAR_GET = url_router.H5_HOST_URL
  url_router.H5_HOST_URL4 = url_router.H5_HOST_URL
  url_router.H5_HOST_URL5 = url_router.H5_HOST_URL
  url_router.H5_HOST_URL6 = url_router.H5_HOST_URL
  url_router.H5_HOST_URL7 = url_router.H5_HOST_URL
  url_router.H5_HOST_URL8 = url_router.H5_HOST_URL
})(window);