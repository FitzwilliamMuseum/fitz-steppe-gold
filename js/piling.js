$(document).ready(function() {

    /*
    * Plugin intialization
    */
    $('#pagepiling').pagepiling({
      menu: '#menu',
      anchors: ['introduction', 'background',],
      navigation: {
        'position': 'right',
        'tooltips': ['Introduction', 'Background']
      },
      afterRender: function(){
        $('#pp-nav').addClass('custom');
      },
      afterLoad: function(anchorLink, index){
        if(index>1){
          $('#pp-nav').removeClass('custom');
        }else{
          $('#pp-nav').addClass('custom');
        }
      }
    });
  });
