import React from "react";
import { transformUserData } from "../../lib/util/transform-user-data";
import JsonViewer from "@/components/json-viewer/json-viewer";

const DataFromApi = async () => {
  const res = await fetch("https://dummyjson.com/users?limit=100");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const transformedData = transformUserData(data.users);

  return (
    <div>
      <JsonViewer data={transformedData} />
    </div>
  );
};

export default DataFromApi;
