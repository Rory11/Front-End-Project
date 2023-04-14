/*----- Mobile Navigation -----*/

const toggle = document.getElementById("toggle");
const nav = document.getElementById('mobile-nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
})

/*----- Navbar Section -----*/

const deskNav = document.querySelector('.desktop-nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > deskNav.offsetHeight + 400){
        deskNav.classList.add('nav-active')
    }else{
        deskNav.classList.remove('nav-active')
    }
}


/*----- Smooth Scroll From Nav-----*/

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    })
})

/*-----Card Animations -----*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenBackground = document.querySelectorAll('.hide-background');
hiddenBackground.forEach((el) => observer.observe(el));
