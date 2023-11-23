module.exports={
  routes:[
    {
      method:'GET',
      path:'/proyecto/:slug',
      handler: 'proyecto.findOne',
      config:{
        auth:false,
      }
    }
  ]
}
