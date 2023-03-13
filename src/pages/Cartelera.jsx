import React from "react";
import axios from "axios";
import { Layout } from "../components/Layout";
import { Row, Col, Card, Button } from "react-bootstrap";

import imageNotFound from "../assets/images/Image-Not-Available.png";

const Cartelera = () => {
  const [titlesReq, setTitlesReq] = React.useState(null);
  const [params, setParams] = React.useState({
    // year.incr / year.decr
    sort: "year.decr",
    // OPTIONAL Number of titles per page (default: 10) -> 10 max
    limit: 10,
    // OPTIONAL Page number
    page: 1,
  });

  React.useEffect(() => {
    (async () => {
      !titlesReq && (await handlerTitles());
    })();
  });

  const handlerTitles = async (url) => {
    await axios
      .get(url || "titles", {
        params,
      })
      .then(function (response) {
        setTitlesReq(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <Layout>
      <Row className="gy-4">
        {titlesReq?.results?.length > 0 &&
          titlesReq.results.map((_, i) => (
            <Col key={i} md={3}>
              <Card>
                <Card.Img
                  className="img-fluid"
                  variant="top"
                  src={_?.primaryImage?.url || imageNotFound}
                  style={{
                    height: "400px",
                    //   background: `url(${_?.primaryImage?.url || imageNotFound})`,
                    //   backgroundRepeat: "no-repeat",
                    //   backgroundPosition: "center",
                    //   backgroundSize: "cover",
                  }}
                />

                <Card.Text className="d-grid py-1 px-3" style={{ height: "5rem" }}>
                  <span className="fw-semibold">{_.titleText.text}</span>
                  <small>
                    Fecha: {_?.releaseDate?.day}/{_?.releaseDate?.month}/{_?.releaseDate?.year}
                  </small>
                </Card.Text>
                <Button variant="secondary">Detalles</Button>
              </Card>
            </Col>
          ))}
      </Row>

      <Button
        variant="primary"
        onClick={() => {
          setParams({ ...params, page: ++params.page });
          handlerTitles();
        }}>
        Next Page
      </Button>
    </Layout>
  );
};

export default Cartelera;
