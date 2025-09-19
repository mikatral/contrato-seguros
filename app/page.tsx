import Image from "next/image";
import content from "../content.json";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"




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
            width={150}
            height={40}
          />
          {/* Logo Text */}
          <span className="text-xl font-bold">{content.header.logoText}</span>
        </div>

        {/* Botão à direita */}
        <nav>
          <a
            href={content.header.menu.url}
            className="bg-[#15f5ba] text-white px-4 py-2 rounded-lg font-bold hover:bg-red-800 transition"
          >
            {content.header.menu.label}
          </a>
        </nav>
      </header>

      {/* Navbar abaixo do header */}
      <nav className="w-full bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex justify-center md:justify-start gap-8 py-3 text-sm font-medium ml-[10px]">
          <a href="http://localhost:3000" className="hover:text-blue-600">Home</a>
          <a href="/instituto-iae" className="hover:text-blue-600">Instituto IAE</a>
          <a href="/sobre" className="hover:text-blue-600">Sobre nós</a>
        </div>
      </nav>


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
              {/*<button className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition text-sm w-fit">
                {content.hero.cta}
              </button>*/}
            </div>
          </div>

          {/* Caixa com carousel à direita */}
          <div className="bg-white p-4 rounded-2xl shadow-lg flex items-center justify-center mt-6 md:mt-0 w-full md:w-[480px]">
            <Carousel className="w-full max-w-md" opts={{ loop: true }}>
              <CarouselContent>
                {content.hero.carousel.map((img, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={img}
                      alt={`Slide ${index + 1}`}
                      width={600}
                      height={300}
                      className="h-full w-auto object-contain"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

            </Carousel>
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
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition flex flex-col" // 👈 flex vertical
                >
                  <Image
                    className="rounded-t-lg w-full h-[200px] object-cover"
                    src={service.image}
                    alt={service.name}
                    width={400}
                    height={200}
                  />

                  {/* Conteúdo flexível */}
                  <div className="p-5 flex flex-col flex-1">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {service.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 flex-1">
                      {service.description}
                    </p>

                    {/* Modal individual para cada card */}
                    {/* Área dos botões */}
                    <div className="flex gap-3 mt-4">
                      {/* Botão Saiba Mais com modal */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none">
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
                          </Button>
                        </DialogTrigger>

                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{service.name}</DialogTitle>
                            <DialogDescription>{service.description}</DialogDescription>
                          </DialogHeader>

                          {/* Intro */}
                          {service.details?.intro && (
                            <p className="text-gray-700 mb-4">{service.details.intro}</p>
                          )}

                          {/* Body */}
                          {service.details?.body && (
                            <p className="text-gray-700 mb-4">{service.details.body}</p>
                          )}

                          {/* Highlights */}
                          {service.details?.highlights && (
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                              {service.details.highlights.map((item: string, idx: number) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </DialogContent>
                      </Dialog>

                      {/* Botão Contratar */}
                      <a
                        href="https://wa.me/5511932371093"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none"
                      >
                        Contratar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Banner de Destaque */}
        <section className="w-full bg-white py-12">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
            <Image
              src={content.banner.logo}
              alt="Logo Contrate"
              width={180}
              height={80}
            />

            {/* Texto principal */}
            <div className="flex-1">
              <h3 className="text-orange-600 font-bold text-lg uppercase mb-2">
                {content.banner.title}
              </h3>
              <p className="text-2xl font-semibold text-gray-900 leading-snug">
                {content.banner.highlight}
              </p>
            </div>

            {/* Lista de features */}
            <div className="flex-1">
              <ul className="space-y-3 text-gray-700">
                {content.banner.features.map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Botão */}
            <div>
              <a
                href={content.banner.button.link}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                {content.banner.button.text}
              </a>
            </div>
          </div>
        </section>
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
      </main>
    </>
  );
}
