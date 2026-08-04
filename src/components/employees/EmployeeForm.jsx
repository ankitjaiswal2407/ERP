import { useState } from "react";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiDollarSign,
  FiCalendar,
  FiMapPin,
  FiSave,
  FiX,
  FiUsers,
} from "react-icons/fi";

const emptyEmployee = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  employeeId: "",
  department: "",
  designation: "",
  salary: "",
  joiningDate: "",
  gender: "",
  status: "Active",
  address: "",
};

function EmployeeForm({ employee, onCancel, onSave }) {
  const [formData, setFormData] = useState(() => ({
    ...emptyEmployee,
    ...(employee || {}),
  }));

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...(employee || {}),
      ...formData,
    });
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>

      {/* ================= PERSONAL INFORMATION ================= */}

      <div className="form-section">

        <div className="section-title">
          <FiUsers />
          <h3>Personal Information</h3>
        </div>

        <div className="form-grid">

          {/* First Name */}

          <div className="form-group">

            <label>First Name *</label>

            <div className="input-box">

              <FiUser className="input-icon" />

              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          {/* Last Name */}

          <div className="form-group">

            <label>Last Name *</label>

            <div className="input-box">

              <FiUser className="input-icon" />

              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          {/* Email */}

          <div className="form-group">

            <label>Email Address *</label>

            <div className="input-box">

              <FiMail className="input-icon" />

              <input
                type="email"
                name="email"
                placeholder="employee@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          {/* Phone */}

          <div className="form-group">

            <label>Phone Number *</label>

            <div className="input-box">

              <FiPhone className="input-icon" />

              <input
                type="text"
                name="phone"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>

          </div>

          {/* Gender */}

          <div className="form-group">

            <label>Gender</label>

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

          </div>

        </div>

      </div>      {/* ================= EMPLOYMENT DETAILS ================= */}

      <div className="form-section">

        <div className="section-title">
          <FiBriefcase />
          <h3>Employment Details</h3>
        </div>

        <div className="form-grid">

          {/* Employee ID */}

          <div className="form-group">

            <label>Employee ID</label>

            <input
              type="text"
              name="employeeId"
              placeholder="EMP001"
              value={formData.employeeId}
              onChange={handleChange}
            />

          </div>

          {/* Department */}

          <div className="form-group">

            <label>Department</label>

            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              <option>IT</option>
              <option>HR</option>
              <option>Finance</option>
              <option>Marketing</option>
              <option>Sales</option>
              <option>Support</option>
            </select>

          </div>

          {/* Designation */}

          <div className="form-group">

            <label>Designation</label>

            <div className="input-box">

              <FiBriefcase className="input-icon" />

              <input
                type="text"
                name="designation"
                placeholder="Software Engineer"
                value={formData.designation}
                onChange={handleChange}
              />

            </div>

          </div>

          {/* Salary */}

          <div className="form-group">

            <label>Salary</label>

            <div className="input-box">

              <FiDollarSign className="input-icon" />

              <input
                type="number"
                name="salary"
                placeholder="50000"
                value={formData.salary}
                onChange={handleChange}
              />

            </div>

          </div>

          {/* Joining Date */}

          <div className="form-group">

            <label>Joining Date</label>

            <div className="input-box">

              <FiCalendar className="input-icon" />

              <input
                type="date"
                name="joiningDate"
                value={formData.joiningDate}
                onChange={handleChange}
              />

            </div>

          </div>

          {/* Status */}

          <div className="form-group">

            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option>Active</option>
              <option>Inactive</option>
              <option>Leave</option>
            </select>

          </div>

        </div>

      </div>

      {/* ================= ADDRESS ================= */}

      <div className="form-section">

        <div className="section-title">
          <FiMapPin />
          <h3>Address</h3>
        </div>

        <div className="input-box textarea-box">

          <FiMapPin className="input-icon" />

          <textarea
            rows="4"
            name="address"
            placeholder="Enter employee address..."
            value={formData.address}
            onChange={handleChange}
          />

        </div>

      </div>

      {/* ================= ACTION BUTTONS ================= */}

      <div className="form-actions">

        <button
          type="button"
          className="cancel-btn"
          onClick={onCancel}
        >
          <FiX />
          Cancel
        </button>

        <button
          type="submit"
          className="save-btn"
        >
          <FiSave />
          {employee ? "Update Employee" : "Save Employee"}
        </button>

      </div>

    </form>
  );
}

export default EmployeeForm;