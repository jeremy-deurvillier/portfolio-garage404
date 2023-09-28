const m = require("mithril");
const Link = m.route.Link;

function Navigation() {
    return {
        view: () => (
            <nav id="navigation">
                <h1 class="brand">
                    <Link href="/">JD</Link>
                </h1>
                <a href="#menu">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                    Menu
                </a>
                <ul id="menu">
                    <li>
                        <a href="#">
                            <i class="fa fa-times" aria-hidden="true"></i>
                            Fermer
                        </a>
                    </li>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/about">A propos</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projets</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    <li>
                        <a href="/assets/medias/pdf/jeremy-deurvillier_resume.pdf">Mon CV</a>
                    </li>
                </ul>
            </nav>
        )
    };
}

module.exports = Navigation;