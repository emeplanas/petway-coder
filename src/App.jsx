import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <Fragment>
      <Navbar />
        <ItemListContainer greeting='Buenas!'/>
    </Fragment>
  );
}

export default App;
