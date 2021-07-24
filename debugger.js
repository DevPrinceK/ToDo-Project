// function to remove the last element of a string
function removeX(string) {
    // first convert to array 
    let strArray = string.trim().split("");

    // remove last element
    strArray.pop();

    // variable to store new string
    let newStr = "";

    // converting the array to string
    for (let i = 0; i < strArray.length; i++) {
        newStr += strArray[i];
    }
    return newStr;
}

// exporting to index.js
//export {
//removeX
//};
//let changedStr = removeX("This is a sample todo itemX");
//console.log(changedStr);



//NOTE
//NOTE
//TODO: LOOK UP THE FUNCTION BELOW
// NOTIFICATIONS , ALARMS IN JAVASCRIPT
function setAlarm(){
    let permission = await Notification.requestPermission();
    const notice = new Notification("You have a todo at (time)");
}





// ARROW FUNCTIONS
// FILTER

const companies = [{
        name: "Company one",
        category: "Finance",
        start: 1981,
        end: 2003
    },
    {
        name: "Company Two",
        category: "Retail",
        start: 1992,
        end: 2008
    },
    {
        name: "Company Three",
        category: "Auto",
        start: 1999,
        end: 2007
    },
    {
        name: "Company Four",
        category: "Retail",
        start: 1989,
        end: 2010
    },
    {
        name: "Company Five",
        category: "Technology",
        start: 2009,
        end: 2014
    }, {
        name: "Company Six",
        category: "Finance",
        start: 1987,
        end: 2010
    }, {
        name: "Company Seven",
        category: "Auto",
        start: 1986,
        end: 1996
    },
    {
        name: "Company Eight",
        category: "Technology",
        start: 2011,
        end: 2016
    },
    {
        name: "Company Nine",
        category: "Retail",
        start: 1981,
        end: 1989
    }
];

// ages
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// selected ages || using forEach
const selectedAges = ages.forEach(function (age) {
    if (age > 20) {
        // console.log(age);
    }
});

// selected companies || Using forEach
const selectedCompanies = companies.forEach(function (Company) {
    if (Company.start > 1990) {
        //console.log(Company);
    }
})


// filtered ages || Using filter
let filteredAges = ages.filter(function (age) {
    if (age > 35) {
        return true;
    }
})


/* // filtered companies || Using filter
let filteredCompanies = companies.filter(function (Company) {
    if (Company.category === "Technology") {
        return true;
    }
})
 */

// filter with arrow function
let filteredCompanies = companies.filter(company => (company.end - company.start) >= 10);

// Sum of ages in array using reduce
let sumAges = ages.reduce((total, age) => total + age, 0);


// sorting ages with sort()
const sortedAges = ages.sort((a, b) => (a > b) ? 1 : -1);


// sum all lifespans of companies
let sumLifeSpan = companies.reduce((total, company) => total + (company.end - company.start), 0);



console.log(sumLifeSpan);