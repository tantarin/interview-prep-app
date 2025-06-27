import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Таринская Татьяна | Образование, карьера, проекты",
  description: "Персональный сайт Таринской Татьяны о карьере в IT, образовании, подготовке к собеседованиям и личных проектах",
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
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h1 className="text-xl font-bold">Таринская Татьяна</h1>
                <p className="text-sm text-gray-300">Образование, карьера и проекты в IT</p>
              </div>
              <nav>
                <ul className="flex space-x-6">
                  <li>
                    <Link href="/" className="hover:text-blue-300 transition-colors">
                      Главная
                    </Link>
                  </li>
                  <li>
                    <Link href="/algorithms" className="hover:text-blue-300 transition-colors">
                      Алгоритмы
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses" className="hover:text-blue-300 transition-colors">
                      Курсы
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="min-h-screen p-4 md:p-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-4 mt-8">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© 2023 Таринская Татьяна | Software Developer</p>
              <div className="mt-4 md:mt-0 flex items-center">
                <span className="mr-2">Связаться со мной:</span>
                <a 
                  href="https://t.me/tania01011" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-100 transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-.237 0-.47-.01-.7-.03-1.274-.11-2.37-.53-3.263-1.252-1.72-1.39-2.437-3.27-2.735-5.55-.05-.384-.08-.77-.08-1.158 0-.477.054-.954.162-1.42.466-2.02 1.498-3.723 3.307-4.876C9.74 4.15 10.812 3.812 12 3.812c2.493 0 4.57 1.05 6.013 3.055 1.07 1.495 1.7 3.215 1.7 5.083 0 2.67-1.3 4.95-3.302 6.447-1.86 1.377-3.94 1.972-6.27 1.62zm5.553-9.623c-.022-.125-.04-.25-.063-.375-.07-.41-.154-.82-.264-1.224-.19-.69-.48-1.36-.86-1.96-.5-.78-1.16-1.39-1.98-1.8-.6-.3-1.22-.48-1.88-.55-.37-.04-.73-.04-1.1 0-.64.07-1.26.25-1.86.54-.82.41-1.49 1.02-1.99 1.8-.38.6-.67 1.27-.86 1.96-.11.4-.2.81-.26 1.22-.03.13-.05.25-.07.38-.05.4-.05.81 0 1.21.02.12.04.25.07.37.06.41.15.82.26 1.22.19.69.48 1.36.86 1.96.5.78 1.17 1.39 1.99 1.8.6.29 1.22.47 1.86.54.37.04.73.04 1.1 0 .66-.07 1.28-.25 1.88-.54.82-.41 1.48-1.02 1.98-1.8.38-.6.67-1.27.86-1.96.11-.4.19-.81.26-1.22.03-.12.05-.25.07-.37.05-.4.05-.81 0-1.21zm-3.654 3.585c-.208.17-.425.3-.674.385-.15.05-.3.08-.46.08-.13 0-.26-.02-.38-.06-.16-.06-.3-.15-.42-.27-.12-.12-.21-.26-.27-.42-.06-.16-.08-.33-.06-.5.02-.17.08-.33.16-.47.08-.14.19-.26.32-.35.13-.09.28-.15.43-.18.15-.03.31-.02.46.03.15.05.29.13.41.24.12.11.21.24.28.39.07.15.1.31.1.47 0 .21-.06.41-.18.58-.12.17-.27.31-.45.41zm-1.896-7.196c.55 0 .85.23.85.64 0 .14-.05.27-.15.39-.1.12-.24.23-.42.33-.18.1-.39.19-.63.27-.24.08-.5.16-.77.24-.27.08-.53.17-.77.27-.25.1-.46.22-.64.37-.18.15-.32.32-.42.53-.1.21-.15.46-.15.75v.24h3.27v-.89h-1.93c.03-.08.08-.15.13-.21.05-.06.12-.12.2-.17.08-.05.18-.1.29-.15.11-.05.24-.1.39-.15.33-.11.62-.22.87-.33.25-.11.46-.24.63-.39.17-.15.3-.32.39-.53.09-.21.13-.46.13-.76 0-.29-.06-.55-.17-.77-.11-.22-.26-.4-.45-.55-.19-.15-.41-.26-.67-.33-.26-.07-.53-.11-.82-.11-.31 0-.6.04-.87.13-.27.09-.5.21-.7.38-.2.17-.36.37-.47.61-.11.24-.17.51-.17.82h1.34c0-.18.03-.34.08-.47.05-.13.12-.24.21-.32.09-.08.19-.14.31-.18.12-.04.24-.06.37-.06z"></path>
                  </svg>
                  @tania01011
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}