export default function CompanyBranding() {
  return (
    <section className="space-y-4">

      <h2 className="text-xl font-semibold">
        Company Branding
      </h2>


      <div className="grid md:grid-cols-2 gap-4">

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Company Logo
          </label>

          <input
            name="logo"
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="border rounded-xl px-4 py-3 w-full"
          />
        </div>



        <div className="space-y-2">

          <label className="text-sm font-medium">
            Signature / Stamp
          </label>

          <input
            name="signature"
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="border rounded-xl px-4 py-3 w-full"
          />

        </div>

      </div>

    </section>
  );
}