(function($) {

	$.fn.rsmm = function(options) {

		var settings = options;

		return this.each(function() {  

			var $this = $(this);  

			$this.find('li').has('ul').addClass('has-sub').children('a').append('<span></span>');
			createMobileMenu($this.removeClass());
			$this.addClass('rsmm');

			$('.rsmm li.has-sub').hover(function() {
				$this.find('li.has-sub > ul').css('display', 'block');
				$this.find('li.has-sub > a').addClass('hover');
			}, function() {
				$this.find('li.has-sub > ul').css('display', 'none');
				$this.find('li.has-sub > a').removeClass('hover');
			});

			if ( settings ) {

				if ( settings['theme'] ) {

					$this.addClass( 'rsmm--' + settings['theme'] );

				}

				if ( settings['position'] ) {

					if ( settings['position'] === 'fixed' ) {

						$this.addClass('fixed');

					} else if( settings['position'] === 'fixedOnScroll' ) {

						var curPos = $this.offset();

						$(window).scroll(function() {

							if( $(window).scrollTop() > curPos.top ) {
							
								$this.addClass('fixed');

							} else {

								$this.removeClass('fixed');

							} 

						});

					}

				}

				if ( settings['mobile'] ) {

					chooseMenu($this, settings['mobile']);

					$(window).resize(function() {

						chooseMenu($this, settings['mobile']);

					});

				}

			}

			function switchToMobile($this) {
				$this.hide();
				$('.rsmm-mobile-wrapper').show();
				$('#rsmm-open-button').show();
			}

			function switchToDesktop($this) {
				$this.show();
				$('.rsmm-mobile-wrapper').hide();
				$('#rsmm-open-button').hide();
			}

			function chooseMenu(menu, size) {
				if ( window.innerWidth <= size ) {

					switchToMobile(menu);

				} else {

					switchToDesktop(menu);

				}
			}

			$('#rsmm-open-button').click(function() {
				$('#rsmm-mobile-wrapper').addClass('show');
				$('.rsmm-mask').addClass('show');
			});

			$('#rsmm-close-button').click(function() {
				$('#rsmm-mobile-wrapper').removeClass('show');
				$('.rsmm-mask').removeClass('show');
			});

			$('.rsmm-mask').click(function() {
				$('#rsmm-mobile-wrapper').removeClass('show');
				$('.rsmm-mask').removeClass('show');
			});

			$('.rsmm-mobile li.has-sub > a').click(function() {
				$(this).parent('.has-sub').find('ul').slideToggle(140);
				$(this).parent('.has-sub').toggleClass('hover');
			});

			function createMobileMenu($this) {

				var clone = $this.clone();

				clone.children('ul').first().append('<button class="rsmm-mobile__close" id="rsmm-close-button"></button>')

				clone.addClass('rsmm-mobile').appendTo('body').wrap('<div class="rsmm-mobile-wrapper" id="rsmm-mobile-wrapper"></div>');
				$('body')
					.append('<button class="rsmm-open-button" id="rsmm-open-button"><i class="rsmm-open-button__icon fas fa-bars"></i></button>')
					.append('<div class="rsmm-mask"></div>');

			}

		});

	}

})(jQuery);