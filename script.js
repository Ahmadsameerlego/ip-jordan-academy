// Hero Slider Functionality
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.dot');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.init();
    }

    init() {
        this.startAutoSlide();
        this.addDotListeners();
        this.addScrollAnimation();
    }

    startAutoSlide() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Change slide every 5 seconds
    }

    nextSlide() {
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    }

    goToSlide(index) {
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');
        
        this.currentSlide = index;
        
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    }

    addDotListeners() {
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
                // Reset auto slide timer
                clearInterval(this.slideInterval);
                this.startAutoSlide();
            });
        });
    }

    addScrollAnimation() {
        // Pause auto slide when user hovers over slider
        const heroSection = document.querySelector('.hero');
        heroSection.addEventListener('mouseenter', () => {
            clearInterval(this.slideInterval);
        });

        heroSection.addEventListener('mouseleave', () => {
            this.startAutoSlide();
        });
    }
}

// Scroll Animation for Feature Cards
class ScrollAnimation {
    constructor() {
        this.featureCards = document.querySelectorAll('.feature-card');
        this.init();
    }

    init() {
        this.observeElements();
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        this.featureCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    }
}

// Dropdown Menu Enhancement
class DropdownEnhancement {
    constructor() {
        this.dropdowns = document.querySelectorAll('.dropdown');
        this.init();
    }

    init() {
        this.addKeyboardSupport();
        this.addClickOutsideSupport();
    }

    addKeyboardSupport() {
        this.dropdowns.forEach(dropdown => {
            const button = dropdown.querySelector('.btn-join');
            const menu = dropdown.querySelector('.dropdown-menu');
            
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    menu.style.opacity = menu.style.opacity === '1' ? '0' : '1';
                    menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
                    menu.style.transform = menu.style.transform === 'translateY(0px)' ? 'translateY(-10px)' : 'translateY(0px)';
                }
            });
        });
    }

    addClickOutsideSupport() {
        document.addEventListener('click', (e) => {
            this.dropdowns.forEach(dropdown => {
                const menu = dropdown.querySelector('.dropdown-menu');
                if (!dropdown.contains(e.target)) {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                    menu.style.transform = 'translateY(-10px)';
                }
            });
        });
    }
}

// Smooth Scrolling for Navigation Links
class SmoothScrolling {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.addSmoothScroll();
    }

    addSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#') && href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
}

// Header Scroll Effect
class HeaderScrollEffect {
    constructor() {
        this.header = document.querySelector('.header');
        this.lastScrollTop = 0;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > this.lastScrollTop && scrollTop > 100) {
                // Scrolling down
                this.header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                this.header.style.transform = 'translateY(0)';
            }
            
            this.lastScrollTop = scrollTop;
        });
    }
}

// Button Hover Effects
class ButtonEffects {
    constructor() {
        this.buttons = document.querySelectorAll('.btn');
        this.init();
    }

    init() {
        this.addRippleEffect();
    }

    addRippleEffect() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
}

// Modal handling for Career Apply Now
class ApplyNowModal {
    constructor() {
        this.modal = document.getElementById('applyModal');
        this.applyButtons = document.querySelectorAll('.apply-btn');
        if (this.modal && this.applyButtons.length) {
            this.init();
        }
    }

    init() {
        const closeElements = this.modal.querySelectorAll('[data-modal-close]');
        closeElements.forEach(el => el.addEventListener('click', () => this.close()));
        this.applyButtons.forEach(btn => btn.addEventListener('click', () => this.open(btn)));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen()) this.close();
        });

        const form = document.getElementById('applyForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you! Your application has been submitted. سيتم التواصل خلال 24 ساعة.');
                this.close();
                form.reset();
            });
        }
    }

    isOpen() { return this.modal.classList.contains('open'); }
    open(btn) {
        const position = btn.getAttribute('data-position') || '';
        const school = btn.getAttribute('data-school') || '';
        const positionInput = document.getElementById('position');
        const schoolInput = document.getElementById('school');
        if (positionInput) positionInput.value = position;
        if (schoolInput) schoolInput.value = school;
        this.modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        const title = document.getElementById('applyModalTitle');
        if (title) title.textContent = `Apply Now — ${position} @ ${school}`;
    }
    close() {
        this.modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// Form validation and success modals
class FormHandler {
    constructor() {
        this.init();
    }

    init() {
                    this.handleJoinStudentForm();
            this.handleBecomeTeacherForm();
            this.handleJoinTeacherForm();
            this.handleLoginForm();
            this.handleSuccessModals();
    }

    handleJoinStudentForm() {
        const form = document.getElementById('joinStudentForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                if (this.validateStudentForm(form)) {
                    this.showSuccessModal('successModal');
                    form.reset();
                }
            });
        }
    }

    handleBecomeTeacherForm() {
        const form = document.getElementById('becomeTeacherForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                if (this.validateTeacherForm(form)) {
                    this.showSuccessModal('successModal');
                    form.reset();
                }
            });
        }
    }

    handleLoginForm() {
        const form = document.getElementById('loginForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                if (this.validateLoginForm(form)) {
                    alert('Login successful! Welcome back.');
                    form.reset();
                }
            });
        }
    }

    handleSuccessModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            const closeElements = modal.querySelectorAll('[data-modal-close]');
            closeElements.forEach(el => el.addEventListener('click', () => this.closeModal(modal)));
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal.open');
                if (openModal) this.closeModal(openModal);
            }
        });
    }

    validateStudentForm(form) {
        const password = form.querySelector('#password').value;
        const confirmPassword = form.querySelector('#confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return false;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters long!');
            return false;
        }
        
        return true;
    }

    validateTeacherForm(form) {
        const certFile = form.querySelector('#certFile').files[0];
        if (!certFile) {
            alert('Please upload your certification file!');
            return false;
        }
        
        return true;
    }

    validateLoginForm(form) {
        const phone = form.querySelector('#phone').value;
        const password = form.querySelector('#password').value;
        
        if (!phone || !password) {
            alert('Please fill in all fields!');
            return false;
        }
        
        return true;
    }

    showSuccessModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal(modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// Initialize all classes when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.slide')) {
        new HeroSlider();
    }
    new ScrollAnimation();
    new DropdownEnhancement();
    new SmoothScrolling();
    new HeaderScrollEffect();
    new ButtonEffects();
    new ApplyNowModal();
    new FormHandler();
    
    // Add ripple effect CSS
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .header {
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add loading animation CSS
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(loadingStyle);
}); 