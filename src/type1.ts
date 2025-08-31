interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
}

const employees: Employee[] = [
  { id: 1, name: "Alice", position: "Developer", salary: 50000 },
  { id: 2, name: "Bob", position: "Designer", salary: 45000 },
  { id: 3, name: "Charlie", position: "Manager", salary: 60000 },
];

function findEmployeeByName(name: string): Employee | undefined {
  return employees.find(e => e.name.toLowerCase() === name.toLowerCase());
}

console.log("ข้อมูลพนักงานทั้งหมด:");
employees.forEach(e => {
  console.log(`ID: ${e.id}, Name: ${e.name}, Position: ${e.position}, Salary: ${e.salary}`);
});

const result = findEmployeeByName("Bob");
if (result) {
  console.log(`\nผลการค้นหาพนักงานชื่อ "Bob":`);
  console.log(`ID: ${result.id}, Name: ${result.name}, Position: ${result.position}, Salary: ${result.salary}`);
} else {
  console.log("ไม่พบพนักงานชื่อที่ค้นหา");
}
