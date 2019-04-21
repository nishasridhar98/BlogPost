import Vuex from 'vuex';
import Vue from 'vue';
import post from './modules/Posts';

//Load Vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
	modules: {
		post
	}//modules obj
});