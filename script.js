// Function to show a specific section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';  // Hide all sections
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';  // Show the selected section
    }
}

// Set the default section to 'about' when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showSection('about');
});