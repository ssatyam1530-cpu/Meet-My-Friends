import "./App.css";
import Header from "./Components/Header";
import StudentList from "./Components/StudentList";
import students from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <StudentList students={students} />
      </main>
    </div>
  );
}

export default App;