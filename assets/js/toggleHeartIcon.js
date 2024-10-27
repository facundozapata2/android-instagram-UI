function toggleLike() {
    const heartIcons = document.querySelectorAll('.like-icon_post');

    heartIcons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            this.classList.toggle('liked');
            
            if (this.classList.contains('liked')) {
                this.classList.replace('fa-regular', 'fa-solid');
                this.style.color = '#f00';
            } else {
                this.classList.replace('fa-solid', 'fa-regular');
                this.style.color = '';
            }
        });
    });
}

toggleLike();

// function toggleLike(){
//     const heartIcons = document.querySelectorAll('.like-icon_post')

//     heartIcons.forEach(function(icon))  {
//         icon.addEventListener('click', function(){
//             if (this.classList.toggle('liked'));
//                 this.classList.replace('fa-regular', 'fa-solid');
//                 this.style.color = '#f00';

//         }   else{
//                 this.classList.replace('fa-solid', 'fa-regular');
//                 this.style.color = '';
//         }

//     }    
// }

// toggleLike();


