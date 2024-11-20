// script.js
import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = ['title', 'content', 'item'];

    toggle(event) {
        const title = event.currentTarget;
        const content = title.nextElementSibling;

        // Check if the item is already open or not
        const isOpen = title.getAttribute('aria-expanded') === 'true';

        // Close all items
        this.closeAllItems();

        // If it's not open, open it
        if (!isOpen) {
            title.setAttribute('aria-expanded', 'true');
            content.classList.add('open');
        }
    }

    closeAllItems() {
        this.itemTargets.forEach(item => {
            const title = item.querySelector('.accordion__title');
            const content = item.querySelector('.accordion__content');
            title.setAttribute('aria-expanded', 'false');
            content.classList.remove('open');
        });
    }
}
