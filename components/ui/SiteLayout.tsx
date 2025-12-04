"use client";

import Image from "next/image";
import Link from "next/link";
import content from "../../content.json";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-2 shadow-md bg-white">
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
        <div className="max-w-10xl mx-auto px-6 py-3 flex justify-center md:justify-start">
          <NavigationMenu>
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                  <Link href="/instituto-iae">Instituto IAE</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                  <Link href="/sobre">Sobre nós</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Conteúdo da página */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="w-full bg-black text-gray-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Mapa do site */}
          <div>
            <h4 className="font-semibold text-white mb-2">Mapa do Site</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/instituto-iae" className="hover:text-blue-400">
                  Instituto IAE
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-blue-400">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="https://ihs4.azurewebsites.net/Login"
                  className="hover:text-blue-400"
                >
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
  );
}
