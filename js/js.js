console.log("hello friend!");
console.log("this is a simple site; not too much to see here");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementsByClassName('buffalo')[0].addEventListener('click', function() {
    // change this to toggle a class on the body which has overflow:hidden
    document.getElementsByTagName('body')[0].removeAttribute("class")
    document.querySelector('.projects').scrollIntoView({
      behavior: 'smooth'
    })
  }, false)
})
