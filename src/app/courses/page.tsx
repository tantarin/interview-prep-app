"use client";

import Link from "next/link";

export default function Courses() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/" className="inline-block mb-6 text-blue-600 hover:underline">
        ← Вернуться на главную
      </Link>
      
      <h1 className="text-3xl font-bold mb-8 text-center">
        Образовательные курсы
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/courses/masters" className="block">
          <div className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-xl font-bold px-4 text-center">Курс по выбору магистратуры в сфере IT</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Выбор IT-магистратуры</h2>
              <p className="text-gray-600 mb-4">
                Полное руководство по поступлению в магистратуру по IT-направлениям. 
                Выбор программы, подготовка документов, стратегия поступления.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-blue-600">19 900 ₽</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Доступен</span>
              </div>
            </div>
          </div>
        </Link>
        
        <div className="border border-gray-300 rounded-lg overflow-hidden opacity-70">
          <div className="h-48 bg-gradient-to-r from-gray-500 to-gray-600 flex items-center justify-center">
            <span className="text-white text-xl font-bold px-4 text-center">Подготовка к техническому собеседованию</span>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Техническое собеседование</h2>
            <p className="text-gray-600 mb-4">
              Интенсивный курс подготовки к техническим собеседованиям в ведущие IT-компании.
              Алгоритмы, системный дизайн, поведенческие вопросы.
            </p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-gray-600">24 900 ₽</span>
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">Скоро</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 