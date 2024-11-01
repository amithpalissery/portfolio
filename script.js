document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded');

    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const modalClose = document.querySelector('.modal-close');
    let currentImageIndex = 0;
    let currentImages = [];

    const projectDetails = {
        'eclipse': {
            title: 'Eclipse',
            description: 'Educational website about solar eclipses developed for NASA Space Apps Hackathon. This project aims to educate users about the science behind solar eclipses, their prediction, and safe viewing practices.',
            images: [
                'images/eclipse1.png',
                'images/eclipse2.png',
                'images/eclipse3.png'
            ]
        },
        'webx': {
            title: 'WebX Chatbot',
            description: 'Created a chatbot to provide quick access to online insights. This AI-powered chatbot helps users find information quickly and efficiently.',
            images: [
                'images/webx1.png',
                'images/webx2.png',
                'images/webx3.png'
            ]
        },
        'relief': {
            title: 'Relief Hub',
            description: 'A blockchain-based platform that gives donors control through transparent voting on fund usage, ensuring accountability. Created for Build On Chain, a Web3 Hackathon at NIT Calicut.',
            images: [
                'images/relief2.jpg',
                'images/relief1.jpg',
                'images/relief3.jpg',
                'images/relief4.jpg'
            ]
        },
        'event': {
            title: 'Event Management System',
            description: 'Comprehensive system for managing events and registrations. Features include event creation, registration management, and attendance tracking.',
            images: [
                'images/event1.png',
                'images/event2.png',
                'images/event3.png'
            ]
        }
    };

    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            console.log('Card clicked');
            if (!e.target.closest('.project-link')) {
                const projectId = this.getAttribute('data-project');
                console.log('Project ID:', projectId);
                openModal(projectId);
            }
        });
    });

    function openModal(projectId) {
        console.log('Opening modal for:', projectId);
        const project = projectDetails[projectId];
        if (!project) {
            console.log('No project details found for:', projectId);
            return;
        }

        currentImages = project.images;
        currentImageIndex = 0;

        modal.querySelector('.modal-image').src = currentImages[0];
        modal.querySelector('.modal-title').textContent = project.title;
        modal.querySelector('.modal-description').textContent = project.description;

        modal.style.display = 'block';
        console.log('Modal opened');
    }

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    const prevButton = modal.querySelector('.gallery-nav.prev');
    const nextButton = modal.querySelector('.gallery-nav.next');

    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
        modal.querySelector('.modal-image').src = currentImages[currentImageIndex];
    });

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
        modal.querySelector('.modal-image').src = currentImages[currentImageIndex];
    });
});