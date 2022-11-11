// Make the screen to fit into viewport wile URL tab is down or up 

// We listen to the resize event
// window.addEventListener('resize', () => {

//   // First we get the viewport height and we multiple it by 1% to get a value for a vh unit

//   let vh = window.innerHeight * 0.01;

//   // Then we set the value in the --vh custom property to the root of the document
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });



$(document).ready(function(){
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
});