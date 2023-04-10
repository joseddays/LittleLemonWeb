import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="container">
      <head>
      <meta name="description" content="Little Lemon Website"/>
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="Restaurant with delicious foods"/>
      <meta name="og:image" content=""/>
      </head>
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
