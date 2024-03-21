import { createAction } from "@reduxjs/toolkit";

const current = createAction('CURRENT', (data) => {

    const dataFixed = {
        name: data.firstName + ' ' + data.lastName,
        email: data.mail
    }

    return {
        payload: {
            ...dataFixed,
            loggedIn: true
        }
    }
})

const login = createAction('LOGIN', (token) => {
    localStorage.setItem('token', token)
    return {
        payload: {
            token: null,
            timestamps: false
        }
    }
})


const actions = {
    current,
    login
}
export default actions