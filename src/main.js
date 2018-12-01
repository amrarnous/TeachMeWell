import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import welcome from './components/welcome.vue'
import whyUs from './components/whyUs.vue'
import learningPath from './components/learning-path.vue'
import contactUs from './components/contact-us.vue'
import register from './components/register.vue'


Vue.use(VueRouter);

Vue.config.productionTip = false


const routes = [
  {path: '/', component: welcome},
  {path: '/why-us', component: whyUs},
  {path: '/learning-path', component: learningPath},
  {path: '/contact-us', component: contactUs},
  {path: '/register', component: register}
]

const router = new VueRouter({
  mode: 'history',
  routes
});


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
