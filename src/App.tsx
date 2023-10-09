import rocketLogo from './assets/rocket.svg';
import styleHeader from './Header.module.css';
import { List } from './components/List';

function App() {
  return (
    <>
      <header className={styleHeader.headerTodo}>
        <img src={rocketLogo} alt="ilustração azul de foguete" />
        <h1>
          <span>to</span>do
        </h1>
      </header>
      
      <List />
    </>
  )
}

export default App
