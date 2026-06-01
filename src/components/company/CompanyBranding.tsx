export default function CompanyBranding() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">
        Company Branding
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="file"
          className="border rounded-xl px-4 py-3"
        />

        <input
          type="file"
          className="border rounded-xl px-4 py-3"
        />
      </div>
    </section>
  );
}