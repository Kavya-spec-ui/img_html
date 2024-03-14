function toggleNavbar() {
  var menu = document.querySelector('.navbar-menu');
  if (window.innerWidth <= 768) {
      menu.classList.toggle('show');
  } else {
      menu.classList.remove('show');
  }
}

document.querySelector('.navbar-toggler').addEventListener('click', toggleNavbar);

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
      var menu = document.querySelector('.navbar-menu');
      menu.classList.remove('show');
  }
});

