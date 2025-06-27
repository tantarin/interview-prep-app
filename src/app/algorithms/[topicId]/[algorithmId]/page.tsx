"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getAlgorithmById } from "@/data/algorithms";
import CodeBlock from "@/components/CodeBlock";

export default function AlgorithmPage() {
  const { topicId, algorithmId } = useParams();
  const algorithm = getAlgorithmById(algorithmId as string);
  
  if (!algorithm) {
    return <div>Алгоритм не найден</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">
        {algorithm.title}
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        {algorithm.description}
      </p>
      
      <Link href={`/algorithms/${topicId}`} className="text-blue-600 hover:underline mb-6 inline-block">
        ← Назад к списку алгоритмов
      </Link>
      
      <div className="mt-8 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Сложность</h2>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <p><strong>Временная сложность:</strong> {algorithm.complexity.time}</p>
            <p><strong>Пространственная сложность:</strong> {algorithm.complexity.space}</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Реализация</h2>
          <CodeBlock code={algorithm.code} />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Объяснение</h2>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <p>{algorithm.explanation}</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Примеры</h2>
          <div className="space-y-4">
            {algorithm.examples.map((example, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-sm">
                <p><strong>Ввод:</strong> {example.input}</p>
                <p><strong>Вывод:</strong> {example.output}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}