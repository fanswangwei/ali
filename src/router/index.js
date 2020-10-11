import Vue from "vue";
import VueRouter from "vue-router";
import Nav from "@/components/nav";
import lostPage from "@/views/404";
import CTC from "./modules/ctc";
Vue.use(VueRouter)

const routers = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: "ctc",
      path: "/ctc",
      meta: { title: "CTC" },
      redirect: '/vue',
      component: Nav,
      children: [...CTC]
    },
    {
      name: "ctc",
      path: '/',
      redirect: '/news' // 重定向
    },
    {
      name: "default_404",
      path: '/404',
      component: lostPage
    // },
    // {
    //   path: "*",
    //   redirect: "/404"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})

export default routers;