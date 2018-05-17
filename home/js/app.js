(function headerStuff() {

    // Header DOM elements
    const header = document.getElementById('header');
    const headerTitle = document.getElementById('header-title');
    const headerMenu = document.getElementById('header-menu');
    const menuSpacing = document.getElementById('menu-spacing');
    const headerSpace = document.getElementById('header-space');

    // Device / platform detection
    let isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1; 
    let isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1; 
    let iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    let iPad = navigator.userAgent.match(/iPad/i) != null;

    // set headerSpace height
    (function followHeight() {
        headerSpace.style.height = header.offsetHeight + "px";
        setTimeout(followHeight, 5);
    })();

    // fix quirks in desktop Safari
    (function safariFix() {
        const largeMedia = '(min-device-width: 1024px) and (min-width: 1130px)';
        const matchMedia = window.matchMedia(largeMedia).matches;
        if(isSafari && !isChrome && matchMedia) {
            header.classList.add('smaller');
            headerTitle.classList.add('smaller');
            headerMenu.classList.add('smaller');
            menuSpacing.classList.add('smaller');
            header.style.height = "3rem";
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
        let distanceY = window.pageYOffset;
        let largeMedia = '(min-device-width: 1024px) and (min-width: 1130px)';
        let matchMedia = window.matchMedia(largeMedia).matches;
        if(!matchMedia) {
            largeHeader();
            header.style.height = "auto";
        } else {
            header.style.height = "3rem";
            smallHeader();
        }
        if(distanceY > 0 && matchMedia) {
            smallHeader();
            if(isSafari && !isChrome) {
                console.log("SETTING!");
                header.style.height = "3rem";
            }
        } else {
            if(!isSafari || isChrome) {
                largeHeader();
            }
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
    let hash = window.location.hash;

    // load appropriate panel
    switch(hash) {
        case "#projects":
            showProjects();
            break;
        case "#contact":
            showContact();
            break;
        default:
            window.location.hash = "#about";
            showAbout();
    }
    window.scrollTo(0,0);

    // Display links
    function showAbout() {
        about.style.display = "block";
        projects.style.display = "none";
        contact.style.display = "none";
        aboutLink.style.textDecoration = "underline";
        projectsLink.style.textDecoration = "none";
        contactLink.style.textDecoration = "none";
        window.location.hash = "#about";
    }
    function showProjects() {
        about.style.display = "none";
        projects.style.display = "block";
        contact.style.display = "none";
        aboutLink.style.textDecoration = "none";
        projectsLink.style.textDecoration = "underline";
        contactLink.style.textDecoration = "none";
        window.location.hash = "#projects";
    }
    function showContact() {
        about.style.display = "none";
        projects.style.display = "none";
        contact.style.display = "block";
        aboutLink.style.textDecoration = "none";
        projectsLink.style.textDecoration = "none";
        contactLink.style.textDecoration = "underline";
        window.location.hash = "#contact";
    }

    // Add event listeners
    aboutLink.addEventListener('click', showAbout);
    projectsLink.addEventListener('click', showProjects);
    contactLink.addEventListener('click', showContact);

})();
