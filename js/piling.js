$(document).ready(function() {

    /*
    * Plugin intialization
    */
    $('#pagepiling').pagepiling({
      menu: '#menu',
      anchors: ['introduction', 'background',],
      navigation: {
        'position': 'right',
        'tooltips': ['Page 1', 'Page 2']
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
