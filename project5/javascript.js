document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('your-button-id').addEventListener('click', function() {
    fetch('path/to/your/data.json')
        .then(response => response.json())
        .then(data => {

        })
        .catch(error => {
        });
});

