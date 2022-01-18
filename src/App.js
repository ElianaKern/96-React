import Nav from "./componentes/Nav"
import Principal from "./componentes/Principal"
import Footer from "./componentes/Footer"

const App = () => {
  return (
    <div>
      <Nav/>
      <Principal/>
      <Footer/>
    </div>
  );
}

export default App;

{ /*
crear de cero un proyecto con react
Una barra de navegacion, un componente principal y un footer
dentro del componente principal quiero dos secciones que sean iguales
las dos secciones tienen que tener un titulo, un subtitulo y buna imagen
el titulo, subtitulo, imagen, se tienen que pasar por props
ademas cada seccion va a llamar al componente boton
en la primera seccion el componente boton va a decir "primera"
en la segunda el componente va a decir "segunda"
si quieren estilar, que sea con sass
Pista para puntos 7 y 8: como podemos hacer que section le diga a los 
componentes dos mensajes distintos? 
puede section recibir el mensaje de los botones como una prop?
 */ }