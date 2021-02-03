<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    First name: <input v-model="firstName" placeholder="first name">
    Last name: <input v-model="lastName" placeholder="last name">
    <button v-on:click="saveInHtml()">Save</button>
  </div>
</template>

<script>
// @ is an alias to /src
let saveInJs = function () {
  this.$http.get('http://localhost:8080/test')
  alert('Info is saved');
}

export default {
  name: 'Register',
  components: {},
  data: function () {
    return {
      firstName: '',
      lastName: ''
    }
  },
  methods:
      {
        saveInHtml: saveInJs
      }
}
</script>
