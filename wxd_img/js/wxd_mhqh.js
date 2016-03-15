jQuery(document).ready(function(){
	jQuery('#select_btn li:first').css('border','none');
	if (jQuery('#zSlider').length) {
		zSlider();
		jQuery('#h_sns').find('img').hover(function(){
			jQuery(this).fadeTo(200,0.5);
		}, function(){
			jQuery(this).fadeTo(100,1);
		});
	}
	function zSlider(ID, delay){
		var ID=ID?ID:'#zSlider';
		var delay=delay?delay:5000;
		var currentEQ=0, picnum=jQuery('#picshow_img li').size(), autoScrollFUN;
		jQuery('#select_btn li').eq(currentEQ).addClass('current');
		jQuery('#picshow_img li').eq(currentEQ).show();
		jQuery('#picshow_tx li').eq(currentEQ).show();
		autoScrollFUN=setTimeout(autoScroll, delay);
		function autoScroll(){
			clearTimeout(autoScrollFUN);
			currentEQ++;
			if (currentEQ>picnum-1) currentEQ=0;
			jQuery('#select_btn li').removeClass('current');
			jQuery('#picshow_img li').hide();
			jQuery('#picshow_tx li').hide().eq(currentEQ).slideDown(400);
			jQuery('#select_btn li').eq(currentEQ).addClass('current');
			jQuery('#picshow_img li').eq(currentEQ).show();
			autoScrollFUN = setTimeout(autoScroll, delay);
		}
		jQuery('#picshow').hover(function(){
			clearTimeout(autoScrollFUN);
		}, function(){
			autoScrollFUN = setTimeout(autoScroll, delay);
		});
		jQuery('#select_btn li').hover(function(){
			var picEQ=jQuery('#select_btn li').index(jQuery(this));
			if (picEQ==currentEQ) return false;
			currentEQ = picEQ;
			jQuery('#select_btn li').removeClass('current');
			jQuery('#picshow_img li').hide();
			jQuery('#picshow_tx li').hide().eq(currentEQ).slideDown(100);
			jQuery('#select_btn li').eq(currentEQ).addClass('current');
			jQuery('#picshow_img li').eq(currentEQ).show();
			return false;
		});
	};
})





wq_tp(function(){
wq_tp('#smallImg img').mouseover(function(){
wq_tp('#bigImg img').attr('src',wq_tp(this).attr('rel'));
wq_tp('#bigImg p > a').text(wq_tp(this).attr('alt'));
wq_tp('#bigImg a').attr('href',wq_tp(this).parent().attr('href'));	
})
wq_tp('#smallImg .img').hover(function(){
wq_tp('.mask').fadeIn();
wq_tp(this).children('.mask').hide();
},
function(){
wq_tp('.mask').fadeIn();
})
})