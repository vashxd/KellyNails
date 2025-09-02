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

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000);

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

    const contactForm = document.querySelector('.contact-form form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const servico = document.getElementById('servico').value;
        const mensagem = document.getElementById('mensagem').value;
        
        if (!nome || !telefone || !email || !servico) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        const whatsappMessage = `Olá! Gostaria de agendar um horário.\n\nNome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}\nServiço: ${servico}\nMensagem: ${mensagem}`;
        
        const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappUrl, '_blank');
        
        contactForm.reset();
        alert('Redirecionando para o WhatsApp...');
    });

    const whatsappLinks = document.querySelectorAll('a[href="#"]');
    whatsappLinks.forEach(link => {
        if (link.innerHTML.includes('fa-whatsapp')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.open('https://wa.me/5511999999999', '_blank');
            });
        }
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

    async function loadInstagramPosts() {
        try {
            const instagramImages = [
                'https://picsum.photos/400/400?random=1',
                'https://picsum.photos/400/400?random=2', 
                'https://picsum.photos/400/400?random=3',
                'https://picsum.photos/400/400?random=4',
                'https://picsum.photos/400/400?random=5',
                'https://picsum.photos/400/400?random=6'
            ];

            const carouselContainer = document.querySelector('.carousel-container');
            carouselContainer.innerHTML = '';

            instagramImages.forEach((imageUrl, index) => {
                const slide = document.createElement('div');
                slide.className = 'carousel-slide';
                
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = `Trabalho ${index + 1}`;
                img.loading = 'lazy';
                
                slide.appendChild(img);
                carouselContainer.appendChild(slide);
            });

            const newSlides = document.querySelectorAll('.carousel-slide');
            
            if (newSlides.length > 0) {
                currentSlide = 0;
                updateCarousel();
            }

        } catch (error) {
            console.log('Erro ao carregar imagens do Instagram:', error);
        }
    }

    loadInstagramPosts();
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