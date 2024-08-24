document.addEventListener('DOMContentLoaded', () => {
    const sections = ['home', 'projects', 'blogs'];
    
    sections.forEach(section => {
        const btn = document.getElementById(`${section}Btn`);
        btn.addEventListener('click', () => showSection(section));
    });

    function showSection(sectionId) {
        sections.forEach(s => {
            document.getElementById(s).classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }
    
});

const cursor = document.querySelector('.custom-cursor');

// Add event listener to the document to track mouse movement
document.addEventListener('mousemove', (e) => {
  // Update the cursor position
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
