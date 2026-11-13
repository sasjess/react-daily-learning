import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../components/ui/card"

//Passing a whole object as a prop
function StudentCard2({student2}) {
  
  return (
    <div className=" flex px-3 py-3 ">
      <Card className="w-full max-w-xs">
        <CardHeader>
          <CardTitle>Student Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <h1>Name: {student2.name}</h1>
          <p>Degree: {student2.degree}</p>
          <p>GPA: {student2.gpa}</p>
        </CardContent>
      </Card>
    </div>
  );
};
export default StudentCard2;