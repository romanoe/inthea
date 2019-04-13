import React, { Component } from 'react';
import logo from './logo.svg';
import { Row, Col, Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Noemi Romano</h1>
      <Row>
      <Col span={12}><Button type="primary">Button</Button></Col>
      <Col span={12}>col-12</Col>
    </Row>

      </div>
    );
  }
}

export default App;
