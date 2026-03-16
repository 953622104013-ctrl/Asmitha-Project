const loadBtn = document.getElementById('loadBtn');
const studentList = document.getElementById('studentList');

// Sample "async" student data
const students = [
  "Alice Brown",
  "Bob Martin",
  "Charlie Davis",
  "Diana Evans",
  "Ethan Wilson",
  "Fiona Clark"
];

// Async function to simulate fetching student data
async function loadStudents() {
  loadBtn.textContent = "Loading...";
  studentList.innerHTML = ""; // Clear existing cards

  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  students.forEach(name => {
    const div = document.createElement('div');
    div.className = 'student-card';
    div.textContent = name;
    studentList.appendChild(div);
  });

  loadBtn.textContent = "Load Students";
}

loadBtn.addEventListener('click', loadStudents);