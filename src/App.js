import image from './qwerty123.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <code><i>playing theme song..</i></code>
        <img style={{}} src={image} className="App-logo" alt="logo" />
        <p>
         <code>🥱 Hi, I'm Seyi Adeleye.</code>
        </p>
          <code>a backend engineer.</code>
        <p>~Go, Python[Django, fastAPI], Git</p>
    
        <a
          className="App-link"
          href="https://github.com/seyiadel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Profile
        </a>

       <a
          className="App-link"
          href="https://twitter.com/seyiadel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter 
        </a>

        <a
          className="App-link"
          href="https://linkedin.com/in/oluwaloseyi-adeleye/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </header>
      <footer>
        <code>🚨..built with speed💨</code>
      </footer>
    </div>
  );
}

export default App;
