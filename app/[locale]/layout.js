import { Montserrat } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import {getMessages} from 'next-intl/server';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Vandilson Portfólio",
  description: "Portfólio de Vandilson Brito. Front-end Developer.",
};

export default async function RootLayout({ children, params: {locale} }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


