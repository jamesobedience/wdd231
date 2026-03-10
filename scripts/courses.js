const courses = [
{
subject:'CSE',
number:110,
title:'Introduction to Programming',
credits:2,
certificate:'Web and Computer Programming',
description:'This course will introduce students to programming.',
technology:['Python'],
completed:true
},
{
subject:'WDD',
number:130,
title:'Web Fundamentals',
credits:2,
certificate:'Web and Computer Programming',
description:'This course introduces students to the World Wide Web.',
technology:['HTML','CSS'],
completed:true
},
{
subject:'CSE',
number:111,
title:'Programming with Functions',
credits:2,
certificate:'Web and Computer Programming',
description:'Students learn functions.',
technology:['Python'],
completed:true
},
{
subject:'CSE',
number:210,
title:'Programming with Classes',
credits:2,
certificate:'Web and Computer Programming',
description:'This course introduces classes.',
technology:['C#'],
completed:true
},
{
subject:'WDD',
number:131,
title:'Dynamic Web Fundamentals',
credits:2,
certificate:'Web and Computer Programming',
description:'Students create dynamic websites.',
technology:['HTML','CSS','JavaScript'],
completed:true
},
{
subject:'WDD',
number:231,
title:'Frontend Web Development I',
credits:2,
certificate:'Web and Computer Programming',
description:'Focus on accessibility and APIs.',
technology:['HTML','CSS','JavaScript'],
completed:false
}
];

const container=document.querySelector("#courseContainer");
const creditTotal=document.querySelector("#creditTotal");

function displayCourses(courseList){

container.innerHTML="";

courseList.forEach(course=>{

const card=document.createElement("div");

card.classList.add("course-card");

card.textContent=`${course.subject} ${course.number}`;

if(course.completed){
card.classList.add("completed");
}

container.appendChild(card);

});

const totalCredits=courseList.reduce((sum,course)=>sum+course.credits,0);

creditTotal.textContent="Total Credits: "+totalCredits;

}

displayCourses(courses);

document.querySelector("#allBtn").addEventListener("click",()=>{
displayCourses(courses);
});

document.querySelector("#wddBtn").addEventListener("click",()=>{

const filtered=courses.filter(course=>course.subject==="WDD");

displayCourses(filtered);

});

document.querySelector("#cseBtn").addEventListener("click",()=>{

const filtered=courses.filter(course=>course.subject==="CSE");

displayCourses(filtered);

});