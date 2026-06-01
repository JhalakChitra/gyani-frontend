import CompanyBasicInfo from "./CompanyBasicInfo";
import CompanyAddress from "./CompanyAddress";
import CompanyTaxInfo from "./CompanyTaxInfo";
import CompanyFinancialInfo from "./CompanyFinancialInfo";
import CompanyBranding from "./CompanyBranding";

export default function CompanyForm() {
  return (
    <form className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Create Company
        </h1>

        <p className="text-gray-500">
          Setup your business workspace.
        </p>
      </div>

      <CompanyBasicInfo />
      <CompanyAddress />
      <CompanyTaxInfo />
      <CompanyFinancialInfo />
      <CompanyBranding />

      <button
        className="
        bg-violet-600
        text-white
        px-6
        py-3
        rounded-xl
        "
      >
        Create Company
      </button>
    </form>
  );
}