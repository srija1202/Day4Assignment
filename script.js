const resume = {
    "personal_info": {
      "name": "Sam Lee",
      "email": "samlee@example.com",
      "phone": "555-123-4567"
    },
    "skills": [
      "Python",
      "Data Analysis",
      "Machine Learning"
    ],
    "experience": [
      {
        "position": "Data Analyst",
        "company": "DataTech Co.",
        "years": "2019-2022"
      }
    ],
    "education": [
      {
        "degree": "Bachelor of Science in Computer Science",
        "school": "Tech University",
        "year": 2019
      }
    ]
  }
// Using for Loop
for (let i = 0; i < resume.skills.length; i++) {
    console.log(resume.skills[i]);
  }
// Using forEach
resume.skills.forEach(skill => {
    console.log(skill);
  });
// Using for...of
for (const skill of resume.skills) {
    console.log(skill);
  }
// Using for...in
for (const key in resume.personal_info) {
    if (resume.personal_info.hasOwnProperty(key)) { 
      console.log(`${key}: ${resume.personal_info[key]}`);
    }
  }
      