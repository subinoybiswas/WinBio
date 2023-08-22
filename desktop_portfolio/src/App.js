import "./App.css";

function App() {
  return (
    <div class="flex bg-black min-h-screen">
      <div class="bg-blue-400 fixed bottom-0 left-0 right-0 h-10">
        <div class="bg-slate-50 px-1 py-0.5 absolute my-2 mx-2 left-0">
          Start
        </div>
        <div class="bg-slate-50 px-1 py-0.5 absolute my-2 mx-2 right-0 h-7 w-20">
          Clock
        </div>
        <div className="Time"></div>
      </div>
    </div>
  );
}

export default App;
