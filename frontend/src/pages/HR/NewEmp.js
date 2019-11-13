import React from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NewEmp extends React.Component {
  render() {
    return (
      <div className="app-main-container">

        <Form>
          <Row>
            <Col>
              <Form.Label>Chapa</Form.Label>
              <Form.Control placeholder="Enter Chapa" />
            </Col>
            <Col>
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Enter Full Name" />
            </Col>
          </Row>

          <br></br>

          <Form.Label>Address</Form.Label>
          <Form.Row>
            <Col sm="10">
              <Form.Control placeholder="Enter Complet Address" />
            </Col>

            <Col>
              <Form.Check
                custom
                label={`HR Employee?`}
                id={`custom-checkbox`}
                />
            </Col>
          </Form.Row>

          <br></br>

          <Button variant="primary">Save</Button>
        </Form>
      </div>
    );
  }
}

export default NewEmp;