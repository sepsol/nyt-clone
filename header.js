const header = document.querySelector('header');
const h1 = document.querySelector('h1');

// auto-opening and closing of the header section
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 3 && document.activeElement !== searchBox) {
    header.classList.remove('header-opened');
  } else if (window.pageYOffset === 0) {
    header.classList.add('header-opened');
  }
});

// to remove the margin under the h1 on mobile to accomodate for keyboard
searchBox.addEventListener('focus', () =>
  header.classList.add('header-opened-onfocus-mobile')
);
searchBox.addEventListener('blur', () =>
  header.classList.remove('header-opened-onfocus-mobile')
);

/*

=== NOTE TO SELF ===

// how to detect scroll direction
var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      // downscroll code
			console.log('down')
   } else {
      // upscroll code
			console.log('up')
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

*/
