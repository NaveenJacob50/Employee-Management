import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const employees = [
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      name: "hukum",
      email: "hcgupta@cstech.in",
      mobile: "954010044",
      designation: "HR",
      gender: "Male",
      course: "MCA",
      createDate: "13-Feb-21",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      name: "manish",
      email: "manish@cstech.in",
      mobile: "954010033",
      designation: "Sales",
      gender: "Male",
      course: "BCA",
      createDate: "12-Feb-21",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/50",
      name: "yash",
      email: "yash@cstech.in",
      mobile: "954010022",
      designation: "Manager",
      gender: "Male",
      course: "BSC",
      createDate: "11-Feb-21",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/50",
      name: "abhishek",
      email: "abhishek@cstech.in",
      mobile: "954010033",
      designation: "HR",
      gender: "Male",
      course: "MCA",
      createDate: "13-Feb-21",
    },
  ];

  const handleCreateEmployee = () => {
    navigate('/create-employee'); // Redirect to CreateEmployee page
  };

  const handleEditEmployee = (id) => {
    navigate(`/employee-edit/${id}`); // Redirect to EmployeeEdit page with employee ID
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Title and Actions */}
      <div className="bg-gray-800 px-4 py-2 font-bold text-gray-100 rounded-t-md p-8">
        Employee List
      </div>
      <div className="bg-gray-800 shadow-lg p-4 rounded-b-md">
        <div className="flex justify-between items-center mb-4">
          <div className="font-medium text-gray-100">
            Total Count: {employees.length}
          </div>
          <div className="flex items-center gap-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              onClick={handleCreateEmployee}
            >
              Create Employee
            </button>
            <input
              type="text"
              placeholder="Enter Search Keyword"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
        </div>

        {/* Table */}
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-gray-100">
              <th className="border border-gray-300 px-4 py-2">Unique Id</th>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Mobile No</th>
              <th className="border border-gray-300 px-4 py-2">Designation</th>
              <th className="border border-gray-300 px-4 py-2">Gender</th>
              <th className="border border-gray-300 px-4 py-2">Course</th>
              <th className="border border-gray-300 px-4 py-2">Create Date</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="text-gray-100 text-center">
                <td className="border border-gray-300 px-4 py-2">{employee.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">{employee.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-blue-600 underline">
                  <a href={`mailto:${employee.email}`}>{employee.email}</a>
                </td>
                <td className="border border-gray-300 px-4 py-2">{employee.mobile}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.designation}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.gender}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.course}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.createDate}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="text-blue-500 hover:underline mr-2"
                    onClick={() => handleEditEmployee(employee.id)} // Trigger edit action
                  >
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
