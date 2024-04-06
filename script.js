function toggleNavbar() {
  var menu = document.querySelector('.navbar-menu');
  var divToHide = document.querySelector('.side'); // Select the first div to hide
  var secondDivToHide = document.querySelector('.right_side_footer'); // Select the second div to hide

  if (window.innerWidth <= 768) {
      menu.classList.toggle('show');
      divToHide.style.display = 'none'; // Hide the first div
      secondDivToHide.style.display = 'none'; // Hide the second div
  } else {
      menu.classList.remove('show');
      divToHide.style.display = 'block'; // Show the first div
      secondDivToHide.style.display = 'block'; // Show the second div
  }
}

document.querySelector('.navbar-toggler').addEventListener('click', toggleNavbar);

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
      var menu = document.querySelector('.navbar-menu');
      var divToHide = document.querySelector('.side'); // Select the first div to hide
      var secondDivToHide = document.querySelector('.right_side_footer'); // Select the second div to hide
      menu.classList.remove('show');
      divToHide.style.display = 'block'; // Show the first div
      secondDivToHide.style.display = 'block'; // Show the second div
  } else {
      var divToHide = document.querySelector('.side'); // Select the first div to hide
      var secondDivToHide = document.querySelector('.right_side_footer'); // Select the second div to hide
      divToHide.style.display = 'none'; // Hide the first div
      secondDivToHide.style.display = 'none'; // Hide the second div
  }
});
