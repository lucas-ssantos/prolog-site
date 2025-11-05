/**
 * Script de Animação de Contagem
 * Implementa animação para elementos com a classe 'count-number'
 */

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos com a classe 'count-number'
    const countElements = document.querySelectorAll('.count-number');
    
    // Função para verificar se um elemento está visível na tela
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Função para animar a contagem
    function animateCount(el) {
        // Obtém o valor final do texto do elemento
        const finalValue = el.textContent.trim();
        
        // Verifica se o valor termina com '+' ou '%'
        const hasPlusSign = finalValue.endsWith('+');
        const hasPercentSign = finalValue.endsWith('%');
        
        // Remove os sinais para obter apenas o número
        let targetNumber = finalValue.replace(/[+%]/g, '');
        targetNumber = parseInt(targetNumber, 10);
        
        // Define o valor inicial como 0
        let startNumber = 0;
        
        // Duração da animação em milissegundos
        const duration = 2000;
        
        // Tempo de início da animação
        const startTime = performance.now();
        
        // Função para atualizar o contador
        function updateCount(currentTime) {
            // Calcula o tempo decorrido
            const elapsedTime = currentTime - startTime;
            
            // Calcula o progresso da animação (0 a 1)
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Aplica uma função de easing para suavizar a animação
            // Função easeOutQuad: t*(2-t)
            const easedProgress = progress * (2 - progress);
            
            // Calcula o valor atual baseado no progresso
            const currentValue = Math.floor(startNumber + easedProgress * (targetNumber - startNumber));
            
            // Atualiza o texto do elemento com o valor atual
            el.textContent = currentValue + (hasPlusSign ? '+' : '') + (hasPercentSign ? '%' : '');
            
            // Continua a animação se ainda não terminou
            if (progress < 1) {
                requestAnimationFrame(updateCount);
            }
        }
        
        // Inicia a animação
        requestAnimationFrame(updateCount);
    }
    
    // Função para verificar todos os elementos e iniciar animação se visíveis
    function checkAndAnimate() {
        countElements.forEach(function(element) {
            // Verifica se o elemento já foi animado
            if (!element.dataset.animated && isElementInViewport(element)) {
                // Marca o elemento como animado para não repetir a animação
                element.dataset.animated = 'true';
                // Inicia a animação
                animateCount(element);
            }
        });
    }
    
    // Verifica os elementos quando a página carrega
    checkAndAnimate();
    
    // Verifica os elementos durante o scroll
    window.addEventListener('scroll', checkAndAnimate);
});