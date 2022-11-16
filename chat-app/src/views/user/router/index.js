const userRouter = [
    {
      path: '/users',
      name: 'users',
      component: () => import(/* webpackChunkName: "profile" */ '../UserView.vue')
    },
   
  ]

  export default userRouter