"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { algorithmTopics, getAlgorithmsByTopic } from "@/data/algorithms";

export default function AlgorithmTopicPage() {
  const { topicId } = useParams();
  const topic = algorithmTopics.find(t => t.id === topicId);
  const algorithms = getAlgorithmsByTopic(topicId as string);
  
  if (!topic) {
    return <div>Тема не найдена</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">
        {topic.title}
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        {topic.description}
      </p>
      
      <Link href="/algorithms" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Назад к темам
      </Link>
      
      <div className="mt-6 space-y-4">
        {algorithms.length > 0 ? (
          algorithms.map((algorithm) => (
            <Link key={algorithm.id} href={`/algorithms/${topicId}/${algorithm.id}`} className="block">
              <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold mb-2">{algorithm.title}</h2>
                <p className="text-gray-600">{algorithm.description}</p>
                <div className="mt-2 text-sm text-gray-500">
                  <span className="mr-4">Временная сложность: {algorithm.complexity.time}</span>
                  <span>Пространственная сложность: {algorithm.complexity.space}</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center text-gray-500 py-8">
            В этой теме пока нет алгоритмов
          </div>
        )}
      </div>
    </div>
  );
}