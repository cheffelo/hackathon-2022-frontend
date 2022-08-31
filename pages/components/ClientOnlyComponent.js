import dynamic from "next/dynamic";
import React from "react";

const ClientOnlyComponent = ({ children }) => children;

export default dynamic(() => Promise.resolve(ClientOnlyComponent), {
  ssr: false,
});
