import { apiSlice } from "../../app/api/apiSlice"


export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        register: builder.mutation({
            query: newUser => ({
                url: '/auth/register',
                method: 'POST',
                body: { ...newUser }
            })
        })
    })
})

export const {
    useLoginMutation,
    useRegisterMutation
} = authApiSlice