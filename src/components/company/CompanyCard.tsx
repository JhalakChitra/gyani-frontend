interface Props {
  name: string;
  gst?: string;
}

export default function CompanyCard({
  name,
  gst,
}: Props) {
  return (
    <div className="border rounded-2xl p-5 hover:shadow-lg cursor-pointer">
      <h3 className="font-semibold text-lg">
        {name}
      </h3>

      <p className="text-gray-500 text-sm">
        {gst}
      </p>
    </div>
  );
}