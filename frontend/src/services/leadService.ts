import axios from "axios";

const API =
  "http://localhost:5000/api/leads";

export type Lead = {
  _id?: string;
  name: string;
  email: string;
  status: string;
  source?: string;
};

export async function fetchLeads() {
  const response =
    await axios.get(API);

  return response.data;
}

export async function createLead(
  leadData: Lead
) {
  const response =
    await axios.post(
      API,
      leadData
    );

  return response.data;
}

export async function deleteLead(
  id: string
) {
  const response =
    await axios.delete(
      `${API}/${id}`
    );

  return response.data;
}

export async function updateLead(
  id: string,
  updatedData: Lead
) {
  const response =
    await axios.put(
      `${API}/${id}`,
      updatedData
    );

  return response.data;
}