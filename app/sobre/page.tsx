import Image from "next/image"
import Link from "next/link"
import content from "../../content.json"

export default function SobrePage() {
    const sobre = content.sobre

    return (
        <>
            {/* Header */}
            <header className="flex items-center justify-between px-8 py-2 shadow-md">
                <div className="flex items-center gap-3">
                    <Image
                        src={content.header.logoIcon}
                        alt="Logo"
                        width={150}
                        height={40}
                    />
                    <span className="text-xl font-bold">{content.header.logoText}</span>
                </div>
                <nav>
                    <a
                        href={content.header.menu.url}
                        className="bg-[#15f5ba] text-white px-4 py-2 rounded-lg font-bold hover:bg-red-800 transition"
                    >
                        {content.header.menu.label}
                    </a>
                </nav>
            </header>

            {/* Navbar */}
            <nav className="w-full bg-gray-100 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 flex justify-center md:justify-start gap-8 py-3 text-sm font-medium ml-[10px]">
                    <a href="http://localhost:3000/" className="hover:text-blue-600">Home</a>
                    <a href="/instituto-iae" className="hover:text-blue-600">Instituto IAE</a>
                    <a href="/sobre" className="hover:text-blue-600">Sobre nós</a>
                </div>
            </nav>

            {/* Conteúdo principal */}
            <main className="max-w-6xl mx-auto px-6 py-16">
                {/* Logo da página */}
                {sobre.logo && (
                    <div className="flex justify-center mb-10">
                        <Image
                            src={sobre.logo}
                            alt="Logo Sobre nós"
                            width={300}
                            height={300}
                            className="rounded-md shadow-md "
                        />
                    </div>
                )}

                {/* Título */}
                <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">{sobre.title}</h1>

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
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Nossos Destaques</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        {sobre.highlights.map((item: string, idx: number) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full bg-black text-gray-200 py-12 mt-12">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">



                    {/* Mapa do site */}
                    <div>
                        <h4 className="font-semibold text-white mb-2">Mapa do Site</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <a href="/instituto-iae" className="hover:text-blue-400">
                                    Instituto IAE
                                </a>
                            </li>
                            <li>
                                <a href="/sobre" className="hover:text-blue-400">
                                    Sobre nós
                                </a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/" className="hover:text-blue-400">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="https://ihs4.azurewebsites.net/Login" className="hover:text-blue-400">
                                    Boleto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <div className="flex flex-col items-center md:items-start">
                        <Image
                            src={content.footer.logo}
                            alt="Logo Contrato Seguros"
                            width={190}
                            height={80}
                            className="mb-4"
                        />
                        <p className="text-sm text-gray-400 text-center md:text-left whitespace-pre-line">
                            {content.footer.text}
                        </p>
                    </div>

                    {/* Endereço */}
                    <div>
                        <h4 className="font-semibold text-white mb-2">Endereço</h4>
                        <p className="text-sm text-gray-400 whitespace-pre-line">
                            {content.footer.address}
                        </p>
                    </div>

                    {/* Contatos */}
                    <div>
                        <h4 className="font-semibold text-white mb-2">Contato</h4>
                        <p className="text-sm text-gray-400">
                            São Paulo (Capital):{" "}
                            <span className="text-blue-400">{content.footer.phones.capital}</span>
                        </p>
                        <p className="text-sm text-gray-400">
                            Demais localidades:{" "}
                            <span className="text-blue-400">{content.footer.phones.other}</span>
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                            <span className="text-white font-medium">E-mail:</span>{" "}
                            <a
                                href={`mailto:${content.footer.email}`}
                                className="text-blue-400 hover:underline"
                            >
                                {content.footer.email}
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
