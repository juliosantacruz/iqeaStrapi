module.exports={
  routes:[
    {
      method:'GET',
      path:'/categoria-producto/:slug',
      handler: 'categoria-producto.findOne',
      config:{
        auth:false,
      }
    }
  ]
}
