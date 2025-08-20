import Counter from "./components/Counter";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
      <div className="p-8 bg-white rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Mi Contador</h1>
        <Counter />
      </div>
    </div>
  );
}

export default App;
