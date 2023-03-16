import "./gotop.css";

const GetTop = () => {
    var goToTop = function() {
		('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			('html, body').animate({
				scrollTop: ('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		(window).scroll(function(){

			var $win = (window);
			if ($win.scrollTop() > 200) {
				('.js-top').addClass('active');
			} else {
				('.js-top').removeClass('active');
			}
		});
	};

    return(
        <div className="gototop js-top">
		    <a href="#" className="js-gotop" onClick={goToTop}><i className="ri-arrow-up-s-line"></i></a>
	    </div>
    );
}

export default GetTop;
