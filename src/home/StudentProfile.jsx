import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";

function StudentProfile() {
  const name = "Sanili";
  const degree = "Bsc Software Engineering";
  const gpa = 3.89;

return(
<div className="px-6 py-6">
  <Card className="w-full max-w-xs">
    <CardHeader>
      <CardTitle>Student Profile</CardTitle>
      <CardContent>
        Name: {name}
        <br />
        Degree :{degree}
        <br />
        GPA : {gpa}
      </CardContent>
    </CardHeader>
  </Card>
</div>)};

export default StudentProfile;
