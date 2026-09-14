const SectionHeading = ({ path, command, className = "" }) => (
  <div className={`mb-10 ${className}`}>
    <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">
      <span className="text-cyan-400">~/</span>
      {path}
    </h2>
    <p className="mt-2 font-mono text-sm text-gray-500">
      <span className="text-green-400">$</span> {command}
    </p>
  </div>
);

export default SectionHeading;
