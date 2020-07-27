const ratio = .1;
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
              observer.unobserbe(entry.target)
          }
      })
      console.log('handleIntersect')
  }
const observer = new IntersectionObserver(handleIntersect, options)
observer.observe(document.querySelector('.reveal'))