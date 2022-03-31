import fs from 'fs';


//readFile은 비동기이므로 callback 필요
//readFileSync는 동기이다.
let state = {
    order: JSON.parse(fs.readFileSync("./json/data.json").toString())
}

let updateOrder = Object.assign({}, state.order, {
    receive: "부산시 해운대구 우동 ...."

});

updateOrder.payment.method = 'Mobile';


console.log(
    state.order,
    updateOrder,
    state.order === updateOrder,
    state.order.receive === updateOrder.receive,
    state.order.payment === updateOrder.payment
);