import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '1c8f0e1517msh053ef90e2dd56c7p12f206jsn585cb13adde3'    
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
  
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
            getCryptos: builder.query({
                query: (count) =>  createRequest(`/coins?limit=${count}`),
            }),
            getCurrencies: builder.query({
                query: () =>  createRequest('/currencies'),
            })
            
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;