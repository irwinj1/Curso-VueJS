import { createRouter, createWebHashHistory } from "vue-router";

const stage = import.meta.env.VITE_STAGE
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path:'/home',
    //   redirect:'/'
    
    // },
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      alias:'/home',
      meta:{
        requireAuth:false
      }
    },
    {
      path: "/sesion",
      name: "sesion",
      component: () => import("../views/SessionView.vue"),
      children: [
        {
          path: "",
          components: {
            default: () => import('../views/LoginView.vue'),
            register: () => import('../views/RegisterView.vue')
          }
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/chats",
      name: "chats",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ChatsView.vue"),
      meta:{
        requireAuth:true,
        roles:['Admin']
      },
      children: [
        {
          path: ":chatId",
          name: "chat",
          component: () => import("../components/ChatView.vue"),
          props:(route)=>{
            return {
              chatId: route.params.chatId
            }
          }
        },
      ],
    },
  ],
});
if(stage === 'test'){
  router.addRoute({
    path:'/profile',
    component: ()=>import('../views/ProfileView.vue')
  })
}
router.beforeEach((to,from)=>{
  console.log(to,from);
  // if(to.meta?.requireAuth && to.meta.roles.includes('Admin')){
  //   console.log(to.path,'requireAuth');
  //   return '/sesion'
  // }
  if(to.path === '/') return '/about'
  return true
})

export default router;
