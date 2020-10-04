<template>
  <div id="main">
    <router-link
      class="buttonTop"
      :to="{
        name: 'Form',
        params: {
          edit: 'no'
        }
      }"
    >
      + Tambah
    </router-link>
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
        <tr v-for="psn in person" :key="psn.id">
          <td>{{ psn.id }}</td>
          <td>{{ psn.nik }}</td>
          <td>{{ psn.nama }}</td>
          <td>{{ psn.tmptl }}</td>
          <td>{{ psn.tgll }}</td>
          <td>{{ psn.gender }}</td>
          <td>{{ psn.alamat }}</td>
          <td class="buttonClass">
            <router-link
              :to="{ name: 'Form', params: { userId: psn.id, edit: 'yes' } }"
              >Edit</router-link
            >
            <button v-on:click="deletePerson(psn.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      person: []
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
      });
    },
    updateData() {
      axios.get("http://127.0.0.1:8000/api/person").then(response => {
        console.log(response.data);
        let self = this;
        self.person = response.data;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
td,
th {
  border: 1px black solid;
  padding: 1em;
}
table {
  border-collapse: collapse;
  .buttonClass {
    display: grid;
    a {
      display: inline-block;
      padding: 5px 20px;
      margin: 5px;
      border: 1px solid black;
      border-radius: 15px;
    }
  }
}

.buttonTop {
  display: inline-block;
  padding: 15px 30px;
  margin: 0px 0 10px 0;
  border: 1px solid black;
  border-radius: 15px;
}

a {
  text-decoration: none;
}
</style>
