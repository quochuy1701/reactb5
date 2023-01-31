import { combineReducers, createStore } from "redux";

const initialState = {
    mangNguoiDung: [
    ],
    mangNguoiDung1: [
    ],
    nguoiDungchitiet: {
        MaSV: "",
        hoTen: "",
        sdt: "",
        email: "",
    },

}
const rootReducer = combineReducers({
    QLND(state = initialState, action) {
        console.log(action)
        switch (action.type) {
            case "THEM_ND":
                state.mangNguoiDung = [...state.mangNguoiDung, action.nd]
                console.log(state.mangNguoiDung)
                return { ...state }
            case "XOA_ND":
                state.mangNguoiDung = state.mangNguoiDung.filter((nd) => {
                    return nd.MaSV !== action.tkXoa
                })
                return { ...state }
            case "XEM_ND":
                state.nguoiDungchitiet = action.ndXem
                console.log(state.nguoiDungchitiet)
                return { ...state };
            case "TIM_DATA_FORM":
                state.mangNguoiDung = [...state.mangNguoiDung]
                state.mangNguoiDung1 = [...state.mangNguoiDung1]
                let tuKhoa = action.value.toLowerCase().replace(/\s/g, "")
                if (tuKhoa==="") {
                    state.mangNguoiDung =[...state.mangNguoiDung]
                }else{
                state.mangNguoiDung1 = state.mangNguoiDung.filter((nd) => { 
                    return nd.hoTen === action.value
                 })
                state.mangNguoiDung=[...state.mangNguoiDung1]
            }
                return { ...state }
            default:
                return state;
        }
    },
})
export const store = createStore(rootReducer);
