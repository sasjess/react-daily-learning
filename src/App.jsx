import {StudentList ,TopStudents} from "./components/StudentCard";
import StudentForm from "./components/StudentForm";
import { students } from "@/data/students";

function App() {
  return (
    <div>
    <StudentForm/>
      <StudentList students={students} />
      Top students:
      <TopStudents students={students} />
      
    </div>
  );
}

export default App;
