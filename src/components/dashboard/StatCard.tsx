interface Props {
  title: string;
  value: string;
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-white rounded-2xl border p-5">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="text-2xl font-bold mt-2">
        {value}
      </h3>
    </div>
  );
}