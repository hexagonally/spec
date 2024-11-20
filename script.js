// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select all accordion titles
    const accordionTitles = document.querySelectorAll('.accordion__title');

    // Iterate through each accordion title
    accordionTitles.forEach(title => {
        title.addEventListener('click', function () {
            const content = this.nextElementSibling; // Get the content section

            // Check if the current section is already open
            const isOpen = this.classList.contains('open');

            // Close all sections first
            document.querySelectorAll('.accordion__title').forEach(t => {
                t.classList.remove('open');
                t.setAttribute('aria-expanded', 'false');
                t.nextElementSibling.classList.remove('open');
            });

            // If the section was not open, open it
            if (!isOpen) {
                this.classList.add('open');
                this.setAttribute('aria-expanded', 'true');
                content.classList.add('open');
            }
        });
    });
});
