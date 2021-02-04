<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Create a new customer</h1>
    Customer name: <input v-model="customer.name" placeholder="name">
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
//http://localhost:8081/bank2/newCustomer?name=Kristian
let saveInJs = function () {
  this.$http.get('http://localhost:8081/bank2/newCustomer',
      {
        params: {
          name: this.customer.name,
        }

      })
}
  // alert('Info is saved');


  export default {
    name: 'Customer',
    components: {},
    data: function () {
      return {
        customer: {},
        customers: []
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
