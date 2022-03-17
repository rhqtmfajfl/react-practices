import './assets/css/App.css';

const App = function() {
    const App = document.createElement('h1');
    App.className = 'Header';
    App.textContent = 'Hello Webpack';
    return App;
}
export { App }
 