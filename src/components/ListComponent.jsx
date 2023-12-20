import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../index.css";

const ListComponent = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8000/items").then((res) => {
      setItems(res.data);
    });
  }, []);

  const handleDelete = (itemId) => {
    const confirmDelete = window.confirm(
      "Вы уверены, что хотите удалить этот элемент?"
    );
    if (confirmDelete) {
      axios.delete(`http://localhost:8000/items/${itemId}`).then(() => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      });
    }
  };

  return (
    <div className="listOfItems">
      <h2>List of Items</h2>
      <ul className="list">
        {items.map((item) => (
          <li className="name" key={item.id}>
            {item.name}
            <Link to={`/read/${item.id}`}>Details</Link>
            <Link to={`/update/${item.id}`}>Edit</Link>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
