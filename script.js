// Navigation and back button functionality
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('nav a');
const backBtn = document.getElementById('backBtn');

function showSection(sectionId) {
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    
    if (sectionId !== 'home') {
        backBtn.style.display = 'block';
    } else {
        backBtn.style.display = 'none';
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        showSection(sectionId);
    });
});

backBtn.addEventListener('click', () => {
    showSection('home');
});

// Initialize with home section
showSection('home');
