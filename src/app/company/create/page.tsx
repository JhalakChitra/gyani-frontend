import CompanyForm from "@/components/company/CompanyForm";

export default function CreateCompanyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border p-8 lg:p-10">
        <CompanyForm />
      </div>
    </div>
  );
}