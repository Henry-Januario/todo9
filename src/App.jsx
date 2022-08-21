import './App.css'
import Header from './components/Header/Header'
import FirstSection from './components/Section/FirstSection'
import Separator from './components/Separator/Separator'

function App() {

  return (
    <div className="App">
     <Header/>
     <FirstSection/>
     <Separator texto={"Sua seleção especial"}/>
    </div>
  )
}

export default App
