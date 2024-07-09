document.addEventListener('DOMContentLoaded', function() {
    const currentHour = new Date().getHours();

    if (currentHour >= 18 || currentHour < 6) {
        document.getElementById('living').src = 'img/living-1.jpg';
        document.getElementById('sea').src = 'img/sea-1.jpg';
        document.getElementById('forest').src = 'img/forest-1.jpg';
        document.getElementById('green').src = 'img/green-1.jpg';
        document.getElementById('flower1').src = 'img/flower1-1.jpg';
        document.getElementById('flower2').src = 'img/flower2-1.jpg';
        document.getElementById('waterdrop').src = 'img/waterdrop-1.jpg';
    }
});
