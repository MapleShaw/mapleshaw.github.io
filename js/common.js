(function(window, $, undefined){
  var reg1 =  /^\d+$/;
  $('.row').each(function(index) {
    var _this = $(this);
    if(reg1.test(index/2)){
      var newNode = _this.find('div.col-md-5');console.log(newNode);
      _this.prepend(newNode);
      _this.find('div.col-md-5').remove();
    }
  });
})(window, jQuery);