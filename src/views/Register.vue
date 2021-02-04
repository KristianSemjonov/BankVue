<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    Account: <input v-model="accountBalance" placeholder="number">
    <button v-on:click="getData()">Submit</button>
    <table border="1">
      <tr>
        <th>id</th>
        <th>customer_id</th>
        <th>account_nr</th>
        <th>balance</th>
      </tr>
      <tr v-for="row in account">
        <td>{{row.id}}</td>
        <td>{{row.customer_id}}</td>
        <td>{{row.account_nr}}</td>
        <td>{{row.balance}}</td>
      </tr>
    </table>
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
  name: 'Register',
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
