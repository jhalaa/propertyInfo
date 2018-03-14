import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    address: {
      'line1': '483 Bright Street',
      'pin': 95138
    }
  },

  actions: {
    changeAddress (store, address) {
      store.state.address = address
    }
  },

  getters: {

    getLine1: state => {
      console.log(state.address.line1)
      return state.address.line1
    },

    getPin: state => {
      console.log(state.address.pin)
      return state.address.pin
    }
  }
})
