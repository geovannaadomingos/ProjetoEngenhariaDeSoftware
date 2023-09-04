
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1>ColaboraCIn</h1>
      <Card
        title="Protocolo HTTP"
        courseCode="IF975"
        credits="22.2"
        semester="3° Período"
        professor="Kelvin Lopes"
        author="meom"
        subject="protocolo http"
        views={7}
      />

      
    </>
  )
}

export default App
