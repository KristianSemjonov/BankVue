<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Check balance</h1>
    Account: <input v-model="accountNumber" placeholder="number">
    <button v-on:click="getData()">Submit</button>
    <br>
    Account balance is: {{accountBalance}}
  </div>
  </template>

<script>
let getData = function(){
  this.$http.get('http://localhost:8081/bank2/accountBalance?accountNr=' + this.accountNumber)
  .then(response => this.accountBalance = response.data) //kui kxik h2sti, saame vastuse

  .catch(response => console.log(response)) //errori korra teeb m2rget logis
}
// @ is an alias to /src
// let saveInJs = function () {
//   this.$http.get('http://localhost:8081/bank2/accountBalance?accountNr=', this.accountBalance);
//   alert('Info is saved');
// }

export default {
  name: 'Balance',
  components: {},
  data: function () {
    return {
      accountNumber: '',
      accountBalance: '',
      account: []
    }
  },
  methods:
      {
        // saveInHtml: saveInJs,
        getData: getData
      },
  mounted (){

  }
}
</script>
