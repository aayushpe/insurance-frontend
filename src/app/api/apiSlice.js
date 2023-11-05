import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://admin-panel-api-5r7s.onrender.com' }),
    tagTypes: ['Note', 'User'],
    endpoints: builder => ({})
})