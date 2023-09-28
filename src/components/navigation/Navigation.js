var m = require("mithril");

function Navigation() {
    return {
        view: () => (
            <nav id="navigation">
                <h1 class="brand">
                    <a href="/">JD</a>
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
                        <a href="/">Accueil</a>
                    </li>
                    <li>
                        <a href="/about">A propos</a>
                    </li>
                    <li>
                        <a href="/projects">Projets</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
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