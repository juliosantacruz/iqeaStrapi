module.exports={
  routes:[
    {
      method:'GET',
      path:'/industria/:slug',
      handler: 'industria.findOne',
      config:{
        auth:false,
      }
    }
  ]
}
