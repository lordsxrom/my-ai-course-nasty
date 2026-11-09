import { TipCalculatorForm } from './components/TipCalculatorForm'
import './App.css'

function App() {
  return (
    <main className="app">
      <h1>Tip Calculator</h1>
      <p className="subtitle">Bill, tip %, split — MVP for week 2</p>
      <TipCalculatorForm />
    </main>
  )
}

export default App
