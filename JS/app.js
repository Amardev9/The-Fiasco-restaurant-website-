const body = document.querySelector('.body');
document.addEventListener('DOMContentLoaded',() => {
    
    body.classList.remove('body');
    const menuToggler = document.querySelector('.navbar-toggler');
    const navbarLink = document.querySelectorAll('.navbar-link');
    const logo = document.querySelector('.logo');
    const menuClose = document.querySelector('.navbar-close')
    const mobileNavigation = document.querySelector('.mobile-nav-overlay');
    const navigation = document.querySelector('.header');
    const links = document.querySelectorAll('.mobile-navbar-link');

    
    links.forEach(link => {
        link.addEventListener('click',() =>{
            mobileNavigation.classList.remove('active');
        })
    });
    
    

    menuToggler.addEventListener('click',() => {
        mobileNavigation.classList.add('active');
        
    })
    menuClose.addEventListener('click',() =>{
        mobileNavigation.classList.remove('active');
        
    })
    
        window.addEventListener('scroll',()=>{
        if(window.scrollY >= 200){
            navigation.classList.add('scroll');
            menuToggler.style.color ="#2a2a2a";
            logo.style.color = "#2a2a2a";
            navbarLink.forEach(element => {
                element.style.color ="#2a2a2a";
            });            
            

            
        }else{
            navigation.classList.remove('scroll')
            navbarLink.forEach(element => {
                element.style.color ="#dcdcdc";
            });
            logo.style.color = "#dcdcdc";
            menuToggler.style.color = "#dcdcdc";  
        } 
    })

    // slider
    const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});
    
})