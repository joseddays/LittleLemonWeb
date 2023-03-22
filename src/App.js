import { Fragment } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <Fragment>
      <head>
      <meta name="description" content="your text goes here"/>
      <meta name="og:title" content=""/>
      <meta name="og:description" content=""/>
      <meta name="og:image" content=""/>
      </head>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </Fragment>
  );
}

export default App;
