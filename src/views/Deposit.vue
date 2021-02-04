<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    Deposit amount: <input v-model="accountBalance" placeholder="number">
    <button v-on:click="getData()">Submit</button>
    <br>
    Balance is updated by:
  </div>
</template>

<script>
let getData = function(){
  this.$http.get('http://localhost:8081/bank2/accountBalance?accountNr=' + this.accountBalance)
  .then(response => this.accountBalance = response.data)
  .catch(response => console.log(response))
}
// @ is an alias to /src
let saveInJs = function () {
  this.$http.get('http://localhost:8081/bank2/accountBalance?accountNr=', this.accountBalance);
  alert('Info is saved');
}

export default {
  name: 'Deposit',
  components: {},
  data: function () {
    return {
      accountBalance: '',
      account: []
    }
  },
  methods:
      {
        saveInHtml: saveInJs,
        getData: getData
      },
  mounted (){

  }
}
</script>
