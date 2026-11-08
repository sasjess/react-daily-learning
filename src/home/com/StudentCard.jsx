import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../../components/ui/card"


//Destructuring props,default values
function StudentCard({name = "Unknown" , degree = "Bsc ..", gpa = "Default"}) {
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
  )
}





export default StudentCard
