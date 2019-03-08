import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		show_loading:'0',
	},
	mutations: {
		switch_loading(state,status){
			if(status == "change"){
				state.show_loading = !state.show_loading
			}
			state.show_loading = status;
		}
	},
	actions: {
		 
	},
	modules:{
		
	}
})

export default store
