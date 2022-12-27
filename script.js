// $(document).ready(function () 
// {
//     $(".navbar .nav-link").on('click', function (event) 
//     {

//         if (this.hash !== "") 
//         {

//             event.preventDefault();

//             const hash = this.hash;

//             $('html, body').animate({
//                 scrolldown : $(hash).offset().top
//             }, 800);
//                 // function () 
//                 // window.location.hash = hash;
//          }
//      });
// });

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    })
})