import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeData : [
      {
        title: "toto",
        describe: 'blabla'
      },
      {
        title: "toto2",
        describe: 'blabla2'
      }
    ]
  },
  mutations: {
    setStoreData(state, value){
      state.storeData = value
    }
  },
  actions: {
  },
  modules: {
  }
})
