
import './App.css'
import logo from './assets/colabora.png'
import lupa from './assets/lupa.png'
import mais from './assets/mais.svg'
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
            <a href="#" className="search-icon">
              <img
                src={lupa}
                alt="Icone de lupa"
                className="nav-img2"
              />
              </a>
            <div className='nav-div2-div'>
              <a className='nav-div-a' href="#">
                Adicionar material
              </a>
              <img
                src={mais}
                alt="Icone de mais"
                className="nav-img2 more-icon"
              />
            </div>
          </div>
        </nav>
      </header>

      <div className="card-container">
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
        <Card
          title="Protocolo HTTP"
          courseCode="IF975"
          credits="22.2"
          semester="3° Período"
          professor="Kelvin Lopes"
          author="meom"
          subject="protocolo http"
          views={8}
        />
        <Card
          title="Protocolo HTTP"
          courseCode="IF975"
          credits="22.2"
          semester="3° Período"
          professor="Kelvin Lopes"
          author="meom"
          subject="protocolo http"
          views={9}
        />
      </div>
      <div className="card-container">
        {/* Segundo conjunto de Cards */}
        <Card
          title="Outro Título"
          courseCode="IF976"
          credits="20.5"
          semester="4° Período"
          professor="João Silva"
          author="outroautor"
          subject="outra matéria"
          views={12}
        />
        <Card
          title="Mais um Card"
          // Adicione as propriedades do segundo card do segundo conjunto aqui
        />
        <Card
          title="E mais um"
          // Adicione as propriedades do terceiro card do segundo conjunto aqui
        />
      </div>
    </>
  );
}

export default App
