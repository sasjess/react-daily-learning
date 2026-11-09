import {StudentList ,TopStudents} from "./home/com/StudentCard";
import { students } from "@/data/students";

function App() {
  return (
    <div>
      <StudentList students={students} />
      Top students:
      <TopStudents students={students} />
    </div>
  );
}

export default App;
