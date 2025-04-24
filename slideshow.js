let current = 0;
let total = 4;

document.getElementById('next').addEventListener('click', function () {
    console.log('next');

    current++;
    if (current >= total) {
        current = 0;  // Reset to the first 
    }
    console.log("current: " + current);


    let slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');

    // current slide
    slides[current].style.display = 'block';
});

document.getElementById('previous').addEventListener('click', function () {
    console.log('previous');

    current--;
    if (current < 0) {
        current = total - 1;  // Set to the last slide 
    }
    console.log("current: " + current);

    let slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');

    //current slide
    slides[current].style.display = 'block';
});

setInterval(function () {
    let slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'none');

    current++;
    if (current >= total) {
        current = 0;
    }

    slides[current].style.display = 'block';
}, 5000);
