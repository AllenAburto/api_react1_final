import React from 'react';
import { MiApi } from './componentes/MiApi';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <header>
        <Navbar className="bg-body-tertiary">
          <Container className='d-flex justify-content-center'>
            <Navbar.Brand href="#home">
              <img
                width='600px'
                src='https://assets.stickpng.com/images/58f37720a4fa116215a9240f.png'
                className="d-inline-block align-top"
                alt="Rick and Morty"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <main>
        <div className="container-fluid p-5">
          <MiApi />
        </div>
      </main>
      <footer class="bg-dark text-center text-light p-4">
      <p class="mb-0">
        © Alexis Aburto Q. 2024. Todos los derechos reservados.
      </p>
    </footer>
    </>
  );
}

export default App;
