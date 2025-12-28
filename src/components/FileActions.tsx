import { Download, Upload } from "lucide-react";

type Props = {
  value: string;
  setValue: (v: string) => void;
};

export default function FileActions({ value, setValue }: Props) {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setValue(reader.result as string);
    reader.readAsText(file);
  };

  const handleDownload = () => {
    const blob = new Blob([value], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "markdown.md";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-3 mb-3  p-3 rounded items-center justify-center">
      <label className="flex items-center gap-2 cursor-pointer bg-linear-to-r from-gray-800 to-gray-500 px-2 py-1 rounded hover:bg-gray-700">
        <Upload size={18} />
        <input type="file" accept=".md" hidden onChange={handleUpload} />
        Upload
      </label>

      <button
        onClick={handleDownload}
        className="flex items-center gap-2 cursor-pointer bg-linear-to-r from-gray-600 to-gray-300 px-2 py-1 rounded hover:bg-gray-700"
      >
        <Download size={18} />
        Download
      </button>
    </div>
  );
}
