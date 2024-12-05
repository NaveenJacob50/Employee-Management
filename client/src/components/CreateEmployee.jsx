import React, { useState } from "react";
import axios from "axios";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState(""); 
  const [gender, setGender] = useState(""); 
  const [course, setCourse] = useState([]); 
  const [image, setImage] = useState(null); 

  const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCourse([...course, value]);
    } else {
      setCourse(course.filter((c) => c !== value));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setImage(file);
    } else {
      alert("Only JPG and PNG files are allowed!");
      e.target.value = ""; // 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("f_Name", name);
    formData.append("f_Email", email);
    formData.append("f_Mobile", mobile);
    formData.append("f_Designation", designation);
    formData.append("f_gender", gender);
    formData.append("f_Course", course.join(", "));
    formData.append("f_Image", image);
    formData.append("f_Createdate", new Date().toISOString());
  
    try {
        const response = await axios.post("http://localhost:5000/api/emp/addemp", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });          
      alert(response.data.message);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Failed to create employee. Check the console for details.");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-gray-100 mb-4">Create Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-100">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg bg-gray-700 text-white focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-100">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg bg-gray-700 text-white focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Mobile */}
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-100">
              Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg bg-gray-700 text-white focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your mobile number"
              required
            />
          </div>
          {/* Designation */}
          <div>
            <label htmlFor="designation" className="block text-sm font-medium text-gray-100">
              Designation
            </label>
            <select
              id="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg bg-gray-700 text-white focus:ring focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="" disabled>
                Select Designation
              </option>
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-100">Gender</label>
            <div className="flex items-center gap-4 mt-2">
              <label className="flex items-center text-gray-100">
                <input
                  type="radio"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center text-gray-100">
                <input
                  type="radio"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>
          {/* Courses */}
          <div>
            <label className="block text-sm font-medium text-gray-100">Course</label>
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center text-gray-100">
                <input
                  type="checkbox"
                  value="MCA"
                  onChange={handleCourseChange}
                  className="mr-2"
                />
                MCA
              </label>
              <label className="flex items-center text-gray-100">
                <input
                  type="checkbox"
                  value="BCA"
                  onChange={handleCourseChange}
                  className="mr-2"
                />
                BCA
              </label>
              <label className="flex items-center text-gray-100">
                <input
                  type="checkbox"
                  value="BSC"
                  onChange={handleCourseChange}
                  className="mr-2"
                />
                BSC
              </label>
            </div>
          </div>
          {/* Image Upload */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-100">
              Upload Image (JPG/PNG)
            </label>
            <input
              type="file"
              id="image"
              accept="image/jpeg, image/png"
              onChange={handleImageUpload}
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg bg-gray-700 text-white focus:ring focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
