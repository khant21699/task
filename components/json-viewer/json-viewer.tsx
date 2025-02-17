"use client";

import { TransformedData } from "@/types";
import dynamic from "next/dynamic";

const ReactJson = dynamic(() => import("@microlink/react-json-view"), {
  ssr: false,
});

interface JsonViewerProps {
  data: TransformedData;
}

const JsonViewer = ({ data }: JsonViewerProps) => {
  return <ReactJson src={data} theme="monokai" />;
};

export default JsonViewer;
