/** 
 * Mobile or pc check
*/

const isMobile = {
    Android:function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (
        isMobile.Android() || 
        isMobile.BlackBerry() || 
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows());
    }
  };
  
  if (isMobile.any()) {
    document.body.classList.add('_touch');
  } else{ 
    document.body.classList.add('_pc');
  }
  
/** 
 * Burger-click
*/

   document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open");
    })

/** 
 * Scroll to section
*/

const menuLinks = document.querySelectorAll('.nav__menu-link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

/** 
 * Burger-click-hide
*/

document.getElementById("menu-link").addEventListener("click", function(){
    document.querySelector("header").classList.toggle("open"); });

    document.getElementById("menu-link2").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open"); });

        document.getElementById("menu-link3").addEventListener("click", function(){
            document.querySelector("header").classList.toggle("open"); });

            document.getElementById("menu-link4").addEventListener("click", function(){
                document.querySelector("header").classList.toggle("open"); });
