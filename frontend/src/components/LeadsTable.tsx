import { useState } from "react";

type Lead = {
  _id: string;
  name: string;
  email: string;
  status: string;
};

type Props = {
  leads: Lead[];

  onDelete: (id: string) => void;

  onUpdate: (
    id: string,
    updatedData: {
      name: string;
      email: string;
      status: string;
    }
  ) => void;
};

function LeadsTable({
  leads,
  onDelete,
  onUpdate,
}: Props) {
  const [editingId, setEditingId] =
    useState("");

  const [status, setStatus] =
    useState("");

  function handleEdit(lead: Lead) {
    setEditingId(lead._id);
    setStatus(lead.status);
  }

  function handleSave(id: string) {
    onUpdate(id, {
      name:
        leads.find(
          (lead) => lead._id === id
        )?.name || "",

      email:
        leads.find(
          (lead) => lead._id === id
        )?.email || "",

      status,
    });

    setEditingId("");
  }

  const thStyle = {
    padding: "14px",
    textAlign: "left" as const,
    color: "#334155",
  };

  const tdStyle = {
    padding: "14px",
    borderTop: "1px solid #e2e8f0",
    color: "#1e293b",
  };

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "20px",
        marginTop: "30px",
        boxShadow:
          "0 8px 20px rgba(0,0,0,0.1)",
        overflowX: "auto",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          color: "#1e293b",
        }}
      >
        Leads
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor:
                "#f1f5f9",
            }}
          >
            <th style={thStyle}>
              Name
            </th>

            <th style={thStyle}>
              Email
            </th>

            <th style={thStyle}>
              Status
            </th>

            <th style={thStyle}>
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id}>
              <td style={tdStyle}>
                {lead.name}
              </td>

              <td style={tdStyle}>
                {lead.email}
              </td>

              <td style={tdStyle}>
                {editingId ===
                lead._id ? (
                  <select
                    value={status}
                    onChange={(e) =>
                      setStatus(
                        e.target.value
                      )
                    }
                    style={{
                      padding: "8px",
                      borderRadius:
                        "8px",
                    }}
                  >
                    <option>
                      Pending
                    </option>

                    <option>
                      Qualified
                    </option>
                  </select>
                ) : (
                  <span
                    style={{
                      padding:
                        "6px 12px",
                      borderRadius:
                        "20px",

                      background:
                        lead.status ===
                        "Qualified"
                          ? "#22c55e"
                          : "#f59e0b",

                      color: "white",

                      fontWeight:
                        "bold",

                      fontSize:
                        "14px",
                    }}
                  >
                    {lead.status}
                  </span>
                )}
              </td>

              <td style={tdStyle}>
                <button
                  onClick={() =>
                    onDelete(
                      lead._id
                    )
                  }
                  style={{
                    padding:
                      "8px 14px",

                    marginRight:
                      "10px",

                    background:
                      "#ef4444",

                    color: "white",

                    border: "none",

                    borderRadius:
                      "8px",

                    cursor:
                      "pointer",
                  }}
                >
                  Delete
                </button>

                {editingId ===
                lead._id ? (
                  <button
                    onClick={() =>
                      handleSave(
                        lead._id
                      )
                    }
                    style={{
                      padding:
                        "8px 14px",

                      background:
                        "#22c55e",

                      color:
                        "white",

                      border:
                        "none",

                      borderRadius:
                        "8px",

                      cursor:
                        "pointer",
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      handleEdit(
                        lead
                      )
                    }
                    style={{
                      padding:
                        "8px 14px",

                      background:
                        "#2563eb",

                      color:
                        "white",

                      border:
                        "none",

                      borderRadius:
                        "8px",

                      cursor:
                        "pointer",
                    }}
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadsTable;