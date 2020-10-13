<template>
  <div class="navbar">
    <div class="left">Logoooooooooooooooooooooooo</div>
    <div class="right">
      <div class="under">
        <div class="dropdown">
          <span>a</span>
          <div
            :class="{
              'dropdown-content': isActive,
              'dropdown-active': isActive
            }"
            @click="dropdown"
          >
            <span>z</span><br />
            <span>x</span><br />
            <span>c</span><br />
          </div>
        </div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    dropdown(){
      let self = this
      self.isActive = true
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 40px;
  border-bottom: 2px solid black;
  margin: 0 0 15px 0;
  .left {
    margin: auto 0;
    justify-self: start;
  }
  .right {
    margin: auto 0;
    justify-self: end;
  }
  .under {
    display: grid;
    grid-template-columns: 60px 60px 60px 60px;
  }
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}
.dropdown-active .dropdown-content {
  display: block;
}
</style>
