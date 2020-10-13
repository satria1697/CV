<template>
  <div id="main">
    <div class="grid">
      <div class="grid-item_left record">
        <select v-model="perPage">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
        </select>
        <span>records per page</span>
      </div>
      <div class="route grid-item_right">
        <span>Search:</span>
        <input type="text" v-model="searchQuery" />
      </div>
    </div>
    <table class="tableMain">
      <thead>
        <tr>
          <th>ID</th>
          <th>NIK</th>
          <th>Nama</th>
          <th>Tempat Lahir</th>
          <th>Tanggal Lahir</th>
          <th>Gender</th>
          <th>Alamat</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="psn in data" :key="psn.id">
          <td>{{ psn.id }}</td>
          <td>{{ psn.nik }}</td>
          <td>{{ psn.nama }}</td>
          <td>{{ psn.tmptl }}</td>
          <td>{{ psn.tgll }}</td>
          <td>{{ psn.gender }}</td>
          <td>{{ psn.alamat }}</td>
          <td class="buttonClass">
            <button v-on:click="deletePerson(psn.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="grid">
      <div>
        <span
          >Showing {{ response.from }} to {{ response.to }} of
          {{ response.total }} entries</span
        >
      </div>
      <div class="route grid-item_right">
        <span v-on:click="prevPage()">pref</span>
        <button v-if="last === true" v-on:click="page = 1">1</button>
        <button v-if="last === false" v-on:click="page = currentState">
          {{ currentState }}
        </button>
        <span v-if="last === true">...</span>
        <button v-on:click="page = nextState">{{ nextState }}</button>
        <button v-on:click="page = doubleState">{{ doubleState }}</button>
        <span v-if="last === false">...</span>
        <button v-on:click="page = lastState">{{ lastState }}</button>
        <span v-on:click="nextPage()">next</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DataTable",
  data() {
    return {
      data: [],
      response: [],
      page: 1,
      searchQuery: "",
      perPage: 5,
      currentState: 0,
      nextState: 0,
      doubleState: 0,
      lastState: 0,
      last: false,
      link: "http://127.0.0.1:8000/api/person"
    };
  },
  mounted() {
    let self = this;
    self.updateData();
  },
  methods: {
    deletePerson(ids) {
      let self = this;
      let link = "http://127.0.0.1:8000/api/person/{id}";
      let linknew = link.replace("{id}", ids);
      axios.delete(linknew).then(response => {
        console.log(response);
        self.updateData();
        self.updateState();
      });
    },
    updateData() {
      let self = this;
      axios
        .get(self.link, {
          params: {
            page: self.page,
            find: self.searchQuery,
            perPage: self.perPage
          }
        })
        .then(response => {
          // console.log(response.data);
          self.person = response.data.data;
          self.response = response.data;
          self.updateState();
        })
        .catch(err => {
          console.log(err);
        });
    },
    nextPage() {
      let self = this;
      let page = self.page;
      if (page + 1 <= self.response.last_page) {
        self.page += 1;
      }
    },
    prevPage() {
      let self = this;
      let page = self.page;
      if (page - 1 >= 1) {
        self.page -= 1;
      }
    },
    updateState() {
      let self = this;
      self.currentState = self.response.current_page;
      self.lastState = self.response.last_page;
      let nextState = self.currentState + 1;
      if (nextState <= self.lastState - 2) {
        if (nextState + 1 >= self.lastState) {
          self.nextState = self.lastState - 2;
        } else {
          self.nextState = nextState;
        }
      } else {
        self.nextState = self.lastState - 2;
      }
      let doubleState = self.currentState + 2;
      if (doubleState <= self.lastState - 1) {
        if (doubleState >= self.lastState) {
          self.doubleState = self.lastState - 1;
        } else {
          self.doubleState = doubleState;
        }
      } else {
        self.doubleState = self.lastState - 1;
      }
      if (self.currentState + 2 >= self.lastState) {
        self.last = true;
      } else {
        self.last = false;
      }
    }
  },
  watch: {
    page: function() {
      let self = this;
      self.updateData();
      // self.updateState();
    },
    searchQuery: function() {
      let self = this;
      self.updateData();
      self.updateState();
      self.page = 1;
    },
    perPage: function() {
      let self = this;
      self.updateData();
      self.updateState();
      self.page = 1;
    }
  }
};
</script>

<style lang="scss" scoped></style>
