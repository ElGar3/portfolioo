let sections= document.querySelectorAll('section');
let navlinks= document.querySelectorAll('header navbar a');

window.onscroll=() =>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset= sec.offsetTop;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
            });
                document.querySelector('header .navbar a [href*="' + id + '"]').classList.add
                ('active');
            
        }
    });
};

// Pause other videos when one is playing
document.addEventListener('play', function(e){
    let videos = document.querySelectorAll('video');
    videos.forEach(video => {
        if (video !== e.target) {
            video.pause();
        }
    });
}, true);


