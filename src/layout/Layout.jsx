import React from "react";
import axios from "axios";
import Row from "../components/Row";
import Card from "../components/Card";

export const apiCall = async () => {
  const response = await axios.get("https://idme-interview.herokuapp.com");
  return response;
};

export default function Layout() {
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const response = await apiCall();
    if (response) setData(response.data.slice(0, 4));
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <section className="container">
      <div className="title" id="Purchases">
        Purchases
      </div>
      <table className="table" data-testid="laptop-view">
        <thead>
          <tr className="header">
            <th className="margin-cell"></th>
            <th className="table-header-cell">Name</th>
            <th className="table-header-cell">Location</th>
            <th className="table-header-cell">Purchase Date</th>
            <th className="table-header-cell category-header">Category</th>
            <th className="table-header-cell">Description</th>
            <th className="table-header-cell">Price</th>
            <th className="margin-cell"></th>
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((datum, index) => {
            return <Row {...datum} key={index}></Row>;
          })}
        </tbody>
      </table>

      <div className="mobile-device" data-testid="mobile-view">
        {data.map((datum, index) => {
          return <Card {...datum} key={index}></Card>;
        })}
      </div>
    </section>
  );
}
