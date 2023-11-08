module.exports={
  routes:[
    {
      method:'GET',
      path:'/tipo-proceso/:slug',
      handler: 'tipo-proceso.findOne',
      config:{
        auth:false,
      }
    }
  ]
}
