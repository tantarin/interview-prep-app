"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-10 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Обо мне</h2>
        <p className="mb-4">
          Привет! Меня зовут Таринская Татьяна, я Java-разработчик с опытом работы в IT.
          Этот сайт — мое пространство для обмена знаниями и опытом в сфере образования, карьеры и разработки.
        </p>
        <p>
          Здесь вы найдете материалы по подготовке к техническим собеседованиям, 
          информацию о поступлении в магистратуру, а также мои проекты и заметки о карьере в IT.
        </p>
      </div>
      
      <h1 className="text-3xl font-bold mb-8 text-center">
        Образование, карьера и проекты в IT
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/algorithms" className="block">
          <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Алгоритмы и структуры данных</h2>
            <p className="text-gray-600">
              Изучите основные алгоритмы и структуры данных, часто встречающиеся на технических собеседованиях.
            </p>
          </div>
        </Link>
        
        <Link href="/courses" className="block">
          <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Образовательные курсы</h2>
            <p className="text-gray-600">
              Курсы для подготовки к поступлению в магистратуру и развития карьеры в IT.
            </p>
          </div>
        </Link>
        
        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Мой опыт в IT</h2>
          <p className="text-gray-600">
            Карьерный путь, проекты и рекомендации для начинающих разработчиков.
          </p>
          <span className="inline-block mt-2 text-sm text-blue-600">Скоро будет доступен...</span>
        </div>
        
        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Полезные ресурсы</h2>
          <p className="text-gray-600">
            Подборка книг, курсов и инструментов для развития в IT.
          </p>
          <span className="inline-block mt-2 text-sm text-blue-600">Скоро будет доступен...</span>
        </div>
        
        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Блог</h2>
          <p className="text-gray-600">
            Заметки о технологиях, образовании и карьере в IT.
          </p>
          <span className="inline-block mt-2 text-sm text-blue-600">Скоро будет доступен...</span>
        </div>
        
        <a href="https://t.me/tania01011" target="_blank" rel="noopener noreferrer" className="block">
          <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2 flex items-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-.237 0-.47-.01-.7-.03-1.274-.11-2.37-.53-3.263-1.252-1.72-1.39-2.437-3.27-2.735-5.55-.05-.384-.08-.77-.08-1.158 0-.477.054-.954.162-1.42.466-2.02 1.498-3.723 3.307-4.876C9.74 4.15 10.812 3.812 12 3.812c2.493 0 4.57 1.05 6.013 3.055 1.07 1.495 1.7 3.215 1.7 5.083 0 2.67-1.3 4.95-3.302 6.447-1.86 1.377-3.94 1.972-6.27 1.62z"></path>
              </svg>
              Связаться со мной
            </h2>
            <p className="text-gray-600">
              Задать вопрос или обсудить сотрудничество в Telegram: @tania01011
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}