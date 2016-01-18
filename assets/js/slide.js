
var slider = {
	imgCount: 0,
	currentSlite: 1,
	sliderWidth: 0,
	containerWidth: 0,
	speed: 500,

	init: function(){
		var self = this;
		$('.swicher').on('click', 'div',function(){
			var index = $(this).index();
			self.goToSlie(index + 1);
		});

		var slider = $('.slider');
		this.imgCount = slider.find('.slideItem').length;
		this.sliderWidth = $('.slider').width();
		this.containerWidth = this.sliderWidth - 2 * $('.arrowLeft').width();
		$('.slideMove').css('width', this.imgCount * this.containerWidth + 'px');
		$('.slideItem').width(this.containerWidth);

		var swichers = '';
		for( var i = 1; i <= this.imgCount; i++){
			swichers += '<div></div>'
			// $('.swicher').append('<div></div>');
		}
		$('.swicher').html(swichers);
		$('.swicher').find('div').eq(0).addClass('selected');

	},
	goToSlie: function(n){
		var self = this;
		if (n > this.imgCount){
			n = 1;
		}else if(n < 1){
			n = this.imgCount;
		}
		$('.slideMove').animate({left: -(n-1) * this.containerWidth}, this.speed, function(){
			self.currentSlite = n;

		});
		
		$('.swicher').find('div').removeClass('selected').eq(n-1).addClass('selected');
	},
	goToNext: function(){
		this.goToSlie(this.currentSlite + 1);
	},
	goToPrev: function(){
		this.goToSlie(this.currentSlite - 1);
	},
};
$(function(){
	slider.init();
	setInterval(function(){
		slider.goToNext();
	}, 2000);
});
