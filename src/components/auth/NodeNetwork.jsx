import "./NodeNetwork.css";

const modules = [
  { name: "HR", top: "6%", left: "50%" },
  { name: "INV", top: "28%", left: "18%" },
  { name: "CRM", top: "28%", left: "82%" },
  { name: "FIN", top: "72%", left: "20%" },
  { name: "SLS", top: "72%", left: "80%" },
  { name: "PAY", top: "94%", left: "50%" },
];

function NodeNetwork() {
  return (
    <div className="network-wrapper">

      {/* Connection Lines */}
      <div className="line line-hr"></div>
      <div className="line line-inv"></div>
      <div className="line line-crm"></div>
      <div className="line line-fin"></div>
      <div className="line line-sls"></div>
      <div className="line line-pay"></div>

      {/* Center Hub */}
      <div className="center-node">
        <span>SmartERP</span>
      </div>

      {/* Module Chips */}
      {modules.map((module) => (
        <div
          key={module.name}
          className="module-chip"
          style={{
            top: module.top,
            left: module.left,
          }}
        >
          {module.name}
        </div>
      ))}
    </div>
  );
}

export default NodeNetwork;