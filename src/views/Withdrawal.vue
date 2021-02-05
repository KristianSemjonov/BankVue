<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    Account: <input v-model="account.number" placeholder="account number">
    Withdraw amount: <input v-model="account.amount" placeholder="number">
    <button v-on:click="saveInHtml()">Submit</button>
    <br>
    {{this.answer}}
  </div>
</template>

<script>
// let getData = function(){
//   this.$http.get('http://localhost:8081/bank2/accountBalance?accountNr=' + this.accountBalance)
//   .then(response => this.accountBalance = response.data)
//   .catch(response => console.log(response))
// }
// @ is an alias to /src
//http://localhost:8081/bank2/withdrawMoney?accountNr=EE555&amount=12
let saveInJs = function () {
  this.$http.get('http://localhost:8081/bank2/withdrawMoney',
      {
        params: {
          accountNr: this.account.number,
          amount: this.account.amount
        }

      })
      // .then(response => this.answer = response.data);
  alert('Info is saved');
}

export default {
  name: 'Deposit',
  components: {},
  data: function () {
    return {
      accountBalance: {},
      account: [],
      answer: ''
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
