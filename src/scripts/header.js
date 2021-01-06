
window.addEventListener('scroll', function () {
    set_background_scale()
});

function set_background_scale() {
    const page_bg = document.querySelector('.scrolling-bg');
    let y = window.pageYOffset;
    let initialScale = 1;
    let newScale = initialScale - (y / 10000);

    if (newScale < 0.9) {
        newScale = 0.9;
    }
    page_bg.style.transform = `scale(${newScale})`;
    
}

function scroll(scrollTo) {
    const element = document.querySelector(scrollTo);
    element.scrollIntoView({ behavior: "smooth" });
}

const nav_links = document.querySelectorAll('.nav-link');

for (let i = 0; i < nav_links.length; i++) {
    let nav_link = nav_links[i];

    nav_link.addEventListener('click', function () {
        scroll(nav_link.dataset.scrollto);
        let teaPic = document.getElementsByClassName("scrolling-bg")[0]


        if (i === 2 || i ===3 ){
            teaPic.classList.add('teaPic')
        } else {
            teaPic.classList.remove('teaPic')
        }

    })

}

// const coffee_button = document.getElementsByClassName('coffee-button')[0];
// console.log(coffee_button)

// if (coffee_button) {
//     coffee_button.addEventListener('click', function () {
    
//         document.getElementsByClassName('navbar')[0].style.display = 'block';
//         document.getElementsByClassName('coffee-div')[0].style.display = 'block'; 
//     })
// } 
