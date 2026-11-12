import { Button } from "../../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { useState } from 'react'
import { Heart } from "lucide-react";

 


//Destructuring props,default values

function StudentCard({ name, degree, gpa }) {
  const [liked , setLiked] = useState(false);
  const [likes , setLikes] = useState(10);
  function handleLike(){

  setLikes((prev) => (liked ? prev -1 : prev +1));
  setLiked((prev) => !prev);
  
}
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

         <Button variant="outline" className="mt-3" onClick={handleLike}>
            <Heart
              className={liked ? "fill-red-500 text-red-500" : "text-gray-500"}
            />
            {likes}
          </Button>
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
