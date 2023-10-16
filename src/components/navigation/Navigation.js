const m = require("mithril");
const Link = m.route.Link;

function openMenu(e) {
    e.preventDefault();

    document.querySelector('#menu').style.setProperty('--menu-width', 'var(--menu-width-show)');
}

function closeMenu() {
    document.querySelector('#menu').style.setProperty('--menu-width', 'var(--menu-width-hide)');
}

function Navigation() {
    const COLORSCHEME = 'colorscheme'; // Clé pour stocker le colorscheme dans localStorage.

    /* ** Récupère le thème (light / dark) du client.
    * Enregistre le thème dans localStorage.
    */
    function saveColorScheme() {
        let lightMode;

        if (!localStorage.getItem(COLORSCHEME)) {
            lightMode = window.matchMedia('(prefers-color-scheme: light)').matches;

            localStorage.setItem(COLORSCHEME, lightMode?'light':'dark');
        }
    }

    /* ** Définit l'icône à afficher en fonction du thème actuel.
    */
    function choiceIcon() {
        let button = document.querySelector('#dark-mode');
        let icon = (localStorage.getItem(COLORSCHEME) == 'light')?'fa fa-moon-o':'fa fa-sun-o';

        button.setAttribute('class', icon);
    }

    /* ** Met à jour les couleurs de l'UI en fonction du thème.
    */
    function updateUI() {
        let lightColor = getComputedStyle(document.documentElement).getPropertyValue('--light-color');
        let darkColor = getComputedStyle(document.documentElement).getPropertyValue('--dark-color');
        let colorscheme = localStorage.getItem(COLORSCHEME);

        if (colorscheme == 'light') {
            document.documentElement.style.setProperty('--primary-color', darkColor);
            document.documentElement.style.setProperty('--secondary-color', lightColor);
        } else {
            document.documentElement.style.setProperty('--primary-color', lightColor);
            document.documentElement.style.setProperty('--secondary-color', darkColor);
        }

        choiceIcon();
    }

    /* ** Change le thème actuel de l'application.
    */
    function updateColorScheme(e) {
        e.preventDefault();

        let colorscheme = localStorage.getItem(COLORSCHEME);

        if (colorscheme == 'light') {
            localStorage.setItem(COLORSCHEME, 'dark');
        } else {
            localStorage.setItem(COLORSCHEME, 'light');
        }

        updateUI();
    }

    return {
        oninit: saveColorScheme,

        oncreate: updateUI,
        
        view: (vnode) => (
            <nav id="navigation">
                <h1 class="brand">
                    <Link href="/">JD</Link>
                </h1>
                <a href="#menu" onclick={ openMenu }>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                    Menu
                </a>
                <ul id="menu">
                    <li>
                        <a href="#" id="close-menu" onclick={ e => {e.preventDefault(); closeMenu();} }>
                            <i class="fa fa-times" aria-hidden="true"></i>
                            Fermer
                        </a>
                    </li>
                    <li>
                        <Link href="/" onclick={ closeMenu }>Accueil</Link>
                    </li>
                    <li>
                        <Link href="/about" onclick={ closeMenu }>À propos</Link>
                    </li>
                    <li>
                        <Link href="/projects" onclick={ closeMenu }>Projets</Link>
                    </li>
                    <li>
                        <Link href="/contact" onclick={ closeMenu }>Contact</Link>
                    </li>
                    <li>
                        <a href="/assets/medias/pdf/jeremy-deurvillier_resume.pdf" target="_blank">Mon CV</a>
                    </li>
                    <li>
                        <i id="dark-mode" onclick={ updateColorScheme }></i>
                    </li>
                </ul>
            </nav>
        )
    };
}

module.exports = Navigation;
