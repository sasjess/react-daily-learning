import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../components/ui/card";

//Destructuring props,default values
function StudentCard({ name, degree, gpa }) {
  return (
    <div className=" flex px-3 py-3 ">
      <Card className="w-full max-w-xs">
        <CardHeader>
          <CardTitle>Student Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <h1>Name: {name}</h1>
          <p>Degree: {degree}</p>
          <p>GPA: {gpa}</p>
        </CardContent>
      </Card>
    </div>
  );
}

function StudentList({ students }) {
  return students.length === 0
    ? "No student record found"
    : students.map((student) => {
        return <StudentCard key={student.id} {...student} />;
      });

  
}
function TopStudents({students}){
  const topStudents = students.filter((s) => s.gpa >=3.7);

  return topStudents.length === 0 ? "No Top Student were found." :
    topStudents.map((student) =>
      <StudentCard key={student.id} {...student}/>
    );

  }

//with { return } must be there ( do not put return )

export { StudentList ,TopStudents};
