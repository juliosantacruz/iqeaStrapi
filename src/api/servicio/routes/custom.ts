module.exports={
  routes:[
    {
      method:'GET',
      path:'/servicios/:slug',
      handler: 'servicio.findOne',
      config:{
        auth:false,
      }
    }
  ]
}
