import React from "react";
import axios from "axios";
import Row from "../components/Row";
import Card from "../components/Card";

export default function Layout() {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const data = await axios.get("https://idme-interview.herokuapp.com");
    setData(data.data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <section className="container">
      <div className="title">Purchase</div>
      <div className="table">
        <div className="row">
          <div style={{ width: "48px", height: "48px" }}></div>
          <div className="table-header-cell">Name</div>
          <div className="table-header-cell">Location</div>
          <div className="table-header-cell">Purchase Date</div>
          <div className="table-header-cell">Category</div>
          <div className="table-header-cell">Description</div>
          <div className="table-header-cell">Price</div>
          <div style={{ width: "48px", height: "48px" }}></div>
        </div>
        {data.map((datum, index) => {
          return <Row {...datum} key={index}></Row>;
        })}
      </div>
      <div className="mobile-device">
        {data.map((datum, index) => {
          return <Card {...datum} key={index}></Card>;
        })}
      </div>
    </section>
  );
}
