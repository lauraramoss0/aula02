import Olamundo from './componentes/olaMundo';
import Frases from './frases/frases';
import DigaMeuNome from './componentes/digaMeuNome';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1> oi </h1>
      <Olamundo />
      <Frases />
      <DigaMeuNome nome="Laura" profissao="medica" idade="16" sonho="mematar" />

    </div>
  );
}

export default App;
