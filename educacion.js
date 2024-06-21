document.addEventListener("DOMContentLoaded", () => {
    const lines = [
        "Liceo Comercial Las Américas - PRIMARIA",
        "Gimnasio Tundama - BACHILLER",
        "UNITEC - Tecnóloga en Diseño y Producción Gráfica",
        "SENA - Preprensa digital",
        "Talento Tech - Bootcamp Diseño Web Full Stack"
    ];

    let currentLine = 0;
    let isDeleting = false;
    let charIndex = 0;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenLines = 1000;

    const animatedTextElement = document.getElementById("animatedText");

    function type() {
        if (currentLine < lines.length) {
            const fullText = lines[currentLine];

            if (isDeleting) {
                animatedTextElement.textContent = fullText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                animatedTextElement.textContent = fullText.substring(0, charIndex + 1);
                charIndex++;
            }

            animatedTextElement.innerHTML = animatedTextElement.textContent + '<span class="cursor"></span>';

            if (!isDeleting && charIndex === fullText.length) {
                setTimeout(() => {
                    isDeleting = true;
                    setTimeout(type, deletingSpeed);
                }, delayBetweenLines);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                currentLine++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
            }
        }
    }

    type();
});