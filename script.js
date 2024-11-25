// Define DOM Elements
const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const author_name = document.getElementById('name');
const date = document.getElementById('date');

// Elements with animated selectors
const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');


function getData() {

    /* Add data to UI */

        // Add header content
        header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">';

        // Add title text
        title.innerHTML = 'Lorem ipsum dolor sit amet.';

        // Add excerpt text
        excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aliquid.';

        // Add profile image
        profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';

        // Add author name
        author_name.innerHTML = 'John Doe';

        // Add date
        date.innerHTML = 'Oct 08, 2020';

    /* Hide animation */
    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
     
}    

// Run getData() in 2.5 seconds
setTimeout(getData, 2500);


 
