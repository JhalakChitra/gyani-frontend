export default function CompanyFinancialInfo() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">
        Financial Settings
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="date"
          className="border rounded-xl px-4 py-3"
        />

        <input
          type="date"
          className="border rounded-xl px-4 py-3"
        />

        <select className="border rounded-xl px-4 py-3">
          <option>INR</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <select className="border rounded-xl px-4 py-3">
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
        </select>
      </div>
    </section>
  );
}