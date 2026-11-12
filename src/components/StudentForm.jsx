import { Input } from "../../components/ui/input";
import { useState } from "react";
import { Field, FieldGroup, FieldLabel } from "../../components/ui/field";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";

const emptyForm = { name: "", degree: "", gpa: "" };

function StudentForm({ onAdd }) {
  const [form, setForm] = useState({ ...emptyForm });
  const [submittedStudents, setSubmittedStudents] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const student = {
      name: form.name,
      degree: form.degree,
      gpa: Number(form.gpa),
    };

    if (onAdd) {
      onAdd(student);
    }

    setSubmittedStudents((prevStudents) => [...prevStudents, student]);
    setForm({ ...emptyForm });
  }

  function handleReset() {
    setForm({ ...emptyForm });
    setSubmittedStudents([]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}  className="px-4 py-6">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Name</FieldLabel>
            <Input
              id="name"
              name="name"
              value={form.name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="degree">Degree</FieldLabel>
            <Input
              id="degree"
              name="degree"
              type="text"
              value={form.degree}
              placeholder="Bsc.hons in ..."
              onChange={handleChange}
            />
            <FieldLabel htmlFor="gpa">GPA</FieldLabel>
            <Input
              id="gpa"
              name="gpa"
              type="text"
              value={form.gpa}
              placeholder="Enter your GPA"
              onChange={handleChange}
            />
          </Field>
          <Field>
            <Button type="button" onClick={handleReset}>
              Reset
            </Button>
            <Button type="submit">Submit</Button>
          </Field>
        </FieldGroup>
      </form>

      {submittedStudents.length > 0 && (
        <div className="flex flex-col gap-3 px-3 py-3">
          {submittedStudents.map((student, index) => (
            <Card key={`${student.name}-${index}`} className="w-full max-w-xs">
              <CardHeader>
                <CardTitle>Student Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <h1>Name: {student.name}</h1>
                <p>Degree: {student.degree}</p>
                <p>GPA: {student.gpa}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}

export default StudentForm;
