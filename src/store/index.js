import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    active: 0,
    tabState: [
      { tab: false },
      { tab: false },
      { tab: false },
      { tab: false },
      { tab: false }
    ]
  },
  getters: {
    tabState: state => state.tabState
  },
  mutations: {
    openTabMuta: (state, num) => {
      state.tabState[num].tab = true;
    },
    closeTabMuta: (state, num) => {
      state.tabState[num].tab = false;
    }
  },
  actions: {
    openTabAct({ commit, state }, num) {
      state.isLoading = true;
      setTimeout(() => {
        commit("openTabMuta", num);
        state.isLoading = false;
      }, 50);
    },
    closeTabAct({ commit, state }, num) {
      state.isLoading = true;
      setTimeout(() => {
        commit("closeTabMuta", num);
        state.isLoading = false;
      }, 50);
    }
  },
  modules: {}
});
