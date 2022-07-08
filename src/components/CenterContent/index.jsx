import { useState } from "react";

function CenterContent({ children }) {
  return (
    <div className="h-screen w-screen bg-slate-900 flex justify-center items-center overflow-hidden">
      {children}
    </div>
  );
}

export default CenterContent;
