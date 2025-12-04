import Image from "next/image";
import content from "../../content.json";
import SiteLayout from "../../components/ui/SiteLayout";

export default function SobrePage() {
  const sobre = content.sobre;

  return (
    <SiteLayout>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Logo da página */}
        {sobre.logo && (
          <div className="flex justify-center mb-10">
            <Image
              src={sobre.logo}
              alt="Logo Sobre nós"
              width={300}
              height={300}
              className="rounded-md shadow-md"
            />
          </div>
        )}

        {/* Título */}
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          {sobre.title}
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
          {sobre.intro}
        </p>

        {/* História */}
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {sobre.history}
        </p>

        {/* Cultura */}
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          {sobre.culture}
        </p>

        {/* Destaques */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Nossos Destaques
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {sobre.highlights.map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </SiteLayout>
  );
}
