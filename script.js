// Smooth Scroll
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Open and close modal
function openModal(projectTitle) {
    const modal = document.getElementById('projectModal');
    document.getElementById('modalTitle').textContent = projectTitle;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

document.addEventListener('click', function(event) {
    if (event.target.closest('.modal')) closeModal();
});
