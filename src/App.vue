<template>
  <div id="app">
    <NavBar></NavBar>
    <SideBar></SideBar>
    <Tab></Tab>
    <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/SideBar.vue";
import Tab from "@/components/Tab.vue";
export default {
  components: {
    NavBar,
    SideBar,
    Tab
  },
  data() {
    return {
      isEditing: true
    };
  },
  beforeMount() {
    window.addEventListener("beforeunload", this.preventNav);
    this.$once("hook:beforeDestroy", () => {
      window.removeEventListener("beforeunload", this.preventNav);
    });
  },
  beforeRouteLeave(to, from, next) {
    let self = this;
    if (self.isEditing) {
      if (window.confirm("Leave without saving?")) {
        next("/")
      }
    }
    next("/");
  },
  methods: {
    preventNav(event) {
      if (!this.isEditing) return;
      event.preventDefault();
      // Chrome requires returnValue to be set.
      event.returnValue = "";
    }
  }
};
</script>
<style lang="scss">
@import "style/main.scss";
#app {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
