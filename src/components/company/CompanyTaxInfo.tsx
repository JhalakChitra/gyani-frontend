export default function CompanyTaxInfo() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">
        Tax Information
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          placeholder="GST Number"
          className="border rounded-xl px-4 py-3"
        />

        <input
          placeholder="PAN Number"
          className="border rounded-xl px-4 py-3"
        />

        <input
          placeholder="TAN Number"
          className="border rounded-xl px-4 py-3"
        />

        <input
          placeholder="CIN Number"
          className="border rounded-xl px-4 py-3"
        />
      </div>
    </section>
  );
}