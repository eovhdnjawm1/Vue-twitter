import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";


const store = createStore({
	state() {
		return {
			user: null,
		}
	},
	mutations: {
		// state를 변경하고싶을때
	SET_USER: ( state, user ) => {
		state.user = user;
	}
	},
	plugins: [createPersistedState()],

})

export default store