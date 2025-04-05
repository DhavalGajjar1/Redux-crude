import { ADD_EMP, DEL_EMP, EDIT_EMP, VIEW_EMP } from "./actions";

const initialState = {
    employee: [
        {
            name: "naman",
            age: 15,
        },
        {
            name: "param",
            age: 20,
        },
        {
            name: "Dhaval",
            age: 50,
        },
    ],
}

const EmpReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMP:
            return {
                ...state.employee,
                employee: [...state.employee, action.payload],
            }
        case DEL_EMP:
            return {
                ...state.employee,
                employee: state.employee.filter((v, i) => i !== action.payload),
            }
        case EDIT_EMP:
            return {
                ...state.employee,
                employee: state.employee.map((v, i) =>
                    i == action.payload.pos ? action.payload.empData : v),
            }
        case VIEW_EMP:
            return state;
        default:
            return state;
    }
};

export default EmpReducer;