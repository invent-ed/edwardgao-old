(function headerStuff() {

    // Header DOM elements
    const header = document.getElementById('header');
    const headerTitle = document.getElementById('header-title');
    const headerMenu = document.getElementById('header-menu');
    const menuSpacing = document.getElementById('menu-spacing');
    const headerSpace = document.getElementById('header-space');

    // Device / platform detection
    let isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1; 
    let iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    let iPad = navigator.userAgent.match(/iPad/i) != null;

    // set headerSpace height
    (function followHeight() {
        headerSpace.style.height = header.offsetHeight + "px";
        setTimeout(followHeight, 5);
    })();

    // fix safari weird header height bug
    (function safariFix() {
        const largeMedia = '(min-device-width: 1024px) and (min-width: 1130px)';
        const matchMedia = window.matchMedia(largeMedia).matches;
        if(matchMedia && !isChrome) {
            header.style.height = "9rem";
        }
    })();

    // fix quirks in iOS
    (function iOSFix() {
        if(iOS) {
            header.style.paddingBottom = "1rem";
        }
        if(iPad) {
            header.style.paddingBottom = "0.5rem";
            headerMenu.style.paddingTop = "1rem";
            headerMenu.style.marginLeft = "2rem";
        }
    })();

    // Scroll actions
    function scrollAction() {
        const distanceY = window.pageYOffset;
        const largeMedia = '(min-device-width: 1024px) and (min-width: 1130px)';
        const matchMedia = window.matchMedia(largeMedia).matches;
        if(distanceY > 0 && matchMedia) {
            smallHeader();
            if(!isChrome) {
                header.style.height = "3rem";
            }
        } else {
            largeHeader();
        } 
    }

    // header actions
    function smallHeader() {
        header.classList.add('smaller');
        headerTitle.classList.add('smaller');
        headerMenu.classList.add('smaller');
        menuSpacing.classList.add('smaller');
    }
    function largeHeader() {
        header.classList.remove('smaller');
        headerTitle.classList.remove('smaller');
        headerMenu.classList.remove('smaller');
        menuSpacing.classList.remove('smaller');
    }

    // scroll and resize actions
    window.addEventListener('scroll', scrollAction);
    window.addEventListener('resize', scrollAction);

})();

(function menuStuff() {

    // Menu DOM elements
    const aboutLink = document.getElementById('about-link');
    const projectsLink = document.getElementById('projects-link');
    const contactLink = document.getElementById('contact-link');
    const about = document.getElementById('about');
    const projects = document.getElementById('projects');
    const contact = document.getElementById('contact');

    // Display links
    function showAbout() {
        about.style.display = "block";
        projects.style.display = "none";
        contact.style.display = "none";
        aboutLink.style.textDecoration = "underline";
        projectsLink.style.textDecoration = "none";
        contactLink.style.textDecoration = "none";
    }
    function showProjects() {
        about.style.display = "none";
        projects.style.display = "block";
        contact.style.display = "none";
        aboutLink.style.textDecoration = "none";
        projectsLink.style.textDecoration = "underline";
        contactLink.style.textDecoration = "none";
    }
    function showContact() {
        about.style.display = "none";
        projects.style.display = "none";
        contact.style.display = "block";
        aboutLink.style.textDecoration = "none";
        projectsLink.style.textDecoration = "none";
        contactLink.style.textDecoration = "underline";
    }

    // Add event listeners
    aboutLink.addEventListener('click', showAbout);
    projectsLink.addEventListener('click', showProjects);
    contactLink.addEventListener('click', showContact);

})();
