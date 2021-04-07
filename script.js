

// Elements needed
const menuBurger = document.querySelector('.icon-hamburger')
const menuClose = document.querySelector('.icon-close')
const mobileMenu = document.querySelector('.mobile-nav-wrapper')

let goalWidth = document.querySelector('.progress__current')


// bookmarked button
const bookmarked = document.querySelector('.btn-bookmark-icon')
const bookmarkText = document.querySelector('.bookmark-text')

bookmarked.addEventListener('click', function(){
    bookmarked.classList.toggle('bookmarked-green')
    if (bookmarkText.textContent === 'Bookmark') {
        bookmarkText.textContent = 'Bookmarked'
    } else {
        bookmarkText.textContent = 'Bookmark'
    }
})




// Show and hide menu
menuBurger.addEventListener('click', function(){
    menuBurger.classList.toggle('hidden')
    menuClose.classList.toggle('hidden')
    mobileMenu.classList.toggle('hidden')
})


menuClose.addEventListener('click', function(){
    menuBurger.classList.toggle('hidden')
    menuClose.classList.toggle('hidden')
    mobileMenu.classList.toggle('hidden')
})



// Pledge progress 
let totalBacked = 40000
const totalGoal = 100000

const progressWidth =(totalBacked / totalGoal) * 100

if (totalBacked <= 3000) {
    goalWidth.style.width = '3%'
} else {
    goalWidth.style.width = `${progressWidth}%`

}


 


