import React from "react";
import StudentHeader from "./StudentHeader";
import StudentFooter from "./StudentFooter";

function App() {
  return (
    <div>
      <StudentHeader />

      <h3>Welcome to Student Dashboard</h3>
      <p>Here you can manage student details.</p>

      <StudentFooter />
    </div>
  );
}

export default App;
