const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for(let i = 0; i<ages.length; i++){
//    console.log(companies[i]);
//}




////////////////////////////
/********* forEach ******/
///////////////////////////




companies.forEach(function(company){
    console.log(company.name);
});






////////////////////////////////////////
/****************** filter ***********/
///////////////////////////////////////



//let canDrink = [];
//for(let i = 0; i<ages.length; i++){
//    if(ages[i] >= 21){
//        canDrink.push(ages[i]);
//    }
//}

//const canDrink = ages.filter(function(age){
//    if(age>=21){
//        return true;
//    }
//});

const canDrink = ages.filter(age=> age >= 21);

console.log(canDrink);


//const retailCompanies = companies.filter(function(company){
//    if(company.category === 'Retail'){
//        return true;
//    }
//});


const retailCompanies = companies.filter(company => company.category === 'Retail');

console.log(retailCompanies);


const years = companies.filter(company => (company.end - company.start > 10));

console.log(years);



/*** map ***/

//const testMap = companies.map(function(company){
//    return '${company.name} [${company.start} - ${company.end}]');
//})


const testMap = companies.map(company => '${company.name} [${company.start} - ${company.end}]');
// '${}' = template string
console.log(testMap);


const sqr = ages
.map(age => Math.sqrt(age))
.map(age => age * 3);
console.log(sqr);







///////////////////////////
/*** sort ***/
//////////////////////////



//const sorted = companies.sort(function(c1,c2){
//    if (c1.start>c2.start){
//        return 1;
//    }else{
//        return -1;
//    };
//    
//});

const sorted = companies.sort((c1,c2) => c1.start>c2.start ? 1 : -1); // ?= turnery operator , : = else

console.log(sorted);


//const sortedAge = ages.sort(function(a,b){
//    return a-b;
//}); // a-b == accending order 
// b-a decending order 

const sortedAge = ages.sort((a,b) => b-a);

console.log(sortedAge); 






/////////////////////
/*** reduce ***/
////////////////////




//let ageSum = 0;
//for(let i = 0; i<ages.length; i++){
//    ageSum += ages[i];
//}

//const ageSum = ages.reduce(function(total,age){
//    return total + age
//},0);


const ageSum = ages.reduce((total,age) => total + age,0);

console.log(ageSum);
