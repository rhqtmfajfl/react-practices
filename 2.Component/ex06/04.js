import fs from 'fs';
import update from 'react-addons-update';

//readFile은 비동기이므로 callback 필요
//readFileSync는 동기이다.
let state = {
    order: JSON.parse(fs.readFileSync("./json/data.json").toString())
}

// let updateOrder = Object.assign({}, state.order, {
//     receive: "부산시 해운대구 우동 ...."

// });

let updateOrder = update(state.order, {
    //해당 패스의 값 변경1
    receive:{
        $set: "부산시 해운대구 우동"
    },   
    //해당 패스의 값 변경2
    payment:{
        method:{
            $set: 'Mobile'
        }
    },
    products:{
        //배열 요소 변경(인덱스로 찾아서)
        0:{
            amount:{
                $set: 5
            }
        },

        //배열 요소 추가
        $push:[{
            "no": "c002-003",
            "name": "블루양말",
            "price": 2000,
            "amount": 1    
        }]
    }
})

// updateOrder.payment.method = 'Mobile';


console.log(
    state.order,
    updateOrder
);