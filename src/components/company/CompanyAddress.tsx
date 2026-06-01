export default function CompanyAddress() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">
        Address Information
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          placeholder="Address Line 1"
          className="border rounded-xl px-4 py-3"
        />

        <input
          placeholder="Address Line 2"
          className="border rounded-xl px-4 py-3"
        />

        <input
          placeholder="City"
          className="border rounded-xl px-4 py-3"
        />

        <input
          placeholder="State"
          className="border rounded-xl px-4 py-3"
        />

        <input
          placeholder="Pincode"
          className="border rounded-xl px-4 py-3"
        />

        <input
          placeholder="Country"
          defaultValue="India"
          className="border rounded-xl px-4 py-3"
        />
      </div>
    </section>
  );
}