import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue"
import Projects from "../pages/Projects.vue"
import Contact from "../pages/Contact.vue"

const routes = [{
    path: "/",
    component: About,
    name: "About",

},{
    path: "/Projects",
    component: Projects,
    name: "Projects",
},{
    path: "/Contact",
    component: Contact,
    name: "Contact",
}]

const router = createRouter({
    history: createWebHistory(),
    linkActiveclass: "active",
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return { x:0, y: 0 }; 
    },
    routes,
});

export default router;