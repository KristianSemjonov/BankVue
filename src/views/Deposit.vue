<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    Account: <input v-model="account.number" placeholder="account number">
    Deposit amount: <input v-model="account.amount" placeholder="number">
    <button v-on:click="saveInHtml()">Submit</button>
    <br>

  </div>
</template>

<script>
// let getData = function(){
//   this.$http.get('http://localhost:8081/bank2/accountBalance?accountNr=' + this.accountBalance)
//   .then(response => this.accountBalance = response.data)
//   .catch(response => console.log(response))
// }
// @ is an alias to /src
//http://localhost:8081/bank2/depositMoney?accountNr=EE123&amount=12
let saveInJs = function () {
  this.$http.get('http://localhost:8081/bank2/depositMoney',
      {
        params: {
          accountNr: this.account.number,
          amount: this.account.amount
        }

      })
  alert('Info is saved');
}

export default {
  name: 'Deposit',
  components: {},
  data: function () {
    return {
      accountBalance: {},
      account: [],

    }
  },
  methods:
      {
        saveInHtml: saveInJs,
      },
  mounted() {

  }
}
</script>
