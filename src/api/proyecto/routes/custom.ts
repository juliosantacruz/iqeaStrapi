module.exports={
  routes:[
    {
      method:'GET',
      path:'/proyectos/:slug',
      handler: 'proyecto.findOne',
      config:{
        auth:false,
      }
    }
  ]
}
