export default function CompanyTaxInfo() {
  return (
    <section className="space-y-4">

      <h2 className="text-xl font-semibold">
        Tax Information
      </h2>


      <div className="grid md:grid-cols-2 gap-4">


        <input
          name="gstNumber"
          placeholder="GST Number"
          maxLength={15}
          className="border rounded-xl px-4 py-3 w-full uppercase"
        />


        <input
          name="panNumber"
          placeholder="PAN Number"
          maxLength={10}
          className="border rounded-xl px-4 py-3 w-full uppercase"
        />


        <input
          name="tanNumber"
          placeholder="TAN Number"
          maxLength={10}
          className="border rounded-xl px-4 py-3 w-full uppercase"
        />


        <input
          name="cinNumber"
          placeholder="CIN Number (Pvt Ltd/Ltd)"
          maxLength={21}
          className="border rounded-xl px-4 py-3 w-full uppercase"
        />


      </div>

    </section>
  );
}