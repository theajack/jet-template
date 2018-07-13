Jet.lang.use(['cn','en']);
new Jet({
  beforemount:function(){
    this.p_top=(document.documentElement.clientHeight-555)/2;
  },
  data:{
    p_top:95
  },
  func:{
    
  }
})
Jet.router.use({
  history:false,
  base:"/jet-demo",
  index:'/',
  trueBase:true,
  router:{
    '/':'/intro',
    '/intro':'/intro',
    '/about':'/about',
    '/donate':'/donate'
  }
});
      