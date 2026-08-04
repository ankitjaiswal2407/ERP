import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import employeesData from "../../data/employees";

import EmployeeSearch from "../../components/employees/EmployeeSearch";
import EmployeeFilter from "../../components/employees/EmployeeFilter";
import EmployeeTable from "../../components/employees/EmployeeTable";
import EmployeePagination from "../../components/employees/EmployeePagination";
import EmployeeModal from "../../components/employees/EmployeeModal";
import EmployeeForm from "../../components/employees/EmployeeForm";
import EmployeeDetails from "../../components/employees/EmployeeDetails";
import DeleteEmployeeModal from "../../components/employees/DeleteEmployeeModal";

import "../../styles/employees.css";

function Employees() {
  /* ===========================
      STATES
  =========================== */

  const [employees, setEmployees] = useState(employeesData);

  const [searchTerm, setSearchTerm] = useState("");

  const [department, setDepartment] = useState("All");

  const [status, setStatus] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [detailsOpen, setDetailsOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  /* ===========================
      ADD EMPLOYEE
  =========================== */

  const addEmployee = (newEmployee) => {
    const employee = {
      ...newEmployee,
      id: Date.now(),
      avatar: newEmployee.firstName.charAt(0).toUpperCase(),
      salary: Number(newEmployee.salary),
    };

    setEmployees((prev) => [...prev, employee]);

    setSelectedEmployee(null);

    setIsModalOpen(false);
  };

  /* ===========================
      VIEW EMPLOYEE
  =========================== */

  const viewEmployee = (employee) => {
    setSelectedEmployee(employee);

    setDetailsOpen(true);
  };

  /* ===========================
      EDIT EMPLOYEE
  =========================== */

  const editEmployee = (employee) => {
    setSelectedEmployee(employee);

    setDetailsOpen(false);

    setIsModalOpen(true);
  };

  /* ===========================
      UPDATE EMPLOYEE
  =========================== */

  const updateEmployee = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((employee) =>
        employee.id === updatedEmployee.id
          ? updatedEmployee
          : employee
      )
    );

    setSelectedEmployee(null);

    setIsModalOpen(false);
  };

  /* ===========================
      OPEN DELETE MODAL
  =========================== */

  const deleteEmployee = (employee) => {
    setEmployeeToDelete(employee);

    setDeleteOpen(true);
  };

  /* ===========================
      CONFIRM DELETE
  =========================== */

  const confirmDelete = (id) => {
    setEmployees((prev) =>
      prev.filter((employee) => employee.id !== id)
    );

    setDeleteOpen(false);

    setEmployeeToDelete(null);

    setSelectedEmployee(null);

    setDetailsOpen(false);
  };

  /* ===========================
      FILTER EMPLOYEES
  =========================== */

  const filteredEmployees = employees.filter((employee) => {
    const fullName =
      `${employee.firstName} ${employee.lastName}`.toLowerCase();

    const matchesSearch =
      fullName.includes(searchTerm.toLowerCase()) ||
      employee.email
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      employee.department === department;

    const matchesStatus =
      status === "All" ||
      employee.status === status;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesStatus
    );
  });

  /* ===========================
      UI
  =========================== */

  return (
    <div className="employees-page">

      {/* HEADER */}

      <div className="employees-header">

        <div>
          <h1>Employees</h1>

          <p>Manage all employees of your organization.</p>
        </div>

        <button
          className="add-employee-btn"
          onClick={() => {
            setSelectedEmployee(null);

            setIsModalOpen(true);
          }}
        >
          <FiPlus />

          <span>Add Employee</span>
        </button>

      </div>

      {/* TOOLBAR */}

      <div className="employees-toolbar">

        <EmployeeSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="filter-group">

          <EmployeeFilter
            title="Department"
            value={department}
            onChange={setDepartment}
            options={[
              "All",
              "IT",
              "HR",
              "Finance",
              "Marketing",
              "Sales",
              "Support",
            ]}
          />

          <EmployeeFilter
            title="Status"
            value={status}
            onChange={setStatus}
            options={[
              "All",
              "Active",
              "Inactive",
              "Leave",
            ]}
          />

        </div>

      </div>

      {/* EMPLOYEE TABLE */}

      <EmployeeTable
        employees={filteredEmployees}
        onView={viewEmployee}
        onEdit={editEmployee}
        onDelete={deleteEmployee}
      />

      {/* PAGINATION */}

      <EmployeePagination />

      {/* ADD / EDIT MODAL */}

      <EmployeeModal
        isOpen={isModalOpen}
        title={
          selectedEmployee
            ? "Edit Employee"
            : "Add New Employee"
        }
        onClose={() => {
          setSelectedEmployee(null);

          setIsModalOpen(false);
        }}
      >
        <EmployeeForm
          key={selectedEmployee?.id || "new"}
          employee={selectedEmployee}
          onCancel={() => {
            setSelectedEmployee(null);

            setIsModalOpen(false);
          }}
          onSave={
            selectedEmployee
              ? updateEmployee
              : addEmployee
          }
        />
      </EmployeeModal>

      {/* EMPLOYEE DETAILS */}

      <EmployeeDetails
        employee={selectedEmployee}
        isOpen={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        onEdit={editEmployee}
        onDelete={deleteEmployee}
      />

      {/* DELETE MODAL */}

      <DeleteEmployeeModal
        isOpen={deleteOpen}
        employee={employeeToDelete}
        onCancel={() => {
          setDeleteOpen(false);

          setEmployeeToDelete(null);
        }}
        onConfirm={confirmDelete}
      />

    </div>
  );
}

export default Employees;