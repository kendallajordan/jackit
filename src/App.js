import logo from './logo.svg';
import './App.css';
import { Footer, Header, Instructions, ItemList, Jackit } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Instructions />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
