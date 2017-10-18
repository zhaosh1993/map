// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
//import Home from './components/HelloFromVux'
import vuexI18n from 'vuex-i18n';
import VueAMap from 'vue-amap';
import Test from './pages/Test.vue';
import NotFoundComponent from './pages/NotFoundComponent.vue';
import Home from './pages/Home.vue';
import quren from './pages/quren.vue';
import map from './pages/map.vue';
import ErrorVue from './pages/ErrorVue.vue';
import ListVue from './pages/List.vue';
import Listdetails from './pages/Listdetails.vue';
import QRcode from './pages/QRcode.vue';
import Utils from './utils';
import {
    AjaxPlugin
} from 'vux';

require('es6-promise').polyfill();
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueAMap);
Vue.use(AjaxPlugin);
Vue.prototype.$utils=Utils;


// --------------------------------
VueAMap.initAMapApiLoader({
    key: 'd345d0dc5ccaa689e39666a327629106',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'MarkerClusterer']
});

// --------------------------------
const store = new Vuex.Store({
    modules: {
        i18n: vuexI18n.store
    }
});
store.registerModule('vux', {
        state: {
            demoScrollTop: 0,
            isLoading: false,
            direction: 'forward'
        },
        mutations: {
            updateDemoPosition(state, payload) {
                state.demoScrollTop = payload.top
            },
            updateLoadingStatus(state, payload) {
                state.isLoading = payload.isLoading
            },
            updateDirection(state, payload) {
                state.direction = payload.direction
            }
        },
        actions: {
            updateDemoPosition({ commit }, top) {
                commit({ type: 'updateDemoPosition', top: top })
            }
        }
    })
    // --------------------------------
Vue.use(vuexI18n.plugin, store);
// translations can be kept in separate files for each language
// i.e. resources/i18n/de.json.
const translationsDe = {
    "Basic Usage": "基本使用"
};
// add translations directly to the application
Vue.i18n.add('zh-CN', translationsDe);

// set the start locale to use
Vue.i18n.set('zh-CN');
// --------------------------------
const routes = [];
const router = new VueRouter({
        routes: [
            { path: '/', redirect: Test },
            { path: "/test", name: "test", component: Test },
            { path: "/NotFoundComponent", name: 'found', component: NotFoundComponent },
            { path: "/Home", name: 'home', component: Home },
            { path: "/quren", name: 'quren', component: quren },
            { path: "/map", name: 'map', component: map },
            { path: "/ErrorVue", name: 'error', component: ErrorVue },
            { path: "/list", name: 'list', component: ListVue },
            { path: "/listdetails", name: 'listdetails', component: Listdetails },
            { path: "/qrcode", name: 'qrcode', component: QRcode }

        ]
    })
    // sync(store, router)
    // simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach(function(to, from, next) {
    store.commit('updateLoadingStatus', { isLoading: true })

    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)

    if (toIndex) {
        if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
            store.commit('updateDirection', { direction: 'forward' })
        } else {
            store.commit('updateDirection', { direction: 'reverse' })
        }
    } else {
        ++historyCount
        history.setItem('count', historyCount)
        to.path !== '/' && history.setItem(to.path, historyCount)
        store.commit('updateDirection', { direction: 'forward' })
    }

    if (/\/http/.test(to.path)) {
        let url = to.path.split('http')[1]
        window.location.href = `http${url}`
    } else {
        next()
    }
})

router.afterEach(function(to) {
    store.commit('updateLoadingStatus', { isLoading: false })

})



Vue.prototype.changeData = function (){
  alert('执行成功');
}



// --------------------------------


FastClick.attach(document.body)

Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    store,
    router,
    el: "#app-box",
    render: h => h(App)
})