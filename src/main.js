var m = require("mithril");

function App() {
    return {
        view: () => (
            <main>
                <h1>Hello world</h1>
            </main>
        ),
    };
}

m.render(document.querySelector('div#root'), <App />);