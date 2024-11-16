document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const name = item.getAttribute('data-name');
        const email = item.getAttribute('data-email');
        const phone = item.getAttribute('data-phone');

        document.getElementById('contactName').textContent = `Name: ${name}`;
        document.getElementById('contactEmail').textContent = `Email: ${email}`;
        document.getElementById('contactPhone').textContent = `Phone: ${phone}`;
    });

    item.addEventListener('mouseleave', () => {
        document.getElementById('contactName').textContent = 'Hover over a name to see details';
        document.getElementById('contactEmail').textContent = '';
        document.getElementById('contactPhone').textContent = '';
    });
});