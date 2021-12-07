/*const person =
{
    firstName: "Armandina",
    lastName: "Atom"
}

//spread
let p1 =
{
    ...person,
};

//Object.assign()
let p2 = Object.assign({}, person);

//JSON

let p3 = JSON.parse(JSON.stringify(person));

console.log(p1);
console.log(p2);
console.log(p3);

/*
let copiedPerson = person;
copiedPerson.firstName = "Richárd";
console.log(person);*/

let copiedPerson =JSON.parse(JSON.stringify)

//A változó értéke az egy reference típusú érték

let num = 1;
let copiedNum = num;

copiedNum = 2;
console.log(num);
//Primitív a változó értéke

let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};

let copiedPerson=Object.assign({},person);

copiedPerson.address.street="példa utca";
console.log(copiedPerson);