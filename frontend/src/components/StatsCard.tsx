type Props = {
  title: string;
  value: number;
};

function StatsCard({ title, value }: Props) {
 return (
  <div
    style={{
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      minWidth: "180px",
    }}
  >
    <h2
      style={{
        color: "gray",
        fontSize: "18px",
      }}
    >
      {title}
    </h2>

    <p
      style={{
        fontSize: "32px",
        fontWeight: "bold",
        marginTop: "10px",
      }}
    >
      {value}
    </p>
  </div>
);
}

export default StatsCard;