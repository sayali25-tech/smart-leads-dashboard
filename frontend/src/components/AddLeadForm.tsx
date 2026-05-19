import { useState } from "react";
import { createLead } from "../services/leadService";

type Props = {
  refreshLeads: () => void;
};

function AddLeadForm({ refreshLeads }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("Pending");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    try {
      await createLead({
        name,
        email,
        status,
      });

      setName("");
      setEmail("");
      setStatus("Pending");
      refreshLeads();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
        flexWrap: "wrap",
      }}
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        style={{
          padding: "10px",
        }}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        style={{
          padding: "10px",
        }}
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        style={{
          padding: "10px",
        }}
      >
        <option>Pending</option>
        <option>Qualified</option>
      </select>

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
        }}
      >
        Add Lead
      </button>
    </form>
  );
}

export default AddLeadForm;