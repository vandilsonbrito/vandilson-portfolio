import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Vandilson Portfólio",
  description: "Portfólio de Vandilson Brito. Front-end Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {children}
      </body>
    </html>
  );
}


