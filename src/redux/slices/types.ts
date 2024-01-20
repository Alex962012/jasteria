import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../axios'

export const fetchTypes:any = createAsyncThunk('types/fetchTypes', async () => {
    const data = await axios.get('/type/getAll')
    return data
})
export const createType: any = createAsyncThunk(
    "types/createProducts",
    async (params: any) => {
      const { data } = await axios.post("/type/add", params);
      return data;
    }
  );
const initialState = {
    types: {
        items: [],
        status: 'loading'
    },


}
const typesSlice = createSlice({
    name: 'types',
    initialState,
    reducers: {},

    extraReducers: {
        [fetchTypes.pending]: (state) => {

            state.types.status = 'loading'
        },
        [fetchTypes.fulfilled]: (state, action) => {

            state.types.items = action.payload.data
            state.types.status = 'loaded'
        },
        [fetchTypes.rejected]: (state) => {
            state.types.items = []
            state.types.status = 'error'
        }

    }

})

export const typesReducer = typesSlice.reducer