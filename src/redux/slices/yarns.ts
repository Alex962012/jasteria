import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../axios'

export const fetchYarns:any = createAsyncThunk('types/fetchYarns', async () => {
    const data = await axios.get('/yarn/getAll')
    return data
})

export const createYarn:any = createAsyncThunk('types/createYarn', async (params:any) => {
    const {data} = await axios.post('/yarn/add',params)
    return data
})

const initialState = {
    yarns: {
        items: [],
        status: 'loading'
    },


}
const  yarnsSlice = createSlice({
    name: ' yarns',
    initialState,
    reducers: {},

    extraReducers: {
        [fetchYarns.pending]: (state) => {

            state.yarns.status = 'loading'
        },
        [fetchYarns.fulfilled]: (state, action) => {

            state.yarns.items = action.payload.data
            state.yarns.status = 'loaded'
        },
        [fetchYarns.rejected]: (state) => {
            state.yarns.items = []
            state.yarns.status = 'error'
        }

    }

})

export const yarnsReducer =  yarnsSlice.reducer