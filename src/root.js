
new Jet({
  beforemount:function(){
    Jet.$import('@bg',function(mod){
      //do something
    })
  },
  static:{
    boxHeight:555
  },
  data:{
    pTop:function(){
      return (Jet.$.height()-this.$data.boxHeight)/2
    }
  },
  func:{
    
  }
})
      