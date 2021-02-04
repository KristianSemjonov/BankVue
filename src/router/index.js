import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Balance from '../views/Balance.vue'
import Account from '../views/Account.vue'
import Customer from '../views/Customer.vue'
import Deposit from '../views/Deposit.vue'
import Withdrawal from '../views/Withdrawal.vue'
import Transfer from '../views/Transfer.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/About.vue')
        }
    },
    {
        path: '/balance',
        name: 'Balance',
        component: Balance
    },
    {
        path: '/account',
        name: 'Account',
        component: Account
    },
    {
      path: '/customer',
      name: 'Customer',
      component: Customer
    },
  {
    path: '/deposit',
    name: 'Deposit',
    component: Deposit
  },
  {
    path: '/withdrawal',
    name: 'Withdrawal',
    component: Withdrawal
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: Transfer
  }
]

const router = new VueRouter({
    routes
})

export default router
