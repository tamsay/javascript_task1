const name = 'Longe Temitope';
const courses = ['CSS', 'HTML', 'JAVASCRIPT', 'NODEJS'];

console.log(`Fullname: ${name}`);
console.log(`Courses taken: ${courses}`);

let courseLength = courses.length;

if(courseLength % 2 === 1){
    let oddArray = [];
    for(x=1; x<=200; x++){
        if(x % 2 === 1){
            oddArray.push(x);
        }
    }
    console.log(`Odd numbers from 1 - 200 are: ${oddArray}`);
}
else{
    let evenArray = [];
    for(x=1; x<=200; x++){
        if(x % 2 === 0){
            evenArray.push(x);
        }
    }
    console.log(`Even numbers from 1 - 200 are: ${evenArray}`);
}
