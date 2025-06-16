export function JsonViewer({ data }: { data: any }) { // Provide correct type for your JSON data here
  return (
    <div className="json-viewer">
      <h1>Write your code here</h1>
      <pre>{JSON.stringify(data, null, "\t")}</pre>
    </div>
  );
}