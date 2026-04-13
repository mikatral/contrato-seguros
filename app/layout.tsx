import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contrato Corretora de Seguros",
  description:
    "Soluções completas em Seguro de Vida, Odontológico, Telemedicina e Benefícios Empresariais. Proteção, tranquilidade e atendimento humanizado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W98L5DFVCY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W98L5DFVCY');
          `}
        </Script>

        {/* Widget Tallos carregando em TODAS as páginas */}
        <Script
          src="https://api.tallos.com.br/megasac-api/widget/657374b28687c8a279701991-657aabea83b951dd9403fa05-1.min.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}