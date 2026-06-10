export default function CompanyAddress() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">
        Address Information
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          name="addressLine1"
          placeholder="Address Line 1"
          required
          className="border rounded-xl px-4 py-3 w-full"
        />

        <input
          name="addressLine2"
          placeholder="Address Line 2"
          className="border rounded-xl px-4 py-3 w-full"
        />

        <input
          name="city"
          placeholder="City"
          required
          className="border rounded-xl px-4 py-3 w-full"
        />

        <select
          name="state"
          required
          className="border rounded-xl px-4 py-3 w-full"
        >
          <option value="">
            Select State
          </option>
          <option>Delhi</option>
          <option>Uttar Pradesh</option>
          <option>Maharashtra</option>
          <option>Gujarat</option>
        </select>


        <input
          name="pincode"
          type="number"
          placeholder="Pincode"
          required
          className="border rounded-xl px-4 py-3 w-full"
        />


        <select
          name="country"
          defaultValue="India"
          className="border rounded-xl px-4 py-3 w-full"
        >
          <option>
            India
          </option>
        </select>

      </div>
    </section>
  );
}