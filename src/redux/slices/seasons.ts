import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../axios'

export const fetchSeasons:any = createAsyncThunk('types/fetchSeasons', async () => {
    const data = await axios.get('/season/getAll')
    return data
})
export const createSeason:any = createAsyncThunk('types/fetchSeasons', async (params:any) => {
    const {data} = await axios.post('/season/add',params)
    return data
})
const initialState = {
    seasons: {
        items: [],
        status: 'loading'
    },


}
const  seasonsSlice = createSlice({
    name: ' seasons',
    initialState,
    reducers: {},

    extraReducers: {
        [fetchSeasons.pending]: (state) => {

            state.seasons.status = 'loading'
        },
        [fetchSeasons.fulfilled]: (state, action) => {

            state.seasons.items = action.payload.data
            state.seasons.status = 'loaded'
        },
        [fetchSeasons.rejected]: (state) => {
            state.seasons.items = []
            state.seasons.status = 'error'
        }

    }

})

export const seasonsReducer =  seasonsSlice.reducer