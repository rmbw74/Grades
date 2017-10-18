const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60, 85, 82, 56]
const grades = {A: 0,B: 0, C: 0, D: 0, F: 0} 
function countScores(){
    for (let i = 0; i < scores.length; i++) {
        let evalScore = scores[i] //use evalScore to store each value in the array to be evaluated
        if (evalScore >= 91) {
            grades.A++ // if evalScore is greater than 90 increment grade.A by one. 
        } else if (evalScore >= 81 && evalScore <= 90) {
            grades.B++ // if evalScore is greater than 81 but less than 90 increment grade.B by one. 
        }
        else if (evalScore >= 71 && evalScore < 80) {
            grades.C++ // if evalScore is greater than 71 but less than 80 increment grade.C by one. 
        
        } else if (evalScore > 61 && evalScore < 70) {
            grades.D++ // if evalScore is greater than 61 but less than 70 increment grade.D by one. 
        
        } else  {
            grades.F++ // all other scores increment grade.F by one. 
        }
}
    for(let key in grades){           // loop through each key in grades
    console.log([key],grades[key]) // console log each key in grades
    }
}
//call the countScores function
countScores() 


//sortForLow - uses the .sort method to sort the scores array for lowest score
function sortForLow(){  
// set value of lowestScore to the sorted array lowest to highest (a-b)
let lowestScore = scores.sort(function(a,b){return a-b}) 
//console log the value of lowestScore at index 0
console.log('the lowest score is', lowestScore[0])
}
// call the sortForLow function
sortForLow()

//sortForHigh - uses the .sort method to sort the scores array for highest score
function sortForHigh(){     
// set value of highestScore to the sorted array lowest to highest (b-a)
highestScore = scores.sort(function(a,b){return b-a})
//console log the value of highest score at index 0
console.log('the highest score is', highestScore[0]) 
}
// call the sortForHigh function
sortForHigh()

//mostCommon - use a variable called currentGrade count to log the most common grade(s) in the grades object
function mostCommon(){
    //initialize variables
    let currentGradeCount = 0
    let mostCommonGrade
    //loop through each value in grades object
    for (let key in grades) {
        //if currentGradeCount is less than the current key in grades
        if (currentGradeCount < grades[key]) {
            //set currentGradesCount to equal the current key
            currentGradeCount = grades[key]
            //set the variable mostCommonGrade equal to the current key
            mostCommonGrade = key
        //else - if the currentGradeCount is EQUAL to the current key  
        }else if (currentGradeCount === grades[key]){
                //set currentGradeCount equal to the value of current key
                currentGradeCount = grades[key]
                //append the key name to the mostCommonGrade string
                mostCommonGrade += ","+ key
        }
    }
    //console log the string value of the most common grade(s) and the value of currentGradecount
    console.log('The Most Common Grade Count(s):', mostCommonGrade, currentGradeCount)
}
//call the mostCommon Function
mostCommon()

//leastCommon - uses a variable called currentGradecount to log the least common grade(s) in the grades object
function leastCommon(){
    //initialize variables
    // currentGradeCount needs to be a random value larger than 0 in order for our loop to function so we will set it to the length of the scores array
    let currentGradeCount = scores.length
    // create a string called leastCommonGrade to hold the reporting string at the end of the function
    let leastCommonGrade
    //loop through each value in the grades object
    for (let key in grades) {
         //if the currentGradesCount is greater than the value of grades.key
        if (currentGradeCount > grades[key]) {
            //then set the value of currentGradesCount to equal grades.key
            currentGradeCount = grades[key]
            //then set the value of leastCommonGrade equal to the NAME of the object key
            leastCommonGrade = key
        // if currentGradesCount is equal to the value of grades.key    
        }else if(currentGradeCount === grades[key]){
                //then set the value of currentGradesCount to equal grades.key
                currentGradeCount = grades[key]
                //then append the key name to the leastCommonGrade string
                leastCommonGrade+= ","+key
        }
    }
    //console log the string value of the least common grade(s) and the value of currentGradecount
    console.log('The least common grade count(s):', leastCommonGrade, currentGradeCount)
}
//call the leastCommon function
leastCommon()
