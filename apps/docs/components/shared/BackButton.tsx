import React from "react";

const BackButton = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
    >
      Back
    </button>
  );
};

export default BackButton;
