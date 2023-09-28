const m = require('mithril');
const Navigation = require('./components/navigation/Navigation');

function App() {
    return {
        view: () => (
            <div>
                <header class="container">
                    <Navigation />
                </header>
                <main>
                    <h1>Hello world</h1>
                </main>
            </div>
        ),
    };
}

m.render(document.querySelector('div#root'), <App />);