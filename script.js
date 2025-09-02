document.addEventListener('DOMContentLoaded', function() {
    
    const mobileMenu = document.querySelector('.mobile-menu');
    const navbar = document.querySelector('.navbar');
    
    mobileMenu.addEventListener('click', function() {
        navbar.classList.toggle('mobile-active');
    });

    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoplayInterval;
    let isModalOpen = false;

    function updateCarousel() {
        const translateX = -currentSlide * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    function startAutoplay() {
        if (!isModalOpen) {
            autoplayInterval = setInterval(nextSlide, 5000);
        }
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Start autoplay initially
    startAutoplay();

    const navLinks = document.querySelectorAll('.navbar a, .footer-section a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const whatsappForm = document.getElementById('whatsappForm');
    
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const servico = document.getElementById('servico').value;
        const mensagem = document.getElementById('mensagem').value;
        
        if (!nome || !servico) {
            alert('Por favor, preencha o nome e selecione um serviço.');
            return;
        }
        
        let whatsappMessage = `Olá! Meu nome é *${nome}* e gostaria de agendar um horário.\n\n`;
        whatsappMessage += `🎯 *Serviço desejado:* ${servico}\n\n`;
        
        if (mensagem.trim()) {
            whatsappMessage += `💬 *Mensagem:* ${mensagem}\n\n`;
        }
        
        whatsappMessage += `Aguardo o retorno para confirmar data e horário! 😊`;
        
        const whatsappUrl = `https://wa.me/5592985045009?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappUrl, '_blank');
        
        whatsappForm.reset();
    });

    

    const serviceCards = document.querySelectorAll('.service-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
    });

    // Modal functionality
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    const carouselImages = document.querySelectorAll('.carousel-slide img');

    // Add click event to all carousel images
    carouselImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            isModalOpen = true;
            stopAutoplay();
        });
    });

    // Close modal when clicking the X
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        isModalOpen = false;
        startAutoplay();
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            isModalOpen = false;
            startAutoplay();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            isModalOpen = false;
            startAutoplay();
        }
    });
});

const style = document.createElement('style');
style.textContent = `
    .navbar.mobile-active {
        display: flex !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--white);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        padding: 1rem;
    }
    
    .navbar.mobile-active ul {
        flex-direction: column;
        width: 100%;
        gap: 1rem;
    }
    
    @media (max-width: 768px) {
        .navbar.mobile-active {
            display: flex !important;
        }
    }
`;
document.head.appendChild(style);