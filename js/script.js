//Question 1:

const cat = {
    complain: function() {
        console.log("Meow!");
    }
};

cat.complain();


//Question 2:

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


//Question 3:

heading.style.fontSize = "2em";


//Question 4:

heading.classList.add("subheading");


//Question 5:

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}


//Question 6:
/*Select the div with a class of results, assign it to a variable called 
resultsContainer and set its inner HTML to be <p>New paragraph</p> and its 
background colour to be yellow.*/

const resultsContainer = document.querySelector(".results");


const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];