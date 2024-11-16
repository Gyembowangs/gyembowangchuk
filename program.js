// Select all course-detail sections
const courseDetails = document.querySelectorAll('.course-detail');

// Add event listener to each course-detail section
courseDetails.forEach(detail => {
    const heading = detail.querySelector('h3'); // Get the heading within each course-detail section
    const moduleList = detail.querySelector('.module'); // Get the module list within each course-detail section

    // Toggle the visibility of modules on heading click
    heading.addEventListener('click', () => {
        moduleList.classList.toggle('visible'); // Toggle the 'visible' class
    });
});
