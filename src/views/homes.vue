<template>
  <div class="main">
    <!-- <sidebar-menu :menu="menu" /> -->
    <!-- <router-link to="/formPH">
      Form Masuk
    </router-link> -->
    <div>
      <table>
        <thead>
          <td>
            ID
          </td>
          <td>
            Kode
          </td>
          <td>
            ID person
          </td>
          <td>
            ID hobi
          </td>
        </thead>
        <tr v-for="data in dataAll" :key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.notrans }}</td>
          <td>{{ data.personid }}</td>
          <td>{{ data.hobbyid }}</td>
        </tr>
      </table>
    </div>

    <!-- <data-table :columns="headers" url="http://127.0.0.1:8000/api/datahobby">
    </data-table> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dataAll: [],
      page: 0,
      totalPassengers: 0,
      numberOfPages: 0,
      loading: true,
      options: {},
      menu: [
        {
          header: true,
          title: "this is main",
          hiddenOnCollapse: true
        }
      ]
    };
  },
  mounted() {
    let self = this;
    self.init();
    self.openTab(self.$route.params.tab);
  },
  methods: {
    init() {
      let self = this;
      axios.get("http://127.0.0.1:8000/api/datahobby").then(resp => {
        console.log(resp.data);
        self.dataAll = resp.data;
      });
    },
    openTab(id) {
      let self = this;
      self.$store.dispatch("openTabAct", id);
    }
  },
  watch: {
    options: {
      handler() {
        let self = this;
        self.init();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  margin-left: 250px;
}
</style>
