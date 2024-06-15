import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditDataShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({});

  const loadData = () => {
    const url = `http://localhost:8000/products/proedit`;
    axios.post(url, { id: id }).then((res) => {
      setInput(res.data);
    }).catch((error) => {
      console.error("Error fetching data:", error);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8000/products/editDataSave";
    try {
      await axios.post(url, { id, ...input });
      alert("Successfully Updated");
      navigate("/admindashboard");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div style={{ width: "500px" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pname">Product Name</label>
        <input
          type="text"
          name="pname"
          value={input.pname}
          onChange={handleInput}
        />

        <label htmlFor="pbrand">Product Brand</label>
        <input
          type="text"
          name="pbrand"
          value={input.pbrand}
          onChange={handleInput}
        />

        <label htmlFor="category">Category</label>
        <select
          name="category"
          value={input.category}
          onChange={handleInput}
        >
          <option value="">Select Any one</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Kids">Kids</option>
        </select>

        <label htmlFor="price">Enter Price</label>
        <input
          type="text"
          name="price"
          value={input.price}
          onChange={handleInput}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default EditDataShow;
