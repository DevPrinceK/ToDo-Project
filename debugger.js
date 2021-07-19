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
export {
    removeX
};
//let changedStr = removeX("This is a sample todo itemX");
//console.log(changedStr);