document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.toggle');

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();

      const content = this.nextElementSibling;
      const arrow = this.querySelector('.arrow');

      content.classList.toggle('show');
      arrow.classList.toggle('rotate');

      // Byt pil
      if (content.classList.contains('show')) {
        arrow.classList.remove('fa-chevron-down');
        arrow.classList.add('fa-chevron-up');
      } else {
        arrow.classList.remove('fa-chevron-up');
        arrow.classList.add('fa-chevron-down');
      }
    });
  });
});

document.getElementById("scrollLeft").addEventListener("click", function () {
  document.querySelector(".project-container").scrollBy({
    left: -300,
    behavior: "smooth"
  });
});

document.getElementById("scrollRight").addEventListener("click", function () {
  document.querySelector(".project-container").scrollBy({
    left: 300,
    behavior: "smooth"
  });
});