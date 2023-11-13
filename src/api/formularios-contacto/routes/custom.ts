module.exports={
  routes:[
    {
      method:'GET',
      path:'/formularios-contactos/:slug',
      handler: 'formularios-contacto.findOne',
      config:{
        auth:false,
      }
    }
  ]
}
