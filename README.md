# React Daily Learning

A daily learning journal where I practise React step by step and push my progress to GitHub. The commit history shows how my skills grow over time.

## About

I am a third-year BSc Software Engineering student at BCI Campus. I am learning React and JavaScript every day, and this repository holds my practice code, mini components and small projects.

## Tech Stack

- React (with Vite)
- JavaScript (ES6)
- Tailwind CSS
- shadcn/ui
- Git and GitHub

## Learning Log

| Day | Topic | What I built |
|-----|-------|--------------|
| 1 | Components and JSX | StudentProfile component |
| 2 | Props, default props, object props | Reusable student card |
| 3 | Lists with map and the key prop | Student list and top students list |
| 4 | State with useState | Like button on each student card |

I update this table as I finish each day.

## What I Have Learned So Far

- Writing function components and using JSX rules
- Passing data with props, using default values, and passing whole objects
- Rendering lists with `map`, and why every item needs a unique `key`
- Keeping data in a separate file (`src/data`) and importing it
- Using `useState` and always updating state with the setter function
- Building UI quickly with Tailwind CSS and shadcn/ui components

## Project Structure

```
src/
  home/com/   reusable components such as StudentCard and StudentList
  data/         sample data such as students.js
  App.jsx       main component
  main.jsx      app entry point
```

## How to Run

```bash
git clone https://github.com/sasjess/react-daily-learning.git
cd react-daily-learning
npm install
npm run dev
```

Then open the local address that Vite prints in the terminal, usually http://localhost:5173.

## Next Steps

- Events and conditional rendering
- Forms and controlled inputs
- useEffect and fetching data from an API
- React Router
- A small task manager project
