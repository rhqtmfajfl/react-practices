import { Console } from 'console';
import fs from 'fs';


//readFile은 비동기이므로 callback 필요
//readFileSync는 동기이다.
let state = {
    order: JSON.parse(fs.readFileSync("./json/data.json").toString())
}

// console.log(state);

const updateProducts1 = state.order.projects;
updateProducts1.push({
    
        "no": "c002-003",
        "name": "qmffndidakf",
        "price": 2000,
        "amount": 1
});

console.log(state.products, updateProducts1, state.order.products === updateProducts1);


console.log("=============================================================");

state = {
    order: JSON.parse(fs.readFileSync("./json/data.json").toString())
}

// console.log(state);

const updateProducts2 = state.order.concat({
    "no": "c002-003",
    "name": "qmffndidakf",
    "price": 2000,
    "amount": 1

});

console.log(state.order.products, updateProducts2, state.order.products === updateProducts2);



console.log("=============================================================");

state = {
    order: JSON.parse(fs.readFileSync("./json/data.json").toString())
}

// console.log(state);

const updateProducts3 = [...state.order.projects, {
    "no": "c002-003",
    "name": "qmffndidakf",
    "price": 2000,
    "amount": 1

}]
    


console.log(state.order.products, updateProducts3, state.order.products === updateProducts3);
