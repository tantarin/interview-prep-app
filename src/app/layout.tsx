import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Подготовка к собеседованиям | Таринская Татьяна",
  description: "Приложение для подготовки к техническим собеседованиям от Таринской Татьяны, Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white py-4">
          <div className="max-w-4xl mx-auto px-4 md:px-8 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold">Подготовка к собеседованиям</h1>
              <p className="text-sm text-gray-300">Таринская Татьяна, Software Developer</p>
            </div>
          </div>
        </header>
        <main className="min-h-screen p-4 md:p-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-4 mt-8">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <p>© 2023 Таринская Татьяна | Software Developer</p>
          </div>
        </footer>
      </body>
    </html>
  );
}