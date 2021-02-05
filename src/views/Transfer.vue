<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Transfer money between accounts</h1>
    From: <input v-model="account.from" placeholder="account">
    To: <input v-model="account.to" placeholder="account">
    Amount: <input v-model="account.amount" placeholder="number">
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
//http://localhost:8081/bank2/transferMoney?fromAccount=EE123&toAccount=EE124&amount=12
    let saveInJs = function () {
      this.$http.get('http://localhost:8081/bank2/transferMoney',
          {
            params: {
              fromAccount: this.account.from,
              toAccount: this.account.to,
              amount: this.account.amount
            }

          })
      alert('Transaction is processed');
    }

export default {
  name: 'Transfer',
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
        // getData: getData
      },
  mounted() {

  }
}
</script>


<!--    <table border="1">-->
<!--      <tr>-->
<!--        <th>id</th>-->
<!--        <th>customer_id</th>-->
<!--        <th>account_nr</th>-->
<!--        <th>balance</th>-->
<!--      </tr>-->
<!--      <tr v-for="row in account">-->
<!--        <td>{{row.id}}</td>-->
<!--        <td>{{row.customer_id}}</td>-->
<!--        <td>{{row.account_nr}}</td>-->
<!--        <td>{{row.balance}}</td>-->
<!--      </tr>-->
<!--    </table>-->