const m = require("mithril");
const Link = m.route.Link;

function openMenu(e) {
    e.preventDefault();

    root.style.setProperty('--menu-border-radius', '40% 0 0 80%');
    root.style.setProperty('--menu-transform', 'translateX(0)');
}

function closeMenu() {
    root.style.setProperty('--menu-border-radius', '0');
    root.style.setProperty('--menu-transform', 'translateX(70vw)');
}

function Navigation() {
    return {
        view: () => (
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
                        <Link href="/about" onclick={ closeMenu }>A propos</Link>
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
                </ul>
            </nav>
        )
    };
}

module.exports = Navigation;