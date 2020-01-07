import React, { Component } from 'react';
import { Row, Col, Card, Carousel} from 'antd';
import './App.css';
const { Meta } = Card;
// import {metasante} from '../images/metasante.gif';
//



class App extends Component {

  render() {
    return (
      <div className="App">

      <div>
      <h1 style={{marginBottom: '-10px', marginLeft: '5%'}}> Noemi <b>Romano</b> </h1>

      </div>
      <div style={{ padding: '30px' }}>
        <Row gutter={16} type="flex">
          <Col span={8}  >
            <Card
            cover={
                <img
                alt="example"
                src={require("./images/metasante.gif")}
                  />}>

                  <Meta

            title="Métasanté"
            />
            </Card>

          </Col>

          <Col span={8}>
            <Card
            cover={
                <img
                alt="example"
                 src={require("./images/web_sig.gif")}
                  />}>

                  <Meta

            title="Gestion réseau routier au Burkina Faso"

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

            title="Géométéorites"

            />
            </Card>
          </Col>
        </Row>

        <Row gutter={16} type="flex">
          <Col span={8}>
            <Card hoverable
            cover={
              <Carousel autoplay>
                <div>
                  <img   src={require("./images/p1_spatial_trend.png")}     alt="example"/>
                </div>
                <div>
                  <img src={require("./images/p2_spatial_trend.png")}     alt="example"/>
                </div>
                <div>
                  <img   src={require("./images/p3_spatial_trend.png")}     alt="example"/>
                </div>
                <div>
                  <img   src={require("./images/p4_spatial_trend.png")}     alt="example"/>
                </div>
                <div>
                  <img   src={require("./images/p5_spatial_trend.png")}     alt="example"/>
                </div>
                <div>
                  <img   src={require("./images/diversity_map.png")}     alt="example"/>
                </div>

              </Carousel>}>

                  <Meta

            title="Cartographie des dialectes"

            />
            </Card>
          </Col>
          <Col span={8}>
            <Card
            cover={
              <Carousel autoplay>
                <div>
                  <img   src={require("./images/indice.png")}     alt="example"/>
                </div>
                <div>
                  <img src={require("./images/lisa_indice.png")}     alt="example"/>
                </div>
                <div>
                  <img src={require("./images/z_eau-1.png")}     alt="example"/>
                </div>
              </Carousel>
    }>

                  <Meta

            title="Indice de marchabilité"

            />
            </Card>
          </Col>
          <Col span={8}>
            <Card
            cover={
              <Carousel autoplay>
                <div>
                  <img   src={require("./images/voronoi_rue_lsne-1.png")}     alt="example"/>
                </div>
                <div>
                  <img src={require("./images/example_indice_priorité.png")}     alt="example"/>
                </div>

              </Carousel>}>

                  <Meta

            title="Somnolonce diurne et rues prioritaires"
            />
            </Card>
          </Col>
        </Row>
      </div>







  <footer style={{textAlign:'center'}}>
  <code>© 2020 Noemi Romano</code>
  </footer>
      </div>
    );
  }
}

export default App;
