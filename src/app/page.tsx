"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-10 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">О проекте</h2>
        <p className="mb-4">
          Привет! Меня зовут Таринская Татьяна, я Software Developer. Это мой проект для помощи в подготовке к техническим собеседованиям.
        </p>
        <p>
          Здесь вы найдете структурированные материалы по алгоритмам, структурам данных и другим темам, которые часто встречаются на собеседованиях в IT.
        </p>
      </div>
      
      <h1 className="text-3xl font-bold mb-8 text-center">
        Подготовка к техническим собеседованиям
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
        
        <div className="border border-gray-300 rounded-lg p-6 opacity-50">
          <h2 className="text-xl font-semibold mb-2">Системный дизайн</h2>
          <p className="text-gray-600">
            Скоро будет доступен...
          </p>
        </div>
        
        <div className="border border-gray-300 rounded-lg p-6 opacity-50">
          <h2 className="text-xl font-semibold mb-2">Базы данных</h2>
          <p className="text-gray-600">
            Скоро будет доступен...
          </p>
        </div>
        
        <div className="border border-gray-300 rounded-lg p-6 opacity-50">
          <h2 className="text-xl font-semibold mb-2">Вопросы по языкам программирования</h2>
          <p className="text-gray-600">
            Скоро будет доступен...
          </p>
        </div>
      </div>
    </div>
  );
}