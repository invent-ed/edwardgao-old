(_ => {
	const projects = document.getElementById('projects');
	const menu = document.getElementById('menu');
	window.onscroll = e => {
		let projectsTop = projects.getBoundingClientRect().top;
		menu.className = (projectsTop < 1) ? "static-menu" : "";
	}
})();
