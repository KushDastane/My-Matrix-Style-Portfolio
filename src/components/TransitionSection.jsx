import React from "react";

const TransitionSection = ({
  nextLabel = "Projects",
  command = '"Synchronizing with Git..."',
  status = "Executing Build Process...",
}) => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4 text-green-800 font-mono text-sm sm:text-base">
      <div className="max-w-4xl mx-auto space-y-3">
        <p>
          &gt; loading_next:{" "}
          <span className="text-green-600">{nextLabel}...</span>
        </p>
        <p>
          &gt; {nextLabel.toLowerCase()}@portfolio:~${" "}
          <span className="italic">{command}</span>
        </p>
        <p>
          &gt; status: <span className="text-green-600">{status}</span>
        </p>
      </div>
    </section>
  );
};

export default TransitionSection;
