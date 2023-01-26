const burgerMenu = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')
const links = document.querySelectorAll('.menu__link')

const byflowersSlides = document.querySelectorAll(".byflowers-slide");
const byflowersNextSlide = document.querySelector(".byflowers-button-next");
const byFlowersPrevSlide = document.querySelector(".byflowers-button-prev");

const recsocnetSlides = document.querySelectorAll(".recsocnet-slide");
const recsocnetNextSlide = document.querySelector(".recsocnet-button-next");
const recsocnetPrevSlide = document.querySelector(".recsocnet-button-prev");

const notesSlides = document.querySelectorAll(".notes-slide");
const notesNextSlide = document.querySelector(".notes-button-next");
const notesPrevSlide = document.querySelector(".notes-button-prev");

const gmail = document.querySelector(".gmail");
const gmailCopiedContainer = document.querySelector('.gmail__copied-url-container')

let currentByflowersSlide = 0;
let maxByflowersSlide = byflowersSlides.length - 1;
let currentRecsocnetSlide = 0;
let maximumRecsocnetSlide = recsocnetSlides.length - 1;
let currentNotesSlide = 0;
let maximumNotesSlide = notesSlides.length - 1;

const showBurgerMenu = () => {
    burgerMenu.classList.toggle('active')
    headerMenu.classList.toggle('active')
    document.body.classList.toggle('lock')
}

const showNextSlide = (slides, currentSlide, maxSlide) => {
    if (currentSlide === maxSlide) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
    return currentSlide
}
const showPreviousSlide = (slides, currentSlide, maxSlide) => {
    if (currentSlide === 0) {
        currentSlide = maxSlide;
    } else {
        currentSlide--;
    }
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
    return currentSlide
}

const copyGmail = () => {
    navigator.clipboard.writeText('stmail468@gmail.com')
    gmailCopiedContainer.style.opacity = '0.9'
    setTimeout(() => {
        gmailCopiedContainer.style.opacity = '0'
    }, 2000)
}

burgerMenu.addEventListener('click', showBurgerMenu)

links.forEach((link) => {
    link.addEventListener('click', showBurgerMenu)
})

byflowersNextSlide.addEventListener("click", () => {
    currentByflowersSlide = showNextSlide(byflowersSlides, currentByflowersSlide, maxByflowersSlide)
});

byFlowersPrevSlide.addEventListener("click", () => {
    currentByflowersSlide = showPreviousSlide(byflowersSlides, currentByflowersSlide, maxByflowersSlide)
});

recsocnetNextSlide.addEventListener("click", () => {
    currentRecsocnetSlide = showNextSlide(recsocnetSlides, currentRecsocnetSlide, maximumRecsocnetSlide)
});

recsocnetPrevSlide.addEventListener("click", () => {
    currentRecsocnetSlide = showPreviousSlide(recsocnetSlides, currentRecsocnetSlide, maximumRecsocnetSlide)
});

notesNextSlide.addEventListener("click", () => {
    currentNotesSlide = showNextSlide(notesSlides, currentNotesSlide, maximumNotesSlide)
});

notesPrevSlide.addEventListener("click", () => {
    currentNotesSlide = showPreviousSlide(notesSlides, currentNotesSlide, maximumNotesSlide)
});

gmail.addEventListener('click', copyGmail)

const scrollTrigger = (selector, options = {}) => {
    let elements = document.querySelectorAll(selector)
    elements = Array.from(elements)
    elements.forEach(element => {
        addObserver(element, options)
    })
}

const addObserver = (element, options) => {
    if (!('IntersectionObserver' in window)) {
        entry.target.classList.add('animation-active')
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animation-active')
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(element)
}

scrollTrigger('.scroll-reveal', {
    rootMargin: '-20%',
})



