<template>
  <div class="main tab" v-if="!isLoading">
    <div class="tab-item" v-if="tab1">
      <div class="items" v-on:click="goTo('person')">
        <span>1</span>
      </div>
      <div class="items center" v-on:click="close(0)">x</div>
    </div>
    <div class="tab-item" v-if="tab2">
      <div class="items" v-on:click="goTo('Form')">
        <span>2</span>
      </div>
      <div class="items center" v-on:click="close(1)">x</div>
    </div>
    <div class="tab-item" v-if="tab3">
      <div class="items" v-on:click="goTo('Homes')">
        <span>3</span>
      </div>
      <div class="items center" v-on:click="close(2)">x</div>
    </div>
    <div class="tab-item" v-if="tab4">
      <div class="items" v-on:click="goTo('FormPH')">
        <span>4</span>
      </div>
      <div class="items center" v-on:click="close(3)">x</div>
    </div>
    <!-- <button v-if="tab2">2</button> -->
    <!-- <button v-if="tab3" v-on:click="goTo('Homes')">3</button> -->
    <!-- <button v-if="tab3">3</button> -->
    <!-- <button v-if="tab4">4</button> -->
    <!-- <button v-if="tab5">5</button> -->
    <div class="tab"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabState: [
        { tab1: false },
        { tab2: false },
        { tab3: false },
        { tab4: false },
        { tab5: false }
      ],
      isLoading: true
    };
  },
  created() {
    let self = this;
    self.$store.watch(
      state => {
        return state.tabState;
      },
      () => {
        let self = this;
        self.isLoading = true;
        self.getTabStore();
      },
      {
        deep: true
      }
    );
  },
  mounted() {
    let self = this;
    self.getTabStore();
  },
  methods: {
    getTabStore() {
      let self = this;
      self.tab1 = self.stateTab(0);
      self.tab2 = self.stateTab(1);
      self.tab3 = self.stateTab(2);
      self.tab4 = self.stateTab(3);
      self.tab5 = self.stateTab(4);
      // console.log(self.stateTab(0));
      self.isLoading = false;
      // console.log(self.tab1)
      // console.log(self.isLoading);
    },
    stateTab(id) {
      let self = this;
      return self.$store.state.tabState[id].tab;
    },
    getterStateTab() {
      let self = this;
      return self.$store.getters.tabState;
    },
    goTo(place) {
      let self = this;
      self.$router.push({ name: place }).catch(err => {
        err;
      });
    },
    close(active) {
      let self = this;
      console.log(active);
      // tabe = false
      // console.log(self.tabState);
      // console.log(self.tab1);
      // console.log("----------------");
      // console.log(self.tab1);
      self.getTabStore();
      self.closeTabAct(active);
      self.$router.push("/").catch(err => {
        err;
      });
    },
    closeTabAct(id) {
      let self = this;
      self.$store.dispatch("closeTabAct", id);
    }
  },
  watch: {
    tabState: {
      deep: true,
      handler() {
        let self = this;
        self.isLoading = true;
        console.log("ok");
        self.getTabStore();
        self.isLoading = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tab {
  display: grid;
  height: 40px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-bottom: 20px;
}
.tab-item {
  display: grid;
  grid-template-columns: 9fr 1fr;
  cursor: pointer;
  .items {
    border: 1px solid black;
    align-self: center;
    padding: 10px;
  }
  .center {
    place-self: center;
  }
}
</style>
