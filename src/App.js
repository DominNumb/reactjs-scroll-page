import './App.css'
import Navbar from './components/navbarComponent'

// Aby fungovalo scroll, musi se naisntallovat npm install react-scroll
// pak se importuje do navbar komponentu kde se použije jako Link v html, kde se použije konkretní nastaveni a to direct na id divu v App

function App() {
  return (
    <div className="App">
      <header className="site-header sticky-top ">
        <Navbar />
      </header>
      <main className="bg-dark text-center text-white">
        <div id="homeDummyDiv">
          <h1>
            <span className="badge badge-warning">Dummy Home</span>
          </h1>
          <div>Title for example</div>
          <div>info</div>
          <div>And next shits..</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
        </div>

        <div id="prvniDummyDiv">
          <h1>
            <span className="badge badge-warning">First dummy</span>
          </h1>
          <div>Title for example</div>
          <div>info</div>
          <div>And next shits..</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
        </div>

        <div id="druhyDummyDiv">
          <h1>
            <span className="badge badge-warning">Secound dummy</span>
          </h1>
          <div>Title for example</div>
          <div>info</div>
          <div>And next shits..</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
          <div>...</div>
        </div>
      </main>
    </div>
  )
}

export default App
