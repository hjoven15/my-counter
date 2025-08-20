import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-4xl font-extrabold text-gray-800 transition-all duration-200">
        {count}
      </p>
      <div className="flex gap-6">
        <button
          onClick={() => setCount(count - 1)}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow transition transform active:scale-95"
        >
          Decrementar
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition transform active:scale-95"
        >
          Incrementar
        </button>
      </div>
    </div>
  );
}
