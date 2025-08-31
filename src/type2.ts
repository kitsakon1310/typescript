class Course {
  subject: string;
  grade: number;

  constructor(subject: string, grade: number) {
    this.subject = subject;
    this.grade = grade;
  }
}

class Student {
  studentID: number;
  name: string;
  courses: Course[];

  constructor(studentID: number, name: string) {
    this.studentID = studentID;
    this.name = name;
    this.courses = [];
  }

  addCourse(subject: string, grade: number): void {
    this.courses.push(new Course(subject, grade));
  }

  getAverage(): number {
    const sum = this.courses.reduce((acc, c) => acc + c.grade, 0);
    return this.courses.length > 0 ? sum / this.courses.length : 0;
  }
}

const students: Student[] = [
  new Student(101, "Ann"),
  new Student(102, "Ben"),
  new Student(103, "Chris"),
];

students[0].addCourse("Math", 3.5);
students[0].addCourse("English", 3.0);
students[0].addCourse("Science", 4.0);
students[0].addCourse("History", 2.5);

students[1].addCourse("Math", 2.0);
students[1].addCourse("English", 2.5);
students[1].addCourse("Science", 3.0);
students[1].addCourse("History", 3.5);

students[2].addCourse("Math", 4.0);
students[2].addCourse("English", 3.5);
students[2].addCourse("Science", 3.5);
students[2].addCourse("History", 4.0);

console.log("\nข้อมูลนักศึกษาทั้งหมด (ก่อนเพิ่มวิชาใหม่):");
students.forEach(s => {
  console.log(`ID: ${s.studentID}, Name: ${s.name}`);
  s.courses.forEach(c => console.log(`  - ${c.subject}: ${c.grade}`));
  console.log(`  เกรดเฉลี่ย: ${s.getAverage().toFixed(2)}\n`);
});

students[0].addCourse("PE", 4.0);
students[1].addCourse("Art", 3.0);
students[2].addCourse("Music", 3.5);

console.log("\nข้อมูลนักศึกษาทั้งหมด (หลังเพิ่มวิชาใหม่):");
students.forEach(s => {
  console.log(`ID: ${s.studentID}, Name: ${s.name}`);
  s.courses.forEach(c => console.log(`  - ${c.subject}: ${c.grade}`));
  console.log(`  เกรดเฉลี่ย: ${s.getAverage().toFixed(2)}\n`);
});
