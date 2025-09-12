import Image from "next/image";
import content from "../content.json";

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-2 shadow-md">
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
          <Image
            src={content.header.logoIcon}
            alt="Logo"
            width={40}
            height={40}
          />
          {/* Logo Text */}
          <span className="text-xl font-bold">{content.header.logoText}</span>
        </div>

        {/* Menu */}
        <nav className="flex gap-6">
          {content.header.menu.map((item: string, index: number) => (
            <a
              key={index}
              href="#"
              className="text-gray-700 hover:text-blue-600"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main>
        {/* Hero Banner */}
        <section className="w-full min-h-[400px] bg-blue-900 flex flex-col md:flex-row items-center justify-between px-8 py-8 font-Roboto">
          {/* Caixa de texto à esquerda */}
          <div className="w-full md:w-[350px] p-3 h-full text-white flex flex-col">
            <h1 className="text-2xl font-bold">{content.hero.title}</h1>

            <div className="flex flex-col mt-4 h-full">
              <p className="text-sm mb-4">{content.hero.subtitle}</p>
              {content.hero.text && (
                <p className="text-2xl font-extrabold mb-4">
                  {content.hero.text}
                </p>
              )}
              <button className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition text-sm w-fit">
                {content.hero.cta}
              </button>
            </div>
          </div>

          {/* Caixa com imagem à direita */}
          <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-center mt-6 md:mt-0">
            <Image
              src="/img/banner-capa.jpg"
              alt="Banner Contrato Seguros"
              width={450}
              height={300}
              className="object-contain"
            />
          </div>
        </section>

        {/* Seção de Serviços - Cards */}
        <section className="w-full py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            {/* Título */}
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
              {content.services.title}
            </h2>

            {/* Grid de Cards */}
            <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
              {content.services.items.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <Image
                    className="rounded-t-lg"
                    src="/img/logo-pequena.png"
                    alt={service.name}
                    width={400}
                    height={200}
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {service.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700">
                      {service.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Saiba Mais
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
