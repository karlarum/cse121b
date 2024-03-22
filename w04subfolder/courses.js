const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    //Add a sections property to the object
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T",
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 28,
            days: "TTh",
            instructor: "Sis A",
        },
    ],
    //Add a method to the object that will allow us to add a student to a section.
    enrollStudent: function (sectionNum) {
        //It should find the section that was given in this.sections.
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        //If the section exists, then add 1 to enrolled, and then call the renderSections function to show our change
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },
    //Create another method called dropStudent(section). Subtract 1 from enrolled if the section passed in is found.
    dropStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    },
    // //stretch challenge
    // changeEnrollment: function (sectionNum, add = true) {
    //     const sectionIndex = this.sections.findIndex(
    //         (section) => section.sectionNum == sectionNum
    //     );
    //     if (sectionIndex >= 0) {
    //         if (add) {
    //             this.sections[sectionIndex].enrolled++;
    //         } else {
    //             this.sections[sectionIndex].enrolled--;
    //         }
    //         renderSections(this.sections);
    //     }
    // },
};

//Create a function to set the name and number of the course in the HTML
function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

//Create another function that will output the sections into the table identified by #sections
function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
}

//Add two event listeners to your code. One for the #enrollStudent button that will
//call out enrollStudent method, and another for the #dropStudent button. The event handler
//function in each case should grab the contents of the #sectionNumber input and pass it 
//into the appropriate function.

document.querySelector("#enrollStudent").addEventListener("click", function() {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
});

setCourseInfo(aCourse);
renderSections(aCourse.sections);