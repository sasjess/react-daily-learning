import StudentCard from "./home/com/StudentCard";
import StudentCard2 from "./home/com/StudentCard2";

const jj = { name: "Jess", degree: "Bsc hon CS", gpa: 3.9 };
function App() {
  return (
    <div>
      <StudentCard name="Sanili Jesmina" degree = "Bsc honors in Software enginnering" gpa = {3.89} />
      <StudentCard name="Sanjana Dinishi" degree = "Bsc honors in Software enginnering" gpa = {3.99} />
      <StudentCard name="Thehara Sanuri"  />
      <StudentCard2 student2={jj} />
    </div>
  );
}

export default App;
