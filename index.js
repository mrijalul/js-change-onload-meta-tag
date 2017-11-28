$('#next #prev').click(function()
{
	var getImg = $('.swiper-slide.swiper-slide-active > .swiper-zoom-container > .swiper-lazy.swiper-lazy-loaded').attr('src');
	$('meta[itemprop=image]').attr('content', getImg);
	$('meta[property="og:image"]').attr('content', getImg);
	$('meta[property="twitter:image"]').attr('content', getImg);
});