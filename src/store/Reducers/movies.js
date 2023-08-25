
import Data from "../../data/danhSachGhe.json"


const DEFAULT_STATE = {
    listChairs: Data,
    listPayment: [],
}

export const movies = (state = DEFAULT_STATE, action) => {
    // console.log(action.payload)

    switch (action.type) {
        case "CHOICE_CHAIR": {
            //  console.log(action.payload)
            const data = [...state.listChairs]
            const dataPayment = [...state.listPayment]

            const indexRow = data.findIndex((element) => {
                return element.hang === action.payload.hang;
            })

            const indexColum = data[indexRow].danhSachGhe.findIndex(element => {
                return element.soGhe === action.payload.element.soGhe;
            })

            data[indexRow].danhSachGhe[indexColum].daChon = !data[indexRow].danhSachGhe[indexColum].daChon

            state.listChairs = data;
            // console.log(state.listChairs)

            const indexPay = dataPayment.findIndex(element => {
                return element.soGhe === action.payload.element.soGhe
            })
            if (indexPay === -1) {
                dataPayment.push(data[indexRow].danhSachGhe[indexColum])
            } else {
                dataPayment.splice(indexPay, 1);
            }

            state.listPayment = dataPayment;

            break;
        }
        case "DELETE_CHAIR": {
            const data = [...state.listChairs];
            const dataPayment = [...state.listPayment]

            const indexRow = data.findIndex((element) => {
                return element.hang === action.payload.hang;
            })

            const indexColum = data[indexRow].danhSachGhe.findIndex((element) => {
                return element.soGhe === action.payload.chair.soGhe
            })

            data[indexRow].danhSachGhe[indexColum].daChon = !data[indexRow].danhSachGhe[indexColum].daChon
            state.listChairs = data;
            console.log(data)

            const indexPay = dataPayment.findIndex(element => {
                return element.soGhe === action.payload.chair.soGhe
            })

            if (indexPay !== -1) {
                dataPayment.splice(indexPay, 1);
            }
            state.listPayment = dataPayment;
            
            break;
        }
        case "PAYMENT": {
            // filter ra những thằng đã chọn, set !daDat
            const data = [...state.listChairs]
            // console.log(data)
            const isAnswer = window.confirm("Are You Sure??")
            if (isAnswer) {
                data.forEach((element) => {
                // console.log(element.danhSachGhe)
                element.danhSachGhe.forEach((danhSach) => {
                    if (danhSach.daChon) {
                        // console.log(danhSach.daChon)
                        // console.log(danhSach.daDat)

                        danhSach.daChon = !danhSach.daChon;
                        danhSach.daDat = !danhSach.daDat;

                        // console.log(danhSach.daChon)
                        // console.log(danhSach.daDat)
                    }
                })

            })
            console.log(data)
            state.listChairs = [...data];
            state.listPayment = []
            }
            break;
            // return { ...state }

        }


    }

    return { ...state }
}