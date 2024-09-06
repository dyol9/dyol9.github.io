window.addEventListener('load', function() {
    const backgroundImage = document.querySelector('.background');
    
    backgroundImage.style.transition = 'opacity 2s ease-in-out';
    
    backgroundImage.style.opacity = 0;

    setTimeout(() => {
        backgroundImage.style.opacity = 1;
    }, 100);
});

window.addEventListener('load', function() {
    const backgroundImage = document.querySelector('.background');
    const headerTitle = document.querySelector('h1');
    const headerSubtitle = document.querySelector('h2');

    backgroundImage.style.transition = 'opacity 2s ease-in-out';
    backgroundImage.style.opacity = 0;

    setTimeout(() => {
        backgroundImage.style.opacity = 1;
    }, 100);

    headerTitle.style.transform = 'translateY(-100px)';
    headerSubtitle.style.transform = 'translateY(-100px)';
    headerTitle.style.opacity = 0;
    headerSubtitle.style.opacity = 0;

    setTimeout(() => {
        headerTitle.style.transition = 'transform 1.5s ease-in-out, opacity 1.5s ease-in-out';
        headerTitle.style.transform = 'translateY(0)';
        headerTitle.style.opacity = 1;
    }, 500); 

    setTimeout(() => {
        headerSubtitle.style.transition = 'transform 1.5s ease-in-out, opacity 1.5s ease-in-out';
        headerSubtitle.style.transform = 'translateY(0)';
        headerSubtitle.style.opacity = 1;
    }, 1000); 
});