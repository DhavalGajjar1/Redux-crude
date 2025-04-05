export const VIEW_EMP = "VIEW_EMP";
export const ADD_EMP = "ADD_EMP";
export const DEL_EMP = "DEL_EMP";
export const EDIT_EMP = "EDIT_EMP";

export const viewempdata = () => ({
    type: VIEW_EMP,
});

export const addempdata = (empData) => ({
    type: ADD_EMP,
    payload: empData,
});

export const delempdata = (pos) => ({
    type: DEL_EMP,
    payload: pos,
})

export const editempdata = (pos, empData) => ({
    type: EDIT_EMP,
    payload: {
        pos, empData,
    },
});

