import Vue from "vue";
import VueRouter from "vue-router";
import Nav from "@/components/nav";
import lostPage from "@/views/404";
import ALI from "./modules/ali";
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routers = new VueRouter({
    mode: 'hash',
    routes: [{
            name: "home",
            path: '/',
            redirect: "/tagSize"
        },
        {
            name: "ali",
            path: "/ali",
            meta: { title: "ALI" },
            component: Nav,
            children: [...ALI]
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