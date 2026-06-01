import CompanyCard from "./CompanyCard";

export default function CompanySelector() {
  const companies = [
    {
      name: "Gyani Technologies",
      gst: "22AAAAA0000A1Z5",
    },
    {
      name: "ABC Traders",
      gst: "22BBBBB0000B1Z5",
    },
  ];

  return (
    <div className="space-y-4">
      {companies.map((company) => (
        <CompanyCard
          key={company.name}
          name={company.name}
          gst={company.gst}
        />
      ))}
    </div>
  );
}