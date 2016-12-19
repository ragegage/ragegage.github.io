document.addEventListener("DOMContentLoaded", () => {
  document.getElementsByClassName('buffalo')[0].addEventListener('click', function() {
    console.log('herererere')
    const more = `<div class='more'>
                    I build fullstack and frontend web apps
                  </div>
                  <div class='more'>
                    and I like to have fun with it
                  </div>`
    document.getElementsByTagName('body')[0].innerHTML += more
    document.querySelector('.more').scrollIntoView({
      behavior: 'smooth'
    })
  }, false)
})
