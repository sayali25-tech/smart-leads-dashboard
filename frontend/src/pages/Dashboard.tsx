import { useEffect, useState } from "react";

import AddLeadForm from "../components/AddLeadForm";
import LeadsTable from "../components/LeadsTable";

import {
  fetchLeads,
  deleteLead,
  updateLead,
} from "../services/leadService";

type Lead = {
  _id: string;
  name: string;
  email: string;
  status: string;
};

function Dashboard() {
  const [leads, setLeads] =
    useState<Lead[]>([]);

  async function loadLeads() {
    try {
      const data =
        await fetchLeads();

      setLeads(data);
    } catch (error) {
      console.log(error);
    }
  }

useEffect(() => {
  const getData = async () => {
    try {
      const data =
        await fetchLeads();

      setLeads(data);
    } catch (error) {
      console.log(error);
    }
  };

  getData();
}, []);

  async function handleDeleteLead(
    id: string
  ) {
    try {
      await deleteLead(id);

      loadLeads();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdateLead(
    id: string,
    updatedData: {
      name: string;
      email: string;
      status: string;
      source?:string;
    }
  ) {
    try {
      await updateLead(
        id,
        updatedData
      );

      loadLeads();
    } catch (error) {
      console.log(error);
    }
  }

  return (
  <div
    style={{
      minHeight: "100vh",
      background:
        "linear-gradient(to right, #141e30, #243b55)",
      padding: "30px",
      fontFamily: "Arial",
      color: "white",
    }}
  >
    <h1
      style={{
        fontSize: "42px",
        marginBottom: "30px",
        fontWeight: "bold",
      }}
    >
      Smart Leads Dashboard
    </h1>

    <div
      style={{
        background:
          "rgba(255,255,255,0.08)",
        padding: "20px",
        borderRadius: "20px",
        marginBottom: "30px",
        backdropFilter: "blur(10px)",
      }}
    >
      <AddLeadForm
        refreshLeads={
          loadLeads
        }
      />
    </div>

    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          flex: 1,
          minWidth: "220px",
          background:
            "rgba(255,255,255,0.08)",
          padding: "25px",
          borderRadius: "20px",
        }}
      >
        <h3>Total Leads</h3>

        <h1>{leads.length}</h1>
      </div>

      <div
        style={{
          flex: 1,
          minWidth: "220px",
          background:
            "rgba(255,255,255,0.08)",
          padding: "25px",
          borderRadius: "20px",
        }}
      >
        <h3>
          Qualified Leads
        </h3>

        <h1>
          {
            leads.filter(
              (lead) =>
                lead.status ===
                "Qualified"
            ).length
          }
        </h1>
      </div>

      <div
        style={{
          flex: 1,
          minWidth: "220px",
          background:
            "rgba(255,255,255,0.08)",
          padding: "25px",
          borderRadius: "20px",
        }}
      >
        <h3>New Leads</h3>

        <h1>
          {
            leads.filter(
              (lead) =>
                lead.status ===
                "New"
            ).length
          }
        </h1>
      </div>
    </div>

    <div
      style={{
        background:
          "rgba(255,255,255,0.08)",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <LeadsTable
        leads={leads}
        onDelete={
          handleDeleteLead
        }
        onUpdate={
          handleUpdateLead
        }
      />
    </div>
  </div>
);
}

export default Dashboard;