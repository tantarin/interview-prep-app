export interface AlgorithmTopic {
  id: string;
  title: string;
  description: string;
}

export interface Algorithm {
  id: string;
  topicId: string;
  title: string;
  description: string;
  complexity: {
    time: string;
    space: string;
  };
  code: string;
  explanation: string;
  examples: {
    input: string;
    output: string;
  }[];
}

export const algorithmTopics: AlgorithmTopic[] = [
  {
    id: "arrays",
    title: "Массивы",
    description: "Базовые операции и алгоритмы для работы с массивами."
  },
  {
    id: "linked-lists",
    title: "Связные списки",
    description: "Односвязные и двусвязные списки, операции над ними."
  },
  {
    id: "stacks-queues",
    title: "Стеки и очереди",
    description: "Принципы LIFO и FIFO, реализации и применения."
  },
  {
    id: "trees",
    title: "Деревья",
    description: "Бинарные деревья, деревья поиска, обходы."
  },
  {
    id: "graphs",
    title: "Графы",
    description: "Представление графов, обходы, алгоритмы на графах."
  },
  {
    id: "sorting",
    title: "Алгоритмы сортировки",
    description: "Различные алгоритмы сортировки и их сравнение."
  },
  {
    id: "searching",
    title: "Алгоритмы поиска",
    description: "Линейный и бинарный поиск, хеширование."
  },
  {
    id: "dynamic-programming",
    title: "Динамическое программирование",
    description: "Оптимизация рекурсивных решений с помощью мемоизации."
  }
];

export const algorithms: Algorithm[] = [
  {
    id: "binary-search",
    topicId: "searching",
    title: "Бинарный поиск",
    description: "Алгоритм поиска элемента в отсортированном массиве путем деления пространства поиска пополам на каждом шаге.",
    complexity: {
      time: "O(log n)",
      space: "O(1)"
    },
    code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    }
    
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1; // Элемент не найден
}`,
    explanation: "Бинарный поиск работает только на отсортированных массивах. На каждом шаге алгоритм сравнивает искомый элемент с серединным элементом массива и отбрасывает половину массива, в которой точно нет искомого элемента. Это позволяет достичь логарифмической сложности поиска.",
    examples: [
      {
        input: "arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], target = 5",
        output: "4 (индекс элемента 5)"
      },
      {
        input: "arr = [1, 2, 3, 4, 5, 6, 7, 8, 9], target = 10",
        output: "-1 (элемент не найден)"
      }
    ]
  },
  {
    id: "merge-sort",
    topicId: "sorting",
    title: "Сортировка слиянием",
    description: "Алгоритм сортировки, основанный на принципе 'разделяй и властвуй'.",
    complexity: {
      time: "O(n log n)",
      space: "O(n)"
    },
    code: `function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}`,
    explanation: "Сортировка слиянием разбивает массив пополам, рекурсивно сортирует каждую половину, а затем объединяет отсортированные половины. Это стабильный алгоритм сортировки с гарантированной временной сложностью O(n log n), но требует дополнительной памяти O(n).",
    examples: [
      {
        input: "[38, 27, 43, 3, 9, 82, 10]",
        output: "[3, 9, 10, 27, 38, 43, 82]"
      }
    ]
  },
  {
    id: "linked-list-traversal",
    topicId: "linked-lists",
    title: "Обход связного списка",
    description: "Базовая операция прохода по всем элементам связного списка.",
    complexity: {
      time: "O(n)",
      space: "O(1)"
    },
    code: `class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function traverseLinkedList(head) {
  let current = head;
  const values = [];
  
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  
  return values;
}`,
    explanation: "Обход связного списка выполняется путем последовательного перехода от одного узла к следующему, начиная с головы списка. Это базовая операция, которая используется во многих алгоритмах работы со связными списками.",
    examples: [
      {
        input: "1 -> 2 -> 3 -> 4 -> 5",
        output: "[1, 2, 3, 4, 5]"
      }
    ]
  },
  {
    id: "dfs",
    topicId: "graphs",
    title: "Поиск в глубину (DFS)",
    description: "Алгоритм обхода графа, который идет вглубь насколько возможно по каждой ветке перед возвратом.",
    complexity: {
      time: "O(V + E)",
      space: "O(V)"
    },
    code: `function dfs(graph, start) {
  const visited = new Set();
  const result = [];
  
  function explore(vertex) {
    visited.add(vertex);
    result.push(vertex);
    
    for (const neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        explore(neighbor);
      }
    }
  }
  
  explore(start);
  return result;
}`,
    explanation: "Поиск в глубину (DFS) использует стек (неявно через рекурсию или явно) для обхода графа. Алгоритм начинает с начальной вершины, затем рекурсивно посещает все непосещенные соседние вершины, прежде чем вернуться. DFS полезен для поиска путей, выявления циклов и топологической сортировки.",
    examples: [
      {
        input: "graph = {1: [2, 3], 2: [4, 5], 3: [6], 4: [], 5: [], 6: []}, start = 1",
        output: "[1, 2, 4, 5, 3, 6]"
      }
    ]
  }
];

export function getAlgorithmsByTopic(topicId: string): Algorithm[] {
  return algorithms.filter(algo => algo.topicId === topicId);
}

export function getAlgorithmById(id: string): Algorithm | undefined {
  return algorithms.find(algo => algo.id === id);
}