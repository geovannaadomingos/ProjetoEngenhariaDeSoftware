
import './App.css'
import logo from './assets/colabora.png'
import lupa from './assets/lupa.png'
import mais from './assets/mais.png'
import Card from './components/Card'

function App() {

  return (
    <>
      <header>
        <nav>
          <div className='nav-div1'>
            <h1 className='nav-h1'>ColaboraCIn</h1>
            <img
              src={logo}
              alt="Logo"
              className='nav-img'
            />
          </div>
          <div className='nav-div2'>
            <a className='nav-div-a' href="#">
              <img
                src={lupa}
                alt="Icone de lupa"
                className='nav-img2'
              />
            </a>
            <div className='nav-div2-div'>
              <a className='nav-div-a' href="#">
                Adicionar material
              </a>
              <img
                src={mais}
                alt="Icone de mais"
                className='nav-img2'
              />
            </div>
          </div>
        </nav>
      </header>

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
