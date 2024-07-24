import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

import './App.css'

import { Header, Content, Footer } from './components';
import { Home } from './pages';


function App() {
  return (
    <>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    {/* <Header userName="Mari"/>
    <Content>
      <Home/>
    </Content>
    <Footer creatorName="Mariana Abad"/> */}
    </>
  )
}

export { App }
