// ===================================
// Smooth Scroll Navigation
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('ProPhone X Landing Page Loaded');
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
            }
        });
    });
    
    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // ===================================
    // Navbar Scroll Effect
    // ===================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ===================================
    // Image Carousel
    // ===================================
    const carouselContainer = document.getElementById('carouselContainer');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentSlide = 0;
    let autoPlayInterval;
    
    function showSlide(index) {
        // Ensure index is within bounds
        if (index >= carouselSlides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = carouselSlides.length - 1;
        } else {
            currentSlide = index;
        }
        
        // Update slides
        carouselSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === currentSlide) {
                slide.classList.add('active');
            }
        });
        
        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.remove('active');
            if (i === currentSlide) {
                indicator.classList.add('active');
            }
        });
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Event listeners for carousel controls
    nextBtn.addEventListener('click', function() {
        nextSlide();
        resetAutoPlay();
    });
    
    prevBtn.addEventListener('click', function() {
        prevSlide();
        resetAutoPlay();
    });
    
    // Indicator click events
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showSlide(index);
            resetAutoPlay();
        });
    });
    
    // Auto-play functionality
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 4000);
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }
    
    // Start auto-play on load
    startAutoPlay();
    
    // Pause auto-play on hover
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
    
    // ===================================
    // Contact Form Validation
    // ===================================
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const formSuccess = document.getElementById('formSuccess');
    
    // Real-time validation
    nameInput.addEventListener('blur', function() {
        validateName();
    });
    
    emailInput.addEventListener('blur', function() {
        validateEmail();
    });
    
    phoneInput.addEventListener('blur', function() {
        validatePhone();
    });
    
    messageInput.addEventListener('blur', function() {
        validateMessage();
    });
    
    // Clear error on input
    nameInput.addEventListener('input', function() {
        clearError('name');
    });
    
    emailInput.addEventListener('input', function() {
        clearError('email');
    });
    
    phoneInput.addEventListener('input', function() {
        clearError('phone');
    });
    
    messageInput.addEventListener('input', function() {
        clearError('message');
    });
    
    function validateName() {
        const name = nameInput.value.trim();
        const nameError = document.getElementById('nameError');
        
        if (name === '') {
            showError('name', 'Name is required');
            return false;
        } else if (name.length < 2) {
            showError('name', 'Name must be at least 2 characters');
            return false;
        } else {
            clearError('name');
            return true;
        }
    }
    
    function validateEmail() {
        const email = emailInput.value.trim();
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === '') {
            showError('email', 'Email is required');
            return false;
        } else if (!emailRegex.test(email)) {
            showError('email', 'Please enter a valid email address');
            return false;
        } else {
            clearError('email');
            return true;
        }
    }
    
    function validatePhone() {
        const phone = phoneInput.value.trim();
        const phoneError = document.getElementById('phoneError');
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        
        // Phone is optional, so only validate if there's input
        if (phone !== '' && !phoneRegex.test(phone)) {
            showError('phone', 'Please enter a valid phone number');
            return false;
        } else {
            clearError('phone');
            return true;
        }
    }
    
    function validateMessage() {
        const message = messageInput.value.trim();
        const messageError = document.getElementById('messageError');
        
        if (message === '') {
            showError('message', 'Message is required');
            return false;
        } else if (message.length < 10) {
            showError('message', 'Message must be at least 10 characters');
            return false;
        } else {
            clearError('message');
            return true;
        }
    }
    
    function showError(fieldName, message) {
        const input = document.getElementById(fieldName);
        const errorElement = document.getElementById(fieldName + 'Error');
        
        input.classList.add('error');
        errorElement.textContent = message;
    }
    
    function clearError(fieldName) {
        const input = document.getElementById(fieldName);
        const errorElement = document.getElementById(fieldName + 'Error');
        
        input.classList.remove('error');
        errorElement.textContent = '';
    }
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
            // Show success message
            formSuccess.classList.add('show');
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                formSuccess.classList.remove('show');
            }, 5000);
            
            console.log('Form submitted successfully!');
            console.log({
                name: nameInput.value,
                email: emailInput.value,
                phone: phoneInput.value,
                message: messageInput.value
            });
        }
    });
    
    // ===================================
    // Intersection Observer for Scroll Animations
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with fade-in-scroll class
    const scrollElements = document.querySelectorAll('.fade-in-scroll');
    scrollElements.forEach(element => {
        observer.observe(element);
    });
    
    // ===================================
    // Dynamic Content Loading Effect
    // ===================================
    window.addEventListener('load', function() {
        // Add loaded class to body for any additional animations
        document.body.classList.add('loaded');
    });
    
    // ===================================
    // Button Hover Effects
    // ===================================
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});