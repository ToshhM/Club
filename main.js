const ratio = .2;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }
  
  const handleIntersect = function(entries, observer){
      entries.forEach(function (entry){
          if(entry.intersectionRatio > ratio){
              console.log('visible');
              entry.target.classList.add('reveal-visible')
              observer.unobserve(entry.target)
          }
      })
      console.log('handleIntersect')
  }
const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function (r){
    observer.observe(r)
})
observer.observe(document.querySelector('.reveal'));


var preloader = document.getElementById("loading");
function myFunction(){
    Swal.fire({
        title: '<strong>Avez-vous 18 ans ? <u></u></strong>',
        icon: 'info',
        html:
          'En entrant, sur ce site vous admettez être un adulte ',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Oui !',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<a href="https://www.google.fr/"><i class="fa fa-thumbs-down"></i> Non</a>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
}
var elements = document.getElementsByClassName('parallax')
function mobile() {
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  elements.classList.remove("parallax");// true for mobile device
  document.write("mobile device");
}else{
  // false for not mobile device
  console.log(computer);
  document.write("not mobile device");
}
}
