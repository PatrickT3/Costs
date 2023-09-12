//REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route,BrowserRouter,Routes } from 'react-router-dom'
// STYLE
import './index.css';
// PAGES
import Home from "./pages/home/Home";
import Company from "./pages/company/Company";
import Contact from "./pages/contact/Contact";
import Project from "./pages/Project/Project";
import NewPrj from './pages/NewPrj/NewPrj';
import ProjectEdit from './pages/ProjectEdit/ProjectEdit';
// COMPONENTS
import App from './App';
import Container from './layout/Container';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Container customClass="min-height"> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Company' element={<Company/>}/>
          <Route path='/Project' element={<Project/>}/>
          <Route path='/NewProj' element={<NewPrj/>}/>
          <Route path='/Edit/:id' element={<ProjectEdit/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

