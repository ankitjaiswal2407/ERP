
import { useEffect, useMemo, useState } from "react";
import PayrollHeader from "../../components/payroll/PayrollHeader";
import PayrollStats from "../../components/payroll/PayrollStats";
import PayrollFilter from "../../components/payroll/PayrollFilter";
import PayrollTable from "../../components/payroll/PayrollTable";
import PayrollModal from "../../components/payroll/PayrollModal";
import PayslipModal from "../../components/payroll/PayslipModal";
import PayrollPagination from "../../components/payroll/PayrollPagination";
import PayrollDetailsModal from "../../components/payroll/PayrollDetailsModal";
import DeletePayrollModal from "../../components/payroll/DeletePayrollModal";

import {
  loadPayrolls,
  savePayrolls,
  searchPayroll,
  filterPayroll,
  paginatePayroll,
  exportPayrollCSV,
} from "../../utils/salaryCalculator";

import "../../styles/payroll.css";

const ROWS_PER_PAGE = 8;

const Payroll = () => {
  const [payrolls, setPayrolls] = useState(() => loadPayrolls());

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [month, setMonth] = useState("");
  const [status, setStatus] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [modalOpen, setModalOpen] = useState(false);
  const [payslipOpen, setPayslipOpen] = useState(false);

  const [selectedPayroll, setSelectedPayroll] = useState(null);
  const [editPayroll, setEditPayroll] = useState(null);

  const [detailsOpen, setDetailsOpen] = useState(false);
 const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    savePayrolls(payrolls);
  }, [payrolls]);

  const filteredPayrolls = useMemo(() => {
    const searched = searchPayroll(payrolls, search);

    return filterPayroll(
      searched,
      department,
      month,
      status
    );
  }, [
    payrolls,
    search,
    department,
    month,
    status,
  ]);

  const totalPages = Math.ceil(
    filteredPayrolls.length / ROWS_PER_PAGE
  );

  const currentPayrolls = useMemo(() => {
    return paginatePayroll(
      filteredPayrolls,
      currentPage,
      ROWS_PER_PAGE
    );
  }, [
    filteredPayrolls,
    currentPage,
  ]);

  const handleAdd = () => {
    setEditPayroll(null);
    setModalOpen(true);
  };

  const handleSave = (data) => {
    if (editPayroll) {
      setPayrolls((prev) =>
        prev.map((item) =>
          item.id === data.id ? data : item
        )
      );
    } else {
      setPayrolls((prev) => [...prev, data]);
    }

    setModalOpen(false);
  };

  const handleEdit = (item) => {
    setEditPayroll(item);
    setModalOpen(true);
  };

  const handleDelete = (item) => {
    setSelectedPayroll(item);
    setDeleteOpen(true);
  };

  const confirmDelete = (id) => {
    setPayrolls((prev) =>
      prev.filter((item) => item.id !== id)
    );
    setDeleteOpen(false);
    setSelectedPayroll(null);
  };

  const handleView = (item) => {
    setSelectedPayroll(item);
    setDetailsOpen(true);
  };

  const handlePayslip = (item) => {
    setSelectedPayroll(item);
    setPayslipOpen(true);
  };

  const handleExport = () => {
    exportPayrollCSV(filteredPayrolls);
  };

  const handleRefresh = () => {
    setPayrolls(loadPayrolls());
    setSearch("");
    setDepartment("");
    setMonth("");
    setStatus("");
    setCurrentPage(1);
  };

  return (
    <div className="payroll-page">

      <PayrollHeader
        onAdd={handleAdd}
        onExport={handleExport}
        onRefresh={handleRefresh}
      />

      <PayrollStats payrolls={payrolls} />

      <PayrollFilter
        search={search}
        setSearch={setSearch}
        department={department}
        setDepartment={setDepartment}
        month={month}
        setMonth={setMonth}
        status={status}
        setStatus={setStatus}
      />

      <PayrollTable
        payrolls={currentPayrolls}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onPayslip={handlePayslip}
      />

      <PayrollPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <PayrollModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditPayroll(null);
        }}
        onSave={handleSave}
        editPayroll={editPayroll}
      />

      <PayslipModal
        isOpen={payslipOpen}
        payroll={selectedPayroll}
        onClose={() => {
          setPayslipOpen(false);
          setSelectedPayroll(null);
        }}
      />

      <PayrollDetailsModal
        isOpen={detailsOpen}
        payroll={selectedPayroll}
        onClose={() => {
          setDetailsOpen(false);
          setSelectedPayroll(null);
        }}
      />

      <DeletePayrollModal
        isOpen={deleteOpen}
        payroll={selectedPayroll}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedPayroll(null);
        }}
        onConfirm={confirmDelete}
      />

    </div>
  );
};

export default Payroll;