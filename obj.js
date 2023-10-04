const course= {
    coursename: "Javascript in Hindi",
    price: 999,
    Instructor: "hitesh"
}

// course.Instructor

const {Instructor: teacher} = course
console.log(course.Instructor);

console.log(teacher);
