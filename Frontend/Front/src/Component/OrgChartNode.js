import React from "react";

const OrgChartNode = ({ node }) => {
  return (
    <li className="card">
      <div>
        <div className="div-inner">
          <h3 className="h3-inner">{node.name}</h3>
          <p className="p-inner">Email: {node.email}</p>
          <p className="p-inner">Designation: {node.designation}</p>
        </div>
        {node.subordinates && node.subordinates.length > 0 && (
          <ul>
            {node.subordinates.map((subordinate) => (
              <OrgChartNode key={subordinate.email} node={subordinate} />
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

export default OrgChartNode;
