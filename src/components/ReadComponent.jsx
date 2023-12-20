import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadComponent = () => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:8000/items/${id}`).then((res) => {
      setItem(res.data);
    });
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container">
      <h2>Details</h2>
      <p>Name: {item.name}</p>
      <span>Age: {item.age}</span>
      <span>Phone:{item.phone}</span>
      <p>Profession: {item.profession}</p>
    </div>
  );
};

export default ReadComponent;
