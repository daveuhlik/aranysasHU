let mainNav = getElementById('js-menu');
let navToggle = getElementById('js-navbar-toggle')

navToggle.addEventListener('click', function() {
	mainNav.classList.toggle('active');
})