(function(jqhd){ 
	jqhd.fn.simpleSpy = function (limit, interval){
		limit = limit || 4;
		interval = interval || 4000;

		return this.each(function(){
			// 1. 设置
			// 捕获所有的列表项的缓存
			// 列表限制li元素
			var jqhdlist = jqhd(this),
			items = [], // 未初始化
			currentItem = limit,
			total = 0, // 初始化以后
			height = jqhdlist.find('> li:first').height();

			// 捕获缓存
			jqhdlist.find('> li').each(function(){
				items.push('<li>' + jqhd(this).html() + '</li>');
			});

			total = items.length;

			jqhdlist.wrap('<div class="wk_spyWrapper" />').parent().css({height : height * limit});

			jqhdlist.find('> li').filter(':gt(' + (limit - 1) + ')').remove();

			// 2. 效果        
			function spy(){
				// 插入一个新的项目，透明度和高度为零
				var jqhdinsert = jqhd(items[currentItem]).css({height : 0,opacity : 0,display : 'none'}).prependTo(jqhdlist);

				// 褪色的最后一个事件
				jqhdlist.find('> li:last').animate({ opacity : 0}, 1000, function(){
					// 增加新的第一个项目的高度
					jqhdinsert.animate({ height : height }, 1000).animate({ opacity : 1 }, 1000);
					jqhd(this).remove();
				});

				currentItem++;
				if(currentItem >= total){
					currentItem = 0;
				}
				setTimeout(spy, interval)
			}

			spy();
		});
	};   
})(jQuery);

jqhd(document).ready(function(){
	jqhd('ul.spy').simpleSpy();
});

