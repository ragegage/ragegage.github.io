console.log("hello friend!");
console.log("this is just a fun little site; not too much to see here");

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.visited) // if user has visited the page before, remove the usual rigamarole
    document.getElementsByTagName('body')[0].removeAttribute("class")

  document.getElementsByClassName('buffalo')[0].addEventListener('click', function() {
    localStorage.visited = true // local "cookie"-type behavior

    document.getElementsByTagName('body')[0].removeAttribute("class")
    document.querySelector('.projects').scrollIntoView({
      behavior: 'smooth'
    })
  }, false)
})
