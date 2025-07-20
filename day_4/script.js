const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgeet', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarstorm', year: 1829, passed: 1909 },
]

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
]

//Array.prototype.filter()
//1. Filter the list of inventors for those who were born in the 1500's

//by normal function
/* 
const fifteen = inventors.filter(
    function(inventor){
        if(inventor.year>=1500 && inventor.year<1600){
            return true;
        }else{
            //wecan also exclude return false
            //return false;
        }
    }
)
*/
// by arrow function
// const fifteen = inventors.filter((inventor) => (inventor.year>=1500 && inventor.year<1600))
// more readable form
const fifteen = inventors.filter(inventor => inventor.year>=1500 && inventor.year<1600)
console.log(fifteen)

//Array.prototype.map()
//2. Give us an array of the inventors first and last names
const fullNames = inventors.map((inventor,index) => `${index} : ${inventor.first} ${inventor.last}`)
console.log(fullNames)

//Array.prototype.sort()
//3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort(
    function(inventor1,inventor2){
        if(inventor1.year > inventor2.year){
            return 1;
        }
        else{
            return -1;
        }
    }
)

// const ordered = inventors.sort((a,b)=> a.year>b.year?1:-1)
// more readable form
// const ordered = inventors.sort((a,b)=>(a.year>b.year?1:-1))
console.log(ordered)

//Array.prototype.reduce()
//4. How many years did all the inventors live all together?


// const totalYears=inventors.reduce(
//     function(total,inventor){
//         return total + (inventor.passed -inventor.year)
//     },0
// )

const totalYears = inventors.reduce(
    (total,inventor)=>{
        return total + (inventor.passed-inventor.year)
    },0
)
console.log(totalYears);

//5. Sort the inventors by years lived

// const sortedByLiving = inventors.sort(
//     function(a,b){
//         const aLeaved=a.passed-a.year
//         const bLeaved=b.passed-b.year
//         if(aLeaved > bLeaved){
//             return 1;
//         }
//         else{
//             return -1;
//         }
//     }
// )
// -->
// ⚠️ Important Note:
// The `sort()` method sorts the array in-place, meaning it directly modifies the original array.
// When we assign the result of sort (e.g., to `ordered` or `sortedByLiving`), it still points to the same `inventors` array.
// So if we sort `inventors` once (e.g., by birth year) and then sort it again (e.g., by years lived),
// the first sorted result (`ordered`) will also appear changed, because it's referencing the same array.
// ✅ To avoid this, always make a copy using `[...inventors]` before sorting.

const sortedByLiving = [...inventors].sort(
    function(a,b){
        const aLeaved=a.passed-a.year
        const bLeaved=b.passed-b.year
        if(aLeaved > bLeaved){
            return -1;
        }
        else{
            return 1;
        }
    }
)

console.log(sortedByLiving)

//6. create a list of Bouleverdsnin Paris that contain 'de' anywhere in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector(".mw-category")
// const links=Array.from(category.querySelectorAll("a"))
// const links=[...category.querySelectorAll("a")]
// const de=links
//             .map(link=>link.textContent)
//             .filter(streetName => streetName.includes("de"))


//7. sort Exercise
//Sort the peope alphabettically by last name
const alpha=people.sort(
    function(lastOne,nextOne){
        const[afirst,alast]=lastOne.split(', ')
        const[bfirst,blast]=nextOne.split(', ')
        return alast>blast?1:-1;
    }
)
console.log(alpha);

//8. Reduce Exercise
//Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation=data.reduce(
    (datas,veichele)=>{
        if(!datas[veichele]){
            datas[veichele]=0;
        }
        datas[veichele]++;
        return datas;
    },{}
)
console.log(transportation)