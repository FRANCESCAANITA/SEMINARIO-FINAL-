// Efecto de transición para el menú desplegable personalizado
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdown.addEventListener('mouseover', function() {
        dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
        dropdownContent.style.opacity = "1";
    });

    dropdown.addEventListener('mouseleave', function() {
        dropdownContent.style.maxHeight = "0";
        dropdownContent.style.opacity = "0";
    });
});
