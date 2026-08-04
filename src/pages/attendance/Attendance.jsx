import { useState } from "react";
import { FiPlus } from "react-icons/fi";

import attendanceData from "../../data/attendance";

import AttendanceCards from "../../components/attendance/AttendanceCards";
import AttendanceSearch from "../../components/attendance/AttendanceSearch";
import AttendanceFilter from "../../components/attendance/AttendanceFilter";
import AttendanceTable from "../../components/attendance/AttendanceTable";
import AttendanceModal from "../../components/attendance/AttendanceModal";
import AttendanceForm from "../../components/attendance/AttendanceForm";

import "../../styles/attendance.css";

function Attendance() {

  const [attendance, setAttendance] = useState(attendanceData);

  const [searchTerm, setSearchTerm] = useState("");

  const [status, setStatus] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addAttendance = (record) => {

    const newRecord = {
      ...record,
      id: Date.now(),
    };

    setAttendance((prev) => [...prev, newRecord]);

    setIsModalOpen(false);

  };

  const filteredAttendance = attendance.filter((item) => {

    const fullName =
      `${item.firstName} ${item.lastName}`.toLowerCase();

    const matchesSearch =
      fullName.includes(searchTerm.toLowerCase()) ||
      item.employeeId
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesStatus =
      status === "All" ||
      item.status === status;

    return matchesSearch && matchesStatus;

  });

  return (

    <div className="attendance-page">

      <div className="attendance-header">

        <div>

          <h1>Attendance</h1>

          <p>
            Manage employee attendance records.
          </p>

        </div>

        <button
          className="attendance-btn"
          onClick={() => setIsModalOpen(true)}
        >
          <FiPlus />

          <span>Add Attendance</span>

        </button>

      </div>

      <AttendanceCards attendance={attendance} />

      <div className="attendance-toolbar">

        <AttendanceSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <AttendanceFilter
          value={status}
          onChange={setStatus}
        />

      </div>

      <AttendanceTable attendance={filteredAttendance} />

      <AttendanceModal
        isOpen={isModalOpen}
        title="Add Attendance"
        onClose={() => setIsModalOpen(false)}
      >

        <AttendanceForm
          onCancel={() => setIsModalOpen(false)}
          onSave={addAttendance}
        />

      </AttendanceModal>

    </div>

  );

}

export default Attendance;