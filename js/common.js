(function(window, $, undefined){
  var reg1 =  /^\d+$/;
  $('.row').each(function(index) {
    var _this = $(this);
    if(reg1.test(index/2)){
      var newNode = _this.find('div.col-md-5');
      _this.prepend('<div class="col-md-5"><img class="featurette-image img-responsive"  src="'+newNode.find('img').attr('src')+'" alt="Generic placeholder image"></div>');
      _this.find('div.col-md-5').remove();
    }
  });
})(window, jQuery);