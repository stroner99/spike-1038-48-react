import logo from './logo.svg'
import './App.css'

function App () {
  return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Prueba 5</h1>
                <p> Esto se ha subido a partir de github actions a vercel</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
          Learn React
                </a>
            </header>
        </div>
  )
}

export default App
