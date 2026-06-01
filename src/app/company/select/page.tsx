import Link from "next/link";
import CompanySelector from "@/components/company/CompanySelector";

export default function CompanySelectPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl border shadow-sm p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Select Company
          </h1>

          <p className="text-gray-500 mt-2">
            Choose a company to continue.
          </p>
        </div>

        <CompanySelector />

        <Link
          href="/company/create"
          className="
            mt-6
            block
            w-full
            text-center
            bg-violet-600
            hover:bg-violet-700
            text-white
            py-3
            rounded-xl
            transition
          "
        >
          + Create New Company
        </Link>
      </div>
    </div>
  );
}