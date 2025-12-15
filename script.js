document.addEventListener('DOMContentLoaded', () => {
    // Stagger animation for links
    const links = document.querySelectorAll('.link-card');
    
    links.forEach((link, index) => {
        link.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.1 + 0.3}s`;
    });

    // 3D Tilt Effect (Simple version)
    const cards = document.querySelectorAll('.link-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            // Note: The hover scale from CSS might conflict slightly, 
            // but this resets the tilt. CSS hover handles the scale usually.
            // Let's ensure smooth transition back
            setTimeout(() => {
                card.style.transform = ''; // Clear inline style to let CSS take over if needed
            }, 300);
        });
    });
});
