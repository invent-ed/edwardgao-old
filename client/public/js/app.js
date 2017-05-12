(_ => {
	const projects = document.getElementById('projects');
	const education = document.getElementById('education');
	const experience = document.getElementById('experience');
	const skills = document.getElementById('skills');
	const menu = document.getElementById('menu');
	window.onscroll = e => {
		let projectsTop = projects.getBoundingClientRect().top;
		let educationTop = education.getBoundingClientRect().top;
		let experienceTop = experience.getBoundingClientRect().top;
		let skillsTop = skills.getBoundingClientRect().top;
		menu.className = (projectsTop < 1) ? "static-menu" : "";
	}
})();
