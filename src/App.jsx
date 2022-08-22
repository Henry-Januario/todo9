import './App.css'
import Footer from './components/Footer/Footer'
import FormIndication from './components/FormIndication/FormIndication'
import Header from './components/Header/Header'
import P from './components/P/P'
import FirstSection from './components/Section/FirstSection'
import Separator from './components/Separator/Separator'

function App() {

  return (
    <div className="App">
     <Header/>
     <FirstSection/>
     <Separator texto={"Sua seleção especial"}/>
     <Separator texto={"Compartilhe a novidade"}/>
     <P texto={"Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!"}/>
     <FormIndication/>
     <Footer/>
    </div>
  )
}

export default App
