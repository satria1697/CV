<template>
  <div>
    <router-link to="/formPH">
      Form Masuk
    </router-link>
    <!-- <table>
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
    </table> -->
    <v-data-table
      :page="page"
      :pageCount="numberOfPages"
      :headers="headers"
      :items="passengers"
      :options.sync="options"
      :server-items-length="totalPassengers"
      :loading="loading"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dataAll: [],
      headers: [
        { label: "id", field: "dataAll.id" },
        { label: "kode", field: "dataAll.notrans" },
        { label: "ID person", field: "dataAll.personid" },
        { label: "ID hobi", field: "dataAll.hobiid" }
      ],
      page: 0,
      totalPassengers: 0,
      numberOfPages: 0,
      loading: true,
      options: {}
    };
  },
  mounted() {
    let self = this;
    self.init();
  },
  methods: {
    init() {
      let self = this;
      axios.get("http://127.0.0.1:8000/api/datahobby").then(resp => {
        console.log(resp.data);
        self.dataAll = resp.data;
      });
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
<style lang="scss" scoped></style>
