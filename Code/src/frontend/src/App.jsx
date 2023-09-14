
import './App.css'
import logo from './assets/colabora.png'
import lupa from './assets/lupa.png'
import mais from './assets/mais.svg'
import main_materials from '../mocks/main_materials.json'
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
                className="nav-img2"
              />
            </div>
          </div>
        </nav>
      </header>

      <main>
        {main_materials.map((material) => (
          <Card
            key={material.id}
            titulo={material.titulo}
            codigoDisciplina={material.codigoDisciplina}
            assunto={material.assunto}
            semestre={material.semestre}
            professor={material.professor}
            autor={material.autor}
            periodo={material.periodo}
            curso={material.curso}
          />
        ))}
      </main>

      <footer>
        <h4>
          2023 - <a className="a-footer" href="https://github.com/geovannaadomingos/ProjetoEngenhariaDeSoftware" target="_blank" rel="noreferrer">Repositório com mais informações</a>
        </h4>
      </footer>
    </>
  );
}

export default App
