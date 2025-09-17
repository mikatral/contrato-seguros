import Image from "next/image"
import Link from "next/link"
import content from "../../content.json" // ajusta o caminho conforme sua estrutura

export default function InstitutoIAEPage() {
    const instituto = content.instituto

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
            <nav className="w-full bg-blue-100 border-b border-blue-200">
                <div className="max-w-7xl mx-auto px-6 flex justify-start gap-8 py-3 text-sm font-medium ml-[10px]">
                    <Link href="/instituto-iae" className="hover:text-blue-700">Instituto IAE</Link>
                    <Link href="/sobre" className="hover:text-blue-700">Sobre nós</Link>
                    <Link href="http://localhost:3000/" className="hover:text-blue-700">Contrate Seguros</Link>
                    <Link href="/boleto" className="hover:text-blue-700">Boleto</Link>
                </div>
            </nav>

            {/* Conteúdo principal */}
            <main className="max-w-6xl mx-auto px-6 py-16">
                {/* Logo do Instituto */}
                <div className="flex justify-center mb-10">
                    <Image
                        src={instituto.logo}
                        alt="Logo Instituto IAE"
                        width={220}
                        height={100}
                        className="rounded-md  shadow-md bg-blue-200 p-6"
                    />
                </div>

                {/* Título */}
                <h1 className="text-3xl font-bold text-blue-800 mb-5 text-center">
                    {instituto.title}
                </h1>

                {/* Seções */}
                {instituto.sections.map((section, idx) => (
                    <div key={idx} className="mb-3">
                        <h2 className="text-2xl font-bold text-blue-700 mb-2">{section.heading}</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">{section.body}</p>
                    </div>
                ))}

                {/* Atividades */}
                <div className="mb-6 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Atividades exercidas:</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        {instituto.activities.map((item: string, idx: number) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Texto extra */}
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{instituto.extra}</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{instituto.investment}</p>

                {/* Contato */}
                <div className="bg-blue-100 border border-blue-300 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">{instituto.contactTitle}</h3>
                    <p className="text-gray-800">
                        São Paulo (Capital): <span className="font-bold">{instituto.phones.capital}</span>
                    </p>
                    <p className="text-gray-800">
                        Demais Localidades: <span className="font-bold">{instituto.phones.other}</span>
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full bg-black text-gray-200 py-12 mt-12">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Mapa do site */}
                    <div>
                        <h4 className="font-semibold text-white mb-2">Mapa do Site</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/instituto-iae" className="hover:text-blue-400">Instituto IAE</a></li>
                            <li><a href="/sobre" className="hover:text-blue-400">Sobre nós</a></li>
                            <li><a href="/contrate-seguros" className="hover:text-blue-400">Contrate Seguros</a></li>
                            <li><a href="/boleto" className="hover:text-blue-400">Boleto</a></li>
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
