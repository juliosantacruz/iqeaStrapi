module.exports={
  routes:[
    {
      method:'GET',
      path:'/categoria/:slug',
      handler: 'categoria-producto.findOne',
      config:{
        auth:false,
      }
    }
  ]
}
