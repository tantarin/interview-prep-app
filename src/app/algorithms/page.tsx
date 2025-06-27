"use client";

import { useState } from "react";
import Link from "next/link";
import { algorithmTopics } from "@/data/algorithms";

export default function AlgorithmsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Алгоритмы и структуры данных
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        Выберите тему для изучения
      </p>
      
      <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Назад на главную
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {algorithmTopics.map((topic) => (
          <Link key={topic.id} href={`/algorithms/${topic.id}`} className="block">
            <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{topic.title}</h2>
              <p className="text-gray-600">{topic.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}