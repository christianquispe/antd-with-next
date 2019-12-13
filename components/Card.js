import { Card as AntdCard } from "antd";
import fetch from "isomorphic-unfetch";

const { Meta } = AntdCard;

const Card = props => (
  <AntdCard
    title={props.name}
    extra={<a href="#">More</a>}
    type="inner"
    hoverable
    cover={
      <img
        alt="example"
        src={props.img}
        style={{
          objectFit: "cover",
          objectPosition: "top"
        }}
      />
    }
  >
    <Meta
      description={props.summary}
      style={{ overflow: "hidden", height: 100 }}
    />
  </AntdCard>
);
Card.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  return {
    shows: data.map(entry => entry.show)
  };
};
export default Card;
