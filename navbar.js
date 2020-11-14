let mainNav = document.getElementById('js-menu');
let navToggle = document.getElementById('js-navbar-toggle')

navToggle.addEventListener('click', function() {
	mainNav.classList.toggle('active');
});