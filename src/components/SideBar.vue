<template>
  <div class="sidenav">
    <div class="sidenav-list">
      <router-link to="/">Home</router-link>
    </div>
    <div class="sidenav-list">
      <router-link :to="{ name: 'person', params: { tab: 0 } }"
        >-> Data Person</router-link
      >
    </div>
    <div class="sidenav-list">
      <router-link :to="{ name: 'Form', params: { tab: 1 } }"
        >-> Isi Form Person</router-link
      >
    </div>
    <div class="sidenav-list">
      <router-link :to="{ name: 'Homes', params: { tab: 2 } }"
        >-> Data Hobi</router-link
      >
    </div>
    <div class="sidenav-list">
      <router-link :to="{ name: 'FormPH', params: { tab: 3 } }"
        >-> Isi Form Hobi</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style lang="scss" scoped>
.sidenav {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
  margin-top: 55px;
  &-list {
    margin: 10px;
  }
}
a {
  text-decoration: none;
  color: white;
}
</style>
