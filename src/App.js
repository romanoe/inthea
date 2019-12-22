import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

import './App.css';

const { Meta } = Card;

class App extends Component {

  render() {
    return (
      <div className="App">

      <div>
      <h1 style={{marginBottom: '-10px', marginLeft: '5%'}}> Noemi <b>Romano</b> </h1>

      </div>
      <div style={{ padding: '30px' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card
            cover={
                <img
                alt="example"
                src="../../images/diversity-1.png"
                  />}>

                  <Meta

            title="Indice de marchabilité"
            description="Un indice qui définit la marchabilité d'un quartier, à Lausanne et à Genève"
            />
            </Card>
          </Col>

          <Col span={8}>
            <Card
            cover={
                <img
                alt="example"
                src="../../images/diversity-1.png"
                  />}>

                  <Meta

            title="Gestion réseau routier au Burkina Faso"
            description="Un indice qui définit la marchabilité d'un quartier, à Lausanne et à Genève"
            />
            </Card>
          </Col>


          <Col span={8}>
            <Card
            cover={
                <img
                alt="example"
                src="../../images/geometeorites.gif"
                  />}>

                  <Meta

            title="Météorites"
            description="Un indice qui définit la marchabilité d'un quartier, à Lausanne et à Genève"
            />
            </Card>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={8}>
            <Card
            cover={
                <img
                alt="example"
                src="../../images/diversity-1.png"
                  />}>

                  <Meta

            title="Cartographie des familles dialectales"
            description="Un indice qui définit la marchabilité d'un quartier, à Lausanne et à Genève"
            />
            </Card>
          </Col>
          <Col span={8}>
            <Card
            cover={
                <img
                alt="example"
                src="../../images/diversity-1.png"
                  />}>

                  <Meta

            title="Métasanté"
            description="Une cohorte numérique participative pour le monitoring de l’état de santé de la population lausannoise"
            />
            </Card>
          </Col>
          <Col span={8}>
            <Card
            cover={
                <img
                alt="example"
                src="../../images/diversity-1.png"
                  />}>

                  <Meta

            title="Somnolonce diurne et rues prioritaires"
            description="Un indice qui définit la marchabilité d'un quartier, à Lausanne et à Genève"
            />
            </Card>
          </Col>
        </Row>
      </div>







  <footer style={{textAlign:'center'}}>
  <code>© 2019 Noemi Romano</code>
  </footer>
      </div>
    );
  }
}

export default App;
