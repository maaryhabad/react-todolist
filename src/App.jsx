import { Header, Content, Footer } from './components';
import { Home } from './pages';

import './App.css'

function App() {
  return (
    <>
    <Header userName="Mari"/>
    <Content>
      <Home/>
    </Content>
    <Footer creatorName="Mariana Abad"/>
    </>
  )
}

export { App }
