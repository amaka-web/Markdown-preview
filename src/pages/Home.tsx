import { useEffect, useState } from "react";
import { parseMarkdown } from "../utils/markdownParser";
import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import FileActions from "../components/FileActions";
import { saveMarkdown, loadMarkdown } from "../utils/api";
import { Button } from "../components/ui/button";

export default function Home() {
  const [value, setValue] = useState(
    () => localStorage.getItem("markdown") || ""
  );
  const [html, setHtml] = useState("");

  useEffect(() => {
    parseMarkdown(value).then(setHtml);
    localStorage.setItem("markdown", value);
  }, [value]);

  return (
    <main className="grid md:grid-cols-2 bg-linear-to-r from-gray-600 to-green-500 px-4 py-2 bg-cover hover:from-green-700 hover:to-gray-500 gap-4 p-4">
        <h1 className="mb-4 text-4xl font-bold text-foreground text-center md:col-span-2">
          Markdown <span className="text-primary">Preview</span>
        </h1>
      <section
        aria-label="Markdown Editor"
        className="border rounded-lg text-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
      >
        <CodeMirror
          value={value}
          height="70vh"
          extensions={[markdown()]}
          onChange={setValue}
        />
      </section>

      <section
        aria-label="Markdown Preview"
        className=" max-w-none border p-4 rounded text-white bg-black dark:bg-black/80 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-auto h-[70vh]"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <FileActions value={value} setValue={setValue} />

      <div className="flex gap-3 mb-4 items-center justify-center">
        <Button
          onClick={() => saveMarkdown(value)}
          className="cursor-pointer bg-linear-to-r from-green-600 to-green-400 px-4 py-2 rounded hover:from-green-700 hover:to-green-500"
        >
          Save to API
        </Button>

        <Button
          onClick={async () => {
            const data = await loadMarkdown();
            setValue(data);
          }}
          className="cursor-pointer bg-linear-to-l from-green-600 to-green-400 px-4 py-2 rounded hover:from-green-700 hover:to-green-500"
        >
          Load from API
        </Button>
      </div>
    </main>
  );
}
