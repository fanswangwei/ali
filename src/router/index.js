import Vue from "vue";
import VueRouter from "vue-router";
import Nav from "@/components/nav";
import lostPage from "@/views/404";
import CTC from "./modules/ctc";
import loginPage from "@/views/login/login"
Vue.use(VueRouter)

const routers = new VueRouter({
    mode: 'history',
    routes: [{
            name: "",
            path: '/',
            redirect: "/login"
        },
        {
            name: "login",
            path: '/login',
            component: loginPage
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