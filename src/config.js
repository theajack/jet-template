
Jet.use(
    'render-time',
    'router', 
    'res', 
    'module', 
    'tool',
    //'babel','less',
    //'css-config', 'valid','lang', jui
    function(){
        // Jet.lang.use(['cn','en']);
        Jet.res.define({
          js:{
            countTop:'count_p_top',
            bg:'bg'
          }
        })
        Jet.router.use({
          history:false,
          index:'/',
          trueBase:false,
          router:{
            '/':'/intro',
            '/intro':'/intro',
            '/about':'/about',
            '/donate':'/donate'
          }
        });
    }
)
