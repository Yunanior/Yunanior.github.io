// script.js
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.timeline-container');
    const cards = document.querySelectorAll('.era-card');
    let activeCard = null;

    // Horizontal Scroll Logic
    let scrollVelocity = 0;
    let animationFrame = null;

    const handleWheel = (e) => {
        scrollVelocity += e.deltaY * 1.5;
        if (!animationFrame) {
            animationFrame = requestAnimationFrame(animateScroll);
        }
        e.preventDefault();
    };

    const animateScroll = () => {
        container.scrollLeft += scrollVelocity;
        scrollVelocity *= 0.35;
        if (Math.abs(scrollVelocity) > 0.5) {
            animationFrame = requestAnimationFrame(animateScroll);
        } else {
            animationFrame = null;
            scrollVelocity = 0;
        }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    // Card Click Interaction
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            const isSameCard = card === activeCard;

            if (isSameCard) {
                card.classList.remove('active');
                activeCard = null;
            } else {
                if (activeCard) activeCard.classList.remove('active');
                card.classList.add('active');
                activeCard = card;
                centerCard(card);
            }
        });
    });

    // Centering Function
    const centerCard = (card) => {
        const containerWidth = container.offsetWidth;
        const cardWidth = card.offsetWidth;
        const targetPos = card.offsetLeft - (containerWidth - cardWidth) / 2;
        container.scrollTo({
            left: targetPos,
            behavior: 'smooth'
        });
    };

    // Window Resize Handler
    window.addEventListener('resize', () => {
        if (activeCard) centerCard(activeCard);
    });
});