module.exports={
  routes:[
    {
      method:'GET',
      path:'/servicio/:slug',
      handler: 'servicio.findOne',
      config:{
        auth:false,
      }
    }
  ]
}
