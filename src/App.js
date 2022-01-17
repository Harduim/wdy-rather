import './App.css';
import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Container fluid> {/* Page container */}
      <Row> {/* Main Row */}
        <Col xs={3} >
          <Sidebar />
        </Col> {/* Sidebar Col */}
        <Col xs={9} >Main content
        </Col> {/* Content Col */}
      </Row> {/* Main Row */}
      {/* Page container */}
    </Container>
  );
}

export default App;






