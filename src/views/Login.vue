<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Login</h1>
    Username: <input v-model="username" placeholder="">
    Password: <input v-model="password" placeholder="">
    <button v-on:click="saveInHtml()">Submit</button>
  </div>
</template>

<script>
// let getData = function(){
//   this.$http.get('http://localhost:8081/bank2/accountBalance?accountNr=' + this.accountBalance)
//   .then(response => this.accountBalance = response.data)
//   .catch(response => console.log(response))
// }
// @ is an alias to /src

//http://localhost:8081/bank2/createAccount?accountNr=EE123&customer_id=1
let saveInJs = function () {
  this.$http.get('http://localhost:8081/bank2/createAccount',
      {
        params: {
          accountNr: this.customer.account,
          customer_id: this.customer.id
        }

      })
}
//alert('Info is saved');


export default {
  name: 'Account',
  components: {},
  data: function () {
    return {
      customer: {},
      accounts: []
    }
  },
  methods:
      {
        saveInHtml: saveInJs,
        getData: getData
      },
  mounted() {

  }
}
</script>
