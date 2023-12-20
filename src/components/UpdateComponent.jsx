import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateComponent = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    profession: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/items/${id}`).then((res) => {
      setFormData({
        name: res.data.name,
        age: res.data.age,
        phone: res.data.phone,
        profession: res.data.profession,
      });
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/items/${id}`, formData)
      .then(() => {
        console.log("Item updated");
        window.location.replace(`/read/${id}`);
      })
      .catch((error) => {
        console.error("Error updating item:", error);
      });
  };

  console.log("formData:", formData);

  return (
    <div className="update-form">
      <h2>Edit {formData.name}</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            name="age"
            value={formData.age}
            onChange={handleChange}
            type="number"
          />
        </label>
        <label>
          Phone number:
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
          />
        </label>
        <label>
          Profession:
          <input
            name="profession"
            value={formData.profession}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateComponent;
