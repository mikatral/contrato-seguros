import Image from "next/image";
import content from "../../content.json";
import SiteLayout from "../../components/ui/SiteLayout";

export default function InstitutoIAEPage() {
  const instituto = content.instituto;

  return (
    <SiteLayout>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Logo do Instituto */}
        <div className="flex justify-center mb-10">
          <Image
            src={instituto.logo}
            alt="Logo Instituto IAE"
            width={220}
            height={100}
            className="rounded-md shadow-md bg-blue-200 p-6"
          />
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold text-blue-800 mb-5 text-center">
          {instituto.title}
        </h1>

        {/* Seções */}
        {instituto.sections.map((section, idx) => (
          <div key={idx} className="mb-3">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              {section.heading}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {section.body}
            </p>
          </div>
        ))}

        {/* Atividades */}
        <div className="mb-6 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">
            Atividades exercidas:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {instituto.activities.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Texto extra */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {instituto.extra}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {instituto.investment}
        </p>

        {/* Contato */}
        <div className="bg-blue-100 border border-blue-300 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            {instituto.contactTitle}
          </h3>
          <p className="text-gray-800">
            São Paulo (Capital):{" "}
            <span className="font-bold">{instituto.phones.capital}</span>
          </p>
          <p className="text-gray-800">
            Demais Localidades:{" "}
            <span className="font-bold">{instituto.phones.other}</span>
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
