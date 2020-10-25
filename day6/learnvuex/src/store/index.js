import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 1000
    },
    mutations: {
        // 方法
        increment(state) {
            state.counter++
        },
        decrement(state, payload) {
            state.counter--
            //Vue.delete(state, 'name')
            Vue.set(state, 'name', payload)
        },
        addCount(state, payload) {
            state.counter += payload.num
            Vue.set(state, 'name', 'jusne')
        }
    },
    actions: {
        request(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('decrement', payload)
                    console.log(payload)
                    resolve('1111111')
                }, 1000);
            })
        }
    },
    getters: {
        powCounter(state) {
            return state.counter * state.counter
        },
        sasa(state, getters) {
            return getters.powCounter
        },
        // 传递参数
        sss(state) {
            return (age) => {
                return state.powCounter.filter(s => s > 10000)
            }
        }
    },
    modules: {
        a: {
            state: {
                name: 'a'
            },
            mutations: {},
            actions: {},
            getters: {
                funName(state, getters, rootstat) {

                }
            }
        }
    }
})

export default store