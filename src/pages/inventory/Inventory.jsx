import React from "react";

function Inventory() {
  const stock = [
    { item: "Laptops", qty: "24", status: "Healthy" },
    { item: "Printers", qty: "8", status: "Low" },
    { item: "Office Chairs", qty: "31", status: "Healthy" },
  ];

  return (
    <div className="page-shell">
      <div className="page-header">
        <div>
          <h1 className="page-title">Inventory</h1>
          <p className="page-subtitle">Monitor stock availability and replenishment needs.</p>
        </div>
        <span className="pill">Reorder queue: 2</span>
      </div>

      <div className="page-grid">
        <div className="info-card">
          <h3>Items in Stock</h3>
          <div className="info-value">128</div>
          <div className="info-meta">Across 6 categories</div>
        </div>
        <div className="info-card">
          <h3>Low Stock</h3>
          <div className="info-value">3</div>
          <div className="info-meta">1 urgent reorder</div>
        </div>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {stock.map((entry) => (
              <tr key={entry.item}>
                <td>{entry.item}</td>
                <td>{entry.qty}</td>
                <td>{entry.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;
