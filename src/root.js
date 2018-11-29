
new Jet({
  beforemount:function(){
    Jet.import('@bg',function(mod){
      //do something
    })
  },
  static:{
    boxHeight:function(){
      if(Jet.$.width()<600){
        return 435
      }
      return 555
    }
  },
  data:{
    pTop:function(){
      return (Jet.$.height()-this.$data.boxHeight)/2
    }
  },
  func:{
    
  }
})
      