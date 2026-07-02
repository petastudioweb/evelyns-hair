// ======================================
// EVELYN'S HAIR
// Designed by Peta Studio
// ======================================

// Update the year automatically
const copyright = document.querySelector(".copyright");

if (copyright) {
    const year = new Date().getFullYear();
    copyright.innerHTML =
        `© ${year} Evelyn's Hair. All Rights Reserved.<br>Website Designed by <strong>Peta Studio</strong>`;
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Fade in sections while scrolling
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="all .8s ease";

    observer.observe(section);

});
