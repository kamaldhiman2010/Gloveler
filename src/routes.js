import Vue from "vue";

import Router from "vue-router";
Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
    routes: [
     
     {
        path: "/",
        name:"landing-page",
        component: () => import("@/pages/hotel.vue"),
     },
     {
        path: "/prop_list",
        component: () => import("@/pages/hotel_listing.vue"),
        
     },
     {
        path: "/hotel_booking",
        component: () => import("@/pages/hotel_booking.vue"),
    
     },
     {
        path: "/payment_page",
        component: () => import("@/pages/payment.vue"),
    
     },
     {
        path: "/payment_update",
        component: () => import("@/pages/payment_update_page.vue"),
    
     },
     
    //  {
    //      path:"/payment_page",
    //      component:() => import("./components/PaymentPage.vue")
    //  }
    ]
  });

export default router