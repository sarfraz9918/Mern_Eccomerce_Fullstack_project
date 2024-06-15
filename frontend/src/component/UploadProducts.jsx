import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const UploadProducts = () => {
  const [input, setInput] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const [error, setError] = useState(""); // State for validation error message

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    if (!input.pname || !input.pbrand || !input.description || !input.category || !input.subcategory || !input.tags || !input.price || !selectedFile) {
      setError("All fields are required.");
      return; // Prevent form submission if validation fails
    }

    setError(""); // Clear any existing error messages

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('upload_preset', 'uwb6rto7');
      formData.append('cloud_name', 'dumn9pr5m');
      const response = await axios.post('https://api.cloudinary.com/v1_1/dumn9pr5m/image/upload', formData);
      console.log('Image uploaded:', response.data);
      console.log('Image uploaded:', response.data.url);
      setImgUrl(response.data.url);
      let imgpath = response.data.url;
      let input2 = { ...input, "imgpath": imgpath };
      console.log(input2);
      const res1 = await axios.post('http://localhost:8000/products/productsave', input2);

      if (res1) {
      toast.success('Data successfully Uploaded!');

        
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <>
      <div style={{ width: "500px" }}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Product Name</label>
          <input type="text" name="pname" value={input.pname || ""} onChange={handleInput} />

          <label htmlFor="lname">Product Brand</label>
          <input type="text" name="pbrand" value={input.pbrand || ""} onChange={handleInput} />

          <label htmlFor="lname">Description</label>
          <input type="text" name="description" value={input.description || ""} onChange={handleInput} />

          <label htmlFor="category">Category</label>
          <select name="category" value={input.category || ""} onChange={handleInput}>
            <option value="">Select Any one</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Kids">Kids</option>
          </select>

          <label htmlFor="subcategory">Sub Category</label>
          <select name="subcategory" value={input.subcategory || ""} onChange={handleInput}>
            <option value="">Select Any one</option>
            <option value="Shirt">Shirt</option>
            <option value="TShirt">TShirt</option>
            <option value="Jeans">Jeans</option>
            <option value="Kurta">Kurta</option>
            <option value="Lowers">Lowers</option>
            <option value="Pajama">Pajama</option>
            <option value="Trouser">Trouser</option>
          </select>

          <label htmlFor="tags">Select Tags</label>
          <select name="tags" value={input.tags || ""} onChange={handleInput}>
            <option value="">Select Any one</option>
            <option value="other">Other Products</option>
            <option value="feature">Feature Products</option>
            <option value="topselling">Top Selling Products</option>
            <option value="trending">Trending Products</option>
          </select>

          <label htmlFor="price">Enter Price</label>
          <input type="text" name="price" value={input.price || ""} onChange={handleInput} />

          <label htmlFor="file">Upload image</label>
          <input type="file" name="file" onChange={handleFileChange} />

          {error && <div className="error-message">{error}</div>} {/* Display validation error message */}

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default UploadProducts;
