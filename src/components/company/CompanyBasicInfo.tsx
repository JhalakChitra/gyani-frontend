export default function CompanyBasicInfo() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">
        Company Information
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          name="companyName"
          placeholder="Company Name"
          required
          className="border rounded-xl px-4 py-3 w-full"
        />

        <input
          name="legalBusinessName"
          placeholder="Legal Business Name"
          className="border rounded-xl px-4 py-3 w-full"
        />


        <select
          name="businessType"
          required
          className="border rounded-xl px-4 py-3 w-full"
        >
          <option value="">
            Select Business Type
          </option>

          <option value="proprietorship">
            Proprietorship
          </option>

          <option value="partnership">
            Partnership
          </option>

          <option value="llp">
            LLP
          </option>

          <option value="private_limited">
            Private Limited
          </option>

          <option value="public_limited">
            Public Limited
          </option>

        </select>


        <input
          name="mobile"
          type="tel"
          placeholder="Mobile Number"
          required
          className="border rounded-xl px-4 py-3 w-full"
        />


        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
          className="border rounded-xl px-4 py-3 w-full"
        />


        <input
          name="website"
          type="url"
          placeholder="Website"
          className="border rounded-xl px-4 py-3 w-full"
        />

      </div>
    </section>
  );
}