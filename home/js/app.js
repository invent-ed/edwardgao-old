(() => {

    // DOM elements
    const header = document.getElementById('header');
    const headerTitle = document.getElementById('header-title');
    const headerMenu = document.getElementById('header-menu');
    const menuSpacing = document.getElementById('menu-spacing');
    const headerSpace = document.getElementById('header-space');

    // set headerSpace height
    (function followHeight() {
        headerSpace.style.height = header.offsetHeight + "px";
        setTimeout(followHeight, 5);
    })();

    // Scroll actions
    function scrollAction() {
        const distanceY = window.pageYOffset;
        const largeMedia = '(min-device-width: 1024px) and (min-width: 1130px)';
        const matchMedia = window.matchMedia(largeMedia).matches;
        if(distanceY > 0 && matchMedia) {
            smallHeader();
        } else {
            largeHeader();
        }
        if(matchMedia) {
            headerSpace.style.display = 'block';
        } else {
            headerSpace.style.display = 'none';
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

    window.addEventListener('scroll', scrollAction);
    window.addEventListener('resize', scrollAction);

})();
