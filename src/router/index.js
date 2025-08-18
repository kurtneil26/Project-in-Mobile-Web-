// filepath: c:\Users\User\OneDrive\Desktop\VUE.JS\src\router\index.js
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/admin/dashboard.vue'
import Pending from '../views/admin/pending.vue'
import Approved from '../views/admin/approved.vue'
import Rejected from '../views/admin/rejected.vue'
import Account from '../views/admin/account.vue'
import History from '../views/admin/history.vue'
import View from '../views/admin/view.vue'
import ApplicantBase from '../views/applicant/ApplicantBase.vue'
import ApplicantDashboard from '../views/applicant/Dashboard.vue'
import ApplicantApply from '../views/applicant/Apply.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/admin/pending', name: 'Pending', component: Pending },
  { path: '/admin/approved', name: 'Approved', component: Approved },
  { path: '/admin/rejected', name: 'Rejected', component: Rejected },
  { path: '/admin/account', name: 'Account', component: Account },
  { path: '/admin/history', name: 'History', component: History },
  { path: '/admin/view', name: 'View', component: View },
  {
    path: '/applicant',
    component: ApplicantBase,
    children: [
      { path: 'dashboard', component: ApplicantDashboard },
      { path: 'apply', component: ApplicantApply },
    ]
  },
  // Add other routes here
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router