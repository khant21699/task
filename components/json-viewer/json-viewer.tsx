"use client";

import { TransformedData } from "@/types";
import ReactJson from "@microlink/react-json-view";
interface JsonViewerProps {
  data: TransformedData;
}

const JsonViewer = ({ data }: JsonViewerProps) => {
  return <ReactJson src={data} theme="monokai" />;
};

export default JsonViewer;
