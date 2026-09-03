document.addEventListener('DOMContentLoaded', () => {
   
    const profileCard = document.querySelector('.profile-card');
    const badge = document.querySelector('.badge');
    const profileImg = document.querySelector('.profile-img');
    const socialButtons = document.querySelectorAll('.btn');


    profileImg.addEventListener('click', () => {
        profileImg.style.transition = 'transform 0.4s ease';
        profileImg.style.transform = 'scale(1.1) rotate(5deg)';

        setTimeout(() => {
            profileImg.style.transform = 'scale(1) rotate(0deg)';
        }, 400);
    });

  
    socialButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const platform = button.textContent;
            alert(`https://github.com/andy20-star`);
        });
    });

    badge.addEventListener('mouseenter', () => {
        badge.style.cursor = 'pointer';
        badge.innerText = "Let's Connect!";
    });

    badge.addEventListener('mouseleave', () => {
        badge.innerText = 'Ready to Code';
    });
});
