/**
 * Prolog Projetos - Script Principal
 * Autor: Trae AI
 * Versão: 1.2
 */

$(document).ready(function() {
    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });

    // Smooth scrolling for anchor links with improved animation
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-bs-toggle="dropdown"]').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 800, 'easeInOutQuart');
                
                // Highlight the section briefly
                target.addClass('section-highlight');
                setTimeout(function() {
                    target.removeClass('section-highlight');
                }, 1500);
                
                return false;
            }
        }
    });
    
    // Add easing function if not available
    if (typeof $.easing.easeInOutQuart !== 'function') {
        $.easing.easeInOutQuart = function(x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        };
    }
    
    // Back to top button functionality
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });
    
    $('.back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 800, 'easeInOutQuart');
        return false;
    });

    // Remove validation classes on input
    $('input, textarea').on('focus', function() {
        $(this).removeClass('is-invalid');
    });

    // Animation on scroll - Melhorado para todas as páginas
    function animateOnScroll() {
        // Animação para cards em todas as páginas
        $('.service-card, .pillar-card, .testimonial-card, .feature-card, .team-card').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scroll + windowHeight > position + 100) {
                $(this).addClass('animated');
            }
        });
        
        // Animação para timeline na página de treinamento
        $('.timeline-item').each(function(index) {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scroll + windowHeight > position + 50) {
                var delay = index * 200; // Efeito cascata
                var $this = $(this);
                setTimeout(function() {
                    $this.addClass('timeline-appear');
                }, delay);
            }
        });
        
        // Animação para etapas de processo nas páginas de serviço
        $('.process-step').each(function(index) {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scroll + windowHeight > position + 50) {
                var delay = index * 150;
                var $this = $(this);
                setTimeout(function() {
                    $this.addClass('process-appear');
                }, delay);
            }
        });
    }
    
    // Run animation on page load
    setTimeout(function() {
        animateOnScroll();
    }, 500);
    
    // Run animation on scroll
    $(window).scroll(function() {
        animateOnScroll();
    });
    
    // Adicionar animações específicas para páginas individuais
    var currentPage = window.location.pathname.split('/').pop();
    
    // Animações específicas para páginas de inspeção
    if (currentPage === 'inspecao-sistemas.html' || currentPage === 'inspecao-reavaliacao.html') {
        // Animar ícones de benefícios
        $('.benefit-icon').each(function(index) {
            var $this = $(this);
            setTimeout(function() {
                $this.addClass('animated');
            }, index * 200);
        });
    }
    
    // Animações específicas para página de treinamento
    if (currentPage === 'treinamento.html') {
        // Animar timeline markers com efeito de pulsar
        $('.timeline-marker').each(function(index) {
            var $this = $(this);
            setTimeout(function() {
                $this.addClass('animated');
                // Adicionar efeito de pulsar
                $this.append('<span class="pulse-effect"></span>');
            }, index * 300);
        });
        
        // Adicionar estilo para o efeito de pulsar
        $("<style> .pulse-effect { position: absolute; width: 100%; height: 100%; border-radius: 50%; background-color: var(--primary-color); z-index: -1; opacity: 0.6; animation: pulse 2s infinite;}@keyframes pulse { 0% { transform: scale(1); opacity: 0.6; } 70% { transform: scale(1.5); opacity: 0; } 100% { transform: scale(1); opacity: 0; } } </style>").appendTo('head');
    }
    
    // Animações específicas para página de plano de manutenção
    if (currentPage === 'plano-manutencao.html') {
        // Animar cards de etapas do plano
        $('.step-card').each(function(index) {
            var $this = $(this);
            setTimeout(function() {
                $this.addClass('animated');
            }, index * 200);
        });
        
        // Animar ícones de benefícios
        $('.benefit-icon').each(function(index) {
            var $this = $(this);
            setTimeout(function() {
                $this.addClass('animated');
            }, index * 200);
        });
    }

    // Mobile menu collapse on click
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    // Add CSS classes for animations
    //$('<style>/* Animações básicas */.animated{animation:fadeInUp 0.5s ease forwards;}@keyframes fadeInUp{from{opacity:0;transform:translate3d(0,40px,0);}to{opacity:1;transform:translate3d(0,0,0);}}.section-highlight{animation:highlight 1.5s ease;}@keyframes highlight{0%{box-shadow:0 0 0 0 rgba(20,92,162,0.4);}50%{box-shadow:0 0 0 20px rgba(20,92,162,0.2);}100%{box-shadow:0 0 0 0 rgba(20,92,162,0);}}/* Animações para elementos de hover */.hover-animate{transition:all 0.3s ease;}.btn:hover{transform:translateY(-3px);box-shadow:0 5px 15px rgba(0,0,0,0.1);}.nav-link:hover{transform:translateY(-2px);}.card:hover{transform:translateY(-5px);box-shadow:0 10px 20px rgba(0,0,0,0.1);}.social-icons a:hover{transform:translateY(-3px);color:var(--primary-light) !important;}/* Animações para timeline */.timeline-item{opacity:0;transform:translateX(-30px);transition:all 0.5s ease;}.timeline-appear{opacity:1;transform:translateX(0);}/* Animações para processo */.process-step{opacity:0;transform:translateY(20px);transition:all 0.4s ease;}.process-appear{opacity:1;transform:translateY(0);}/* Animações para accordion */.accordion-button:not(.collapsed){background-color:rgba(20,92,162,0.1);}.accordion-button:focus{box-shadow:0 0 0 0.25rem rgba(20,92,162,0.25);}</style>').appendTo('head');
    
    // Adicionar botão de volta ao topo e WhatsApp flutuante ao body em todas as páginas
    if (!$('.back-to-top').length) {
        $('body').append('<a href="#" class="back-to-top"><i class="fas fa-arrow-up"></i></a>');
    }
    if (!$('.whatsapp-float').length) {
        $('body').append('<a href="https://wa.me/5515996316527?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Prolog%20Projetos" target="_blank" class="whatsapp-float"><i class="fab fa-whatsapp"></i></a>');
    }
    
    // Adicionar animações de hover para elementos interativos em todas as páginas
    $('.navbar-nav .nav-link, .btn, .card, .social-icons a, .accordion-button, .testimonial-card, .feature-card, .team-card').addClass('hover-animate');
    
    // Adicionar estilos CSS para botões flutuantes
    $('<style>.back-to-top, .whatsapp-float {position: fixed;width: 40px;height: 40px;border-radius: 50%;display: flex;align-items: center;justify-content: center;z-index: 1000;opacity: 0;visibility: hidden;transition: all 0.3s ease;}.back-to-top {right: 20px;bottom: 80px;background-color: var(--primary-color);color: white;}.whatsapp-float {right: 20px;bottom: 20px;background-color: #25D366;color: white;font-size: 1.5rem;box-shadow: 0 4px 10px rgba(0,0,0,0.15);}.back-to-top.show, .whatsapp-float.show {opacity: 1;visibility: visible;}.whatsapp-float:hover, .back-to-top:hover {transform: scale(1.1);}</style>').appendTo('head');
    
    // Mostrar o botão de WhatsApp em todas as páginas
    $('.whatsapp-float').addClass('show');
    
    // Garantir que os botões flutuantes funcionem em todas as páginas
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });

    //ENVIA FORM
    $( ".form-contato-zap" ).on( "submit", function( event ) {
        event.preventDefault();

        console.log('a');

        var form = $(this);
        var formData = {};

        // Get all form fields
        form.find('input, textarea, select').each(function()
        {
            var field = $(this);
            var name = field.attr('name');
            if (name) {
                formData[name] = field.val();
            }
        });
        
        console.log(formData);

        var url = "https://wa.me/5515996316527/?text=Olá, sou o(a) " + capitalizeFirstLetter(formData['nome']) + " da(o) " + capitalizeFirstLetter(formData['empresa']) + ", visitei o site da *Prolog* e gostaria de mais informações sobre *" + formData['assunto'] + '*%0A%0A' + capitalizeFirstLetter(formData['msg']);
        window.open(url, '_blank');
        
    });

    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

});