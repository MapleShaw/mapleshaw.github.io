(function(window, $, undefined){
  if(navigator.userAgent.match(/Android/i)) {
    $('#myCarousel').hide();
  }

  if ((navigator.userAgent.indexOf('iPhone') != -1) || (navigator.userAgent.indexOf('iPod') != -1) || (navigator.userAgent.indexOf('iPad') != -1)) {
    $('#myCarousel').hide();
  }



  var reg1 =  /^\d+$/;
  $('.row').each(function(index) {
    var _this = $(this);
    if(reg1.test(index/2)){
      var newNode = _this.find('div.col-md-5');
      _this.find('div.col-md-5').remove();
      _this.prepend(newNode);
      
    }
  });

  // $('.navbar-nav li').on('click', function() {
  //   var _this = $(this);
  //   _this.parent().find('li.active').removeClass('active');
  //   _this.addClass('active');
  // });

  /*为url自动添加icon*/
  // var iconArr = new Array();
  // iconArr['github'] = 'icon-github';
  // iconArr['douban'] = 'icon-douban'; 
  // iconArr['xinlangweibo'] = 'icon-xinlangweibo'; 
  // iconArr['css'] = 'icon-css'; 
  // iconArr['html'] = 'icon-html'; 

  $('.posts').each(function() {
    var _this = $(this);
    _this.find('a').on('hover', function() {
      $(this).addClass('pulse animated')
    });
  });

  

})(window, jQuery);