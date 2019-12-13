import { Row, Col } from "antd";
// Components
import Card from "../components/Card";
import fetch from "isomorphic-unfetch";
const Home = props => (
  <Row type="flex" justify="center" gutter={[20, 0]}>
    {props.shows.map(show => (
      <Col
        style={{
          marginTop: 20
        }}
        key={show.id}
        xs={24}
        sm={12}
        lg={8}
        xl={7}
      >
        <Card
          img={show.image.medium}
          name={show.name}
          summary={show.summary.replace(/<[/]?[pb]>/g, "")}
        />
      </Col>
    ))}
  </Row>
);
Home.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  return {
    shows: data.map(entry => entry.show)
  };
};
export default Home;
