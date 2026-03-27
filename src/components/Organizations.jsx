import { Users } from "lucide-react";
import { organizations } from "../data/organizations";

const Organizations = () => {
  const renderDescription = (description) => {
    if (Array.isArray(description) && description.length > 0) {
      return (
        <ul className="mt-2 list-disc list-inside text-gray-400 space-y-1">
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <section id="organizations" className="py-20">
      <h2 className="font-mono text-3xl font-bold text-white mb-12">
        <span className="text-cyan-400">~/</span>orgs
        <span className="text-green-400">$</span> show-activity
      </h2>
      <div className="space-y-8">
        {organizations.map((org, index) => (
          <div
            key={index}
            className="bg-[#161B22]/70 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
          >
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Users className="mr-3 text-yellow-400" size={20} />
                  {org.name}
                </h3>
                <p className="text-cyan-400 font-semibold">{org.role}</p>
              </div>
              <p className="text-sm text-gray-500 shrink-0 font-mono">
                {org.period}
              </p>
            </div>
            {renderDescription(org.description)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organizations;
