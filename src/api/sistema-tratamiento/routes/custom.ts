module.exports={
  routes:[
    {
      method:'GET',
      path:'/sistema-tratamiento/:slug',
      handler: 'sistema-tratamiento.findOne',
      config:{
        auth:false,
      }
    }
  ]
}
