import React, { useState } from "react";
import axios from "axios";

const CreateComponent = () => {
  const initialFormData = {
    name: "",
    age: "",
    phone: "",
    profession: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/items", formData).then((response) => {
      setFormData(initialFormData);
    });
  };

  return (
    <div>
      <h2 className="title-create">Create New Item</h2>
      <form className="create-form" onSubmit={handleSubmit}>
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
          <input name="age" value={formData.age} onChange={handleChange} />
        </label>
        <br />
        <label>
          Phone number:
          <input name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <br />
        {/* Добавляем поле для ввода профессии */}
        <label>
          Profession:
          <input
            name="profession"
            value={formData.profession}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateComponent;
