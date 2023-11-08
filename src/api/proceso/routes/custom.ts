module.exports={
  routes:[
    {
      method:'GET',
      path:'/proceso/:slug',
      handler: 'proceso.findOne',
      config:{
        auth:false,
      }
    }
  ]
}
