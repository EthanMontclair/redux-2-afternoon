import axios from 'axios'

const initialState = {
    purchase: [],
    budgetLimit: null,
    loading: false
}

const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA'

export const requestBudgetData = () => {
    let data = axios.get('./api/budget-data')
    .then(res => res.data)
    return {
        type: REQUEST_BUDGET_DATA,
        payload: data
    }
}

export default function reducer(state = initialState, action){
    return state
}