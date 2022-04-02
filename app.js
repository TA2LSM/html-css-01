"use strict"; // hata oluşsa da görüntülenmez, akış bozulmaz

// "btn" class'ına ait "switcher" isimli bir queryselector tanımlandı
const switcher = document.querySelector(".btn");

// "switcher"a, tıklandığı zamanı yakalayan bir "event listener" tanımlandı
switcher.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  var className = document.body.className;
  if (className === "light-theme") {
    this.textContent = "Dark";
  } else {
    this.textContent = "Light";
  }

  //className = document.body.className;
  console.log("Current class name: " + className);
});
