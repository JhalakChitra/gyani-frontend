export default function CompanyBasicInfo() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">
        Company Information
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          placeholder="Company Name"
          className="border rounded-xl px-4 py-3"
        />

        <input
          placeholder="Legal Business Name"
          className="border rounded-xl px-4 py-3"
        />

        <select className="border rounded-xl px-4 py-3">
          <option>Business Type</option>
          <option>Proprietorship</option>
          <option>Partnership</option>
          <option>LLP</option>
          <option>Private Limited</option>
        </select>

        <input
          placeholder="Mobile Number"
          className="border rounded-xl px-4 py-3"
        />

        <input
          placeholder="Email Address"
          className="border rounded-xl px-4 py-3"
        />

        <input
          placeholder="Website"
          className="border rounded-xl px-4 py-3"
        />
      </div>
    </section>
  );
}