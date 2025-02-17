// Функция за създаване на снежинки
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
  
    // Генериране на произволни размери за снежинките
    const size = Math.random() * 5 + 5; // Размер между 5px и 10px
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
  
    // Генериране на произволни начини на движение (по ширина)
    snowflake.style.left = `${Math.random() * 100}vw`; // Произволна начална позиция по X
  
    // Добавяне на снежинката към елемента
    document.getElementById("snowfall").appendChild(snowflake);
  
    // Анимиране на снежинките
    const animationDuration = Math.random() * 10 + 5; // Произволно време за падане (между 5 и 15 секунди)
    snowflake.style.animationDuration = `${animationDuration}s`;
  
    // Премахване на снежинките, след като са паднали
    setTimeout(() => {
      snowflake.remove();
    }, animationDuration * 1000);
  }
  
  // Създаване на снежинки на интервал
  window.onload = function() {
    setInterval(createSnowflake, 150); // Създава снежинка на всеки 150 милисекунди
  };
  