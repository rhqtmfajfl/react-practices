import fs from 'fs';


//readFile은 비동기이므로 callback 필요
//readFileSync는 동기이다.
let state = {
    order: JSON.parse(fs.readFileSync("./json/data.json").toString())
}

let updateOrder1 = state.order;
updateOrder1.receive = "부산시 해운대구 우동 ....";

console.log(state.order, updateOrder1, state.order === updateOrder1);

console.log("===============================");

state = {
    order:JSON.parse(fs.readFileSync('./json/data.json'))
}

let updateOrder2= Object.assign({}, state.order, {
        receive: "부산시 해운대구 우동 ...."

    });
// updateOrder1.receive
console.log(state.order, updateOrder2, state.order === updateOrder2);
