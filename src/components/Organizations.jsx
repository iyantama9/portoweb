import { Users } from "lucide-react";
import { organizations } from "../data/organizations";
import SectionHeading from "./SectionHeading";

const Organizations = () => {
  const renderDescription = (description) => {
    if (Array.isArray(description) && description.length > 0) {
      return (
        <ul className="mt-4 ml-5 list-disc list-outside text-gray-400 space-y-2 leading-6">
          {description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <section id="organizations" className="py-16 sm:py-20 max-w-6xl mx-auto">
      <SectionHeading path="orgs" command="show activity" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {organizations.map((org, index) => (
          <div
            key={index}
            className="bg-[#161B22]/70 backdrop-blur-sm border border-gray-800 rounded-lg p-5 sm:p-6 h-full"
          >
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-start">
                  <Users className="mr-3 mt-0.5 text-yellow-400 shrink-0" size={20} />
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
