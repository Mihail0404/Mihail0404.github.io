const textElement = document.getElementById("text");
    const messages = [
        "Листайте вниз ⬇️",
        "Поздравляю вас с Днём святого Валентина! ❤️",
        "Пусть счастье всегда будет рядом! 💌",
        "Держите виртуальные розы! 🌹🌹🌹",
        "Елизавета Витальевна, желаю вам мнооооого любви, радости и исполнения желаний! 🌠"
    ];

    let currentIndex = 0;

    window.addEventListener("scroll", () => {
        let scrollPosition = window.scrollY;
        let newIndex = Math.floor(scrollPosition / 200) % messages.length; 

        if (newIndex !== currentIndex) {
            textElement.style.opacity = "0";
            setTimeout(() => {
                textElement.textContent = messages[newIndex];
                textElement.style.opacity = "1";
            }, 300);
            currentIndex = newIndex;
        }
    });