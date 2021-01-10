import Vue from "vue";
import VueRouter from "vue-router";
import Nav from "@/components/nav";
import lostPage from "@/views/404";
import CTC from "./modules/ctc";
import loginPage from "@/views/login/login"
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
const routers = new VueRouter({
    mode: 'hash',
    routes: [{
            name: "home",
            path: '/',
            redirect: "/login"
        },
        {
            name: "ctc",
            path: "/news",
            meta: { title: "CTC" },
            component: Nav,
            children: [...CTC]
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