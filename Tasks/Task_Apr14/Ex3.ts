interface ResumeDetails {
    name: string;
    age: number;
}

interface Education extends ResumeDetails {
    school: string;
    college: string;
    percentage: number;
    degree: string;
}

const stu1: Education = {
    name: "Azeeb",
    age: 28,
    school: "Don Bosco Hr. Sec. School",
    college: "Dr. MGR University",
    percentage: 74.2,
    degree: "B.Tech CSE"
};

console.log(
    `Resume:
    Name: ${stu1.name}
    Age: ${stu1.age}
    School: ${stu1.school}
    College: ${stu1.college}
    Percentage: ${stu1.percentage}%
    Degree: ${stu1.degree}`);