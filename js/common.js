(function(window, $, undefined){
  var reg1 =  /^\d+$/;
  $('.row').each(function(index) {
    var _this = $(this);
    var html;
    if(reg1.test(index/2)){
      var newNode = _this.find('div.col-md-5');
      html='<div class="col-md-5"><img class="featurette-image img-responsive"  src="'+newNode.find('img').attr('src')+'" alt="Generic placeholder image"></div>';
      _this.prepend(html);
      _this.find('div.col-md-5').remove();
    }
  });
})(window, jQuery);