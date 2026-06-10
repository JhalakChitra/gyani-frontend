export default function CompanyFinancialInfo() {
  return (
    <section className="space-y-4">

      <h2 className="text-xl font-semibold">
        Financial Settings
      </h2>


      <div className="grid md:grid-cols-2 gap-4">


        <div className="space-y-2">
          <label className="text-sm font-medium">
            Financial Year Start
          </label>

          <input
            name="financialYearStart"
            type="date"
            required
            className="border rounded-xl px-4 py-3 w-full"
          />
        </div>



        <div className="space-y-2">
          <label className="text-sm font-medium">
            Books Beginning From
          </label>

          <input
            name="booksBeginningFrom"
            type="date"
            required
            className="border rounded-xl px-4 py-3 w-full"
          />

        </div>



        <select
          name="currency"
          defaultValue="INR"
          className="border rounded-xl px-4 py-3 w-full"
        >
          <option value="INR">
            INR - Indian Rupee
          </option>

          <option value="USD">
            USD - Dollar
          </option>

          <option value="EUR">
            EUR - Euro
          </option>

        </select>



        <select
          name="country"
          defaultValue="India"
          className="border rounded-xl px-4 py-3 w-full"
        >
          <option>
            India
          </option>

          <option>
            USA
          </option>

          <option>
            UK
          </option>

        </select>


      </div>

    </section>
  );
}