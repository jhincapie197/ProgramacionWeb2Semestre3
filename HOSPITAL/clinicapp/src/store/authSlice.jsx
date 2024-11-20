//Importar el slice del estado y roles
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Url del endpoint login
const URL_Login = "http://localhost/apiHospital/login";

//Configurar la accion asincrona con la api para iniciar sesion
export const authenticateUser = createAsyncThunk("auth/authenticateUse", 
    async (credentials, {rejectWithValue})=>{
        try {
            let response = await axios.post(URL_Login, credentials);
            return response.data; //Respuesta de la conexion
        } catch (error) {
            return rejectWithValue(error.renpose.data)
        }
});

//Estado inicial del usuario
const initialState = {
    isAuthenticated: false,
    userRole: null, //Puede ser un paciente, doctor o admin
    userName: "",
    status: "idle", //Tambien puede ser loading o succeeded o failed
    error: null
}

//Slice para gestionar el estado del usuario
let authSlice = createSlice({
    name: "auth", //Nombre del estado
    initialState, //Valor inicial del estado
    reducers: {//Funciones que actualizaran el estado
        logout: (state)=>{
            state.isAuthenticated = false,
            state.userRole = null, //Puede ser un paciente, doctor o admin
            state.userName = "",
            state.email = "",
            state.status = "idle", //Tambien puede ser loading o succeeded o failed
            state.error = null
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(authenticateUser.pending, (state)=>{
            state.status = "loading";
            state.error = null;
        }).addCase(authenticateUser.rejected, (state)=>{
            state.status = "failed";
            state.error = action.payload;
        }).addCase(authenticateUser.fulfilled, (state, action)=>{
            state.isAuthenticated = true;
            state.userRole = action.payload.user_type;
            state.userName = action.payload.name;
            state.email = action.payload.email;
            state.status = "succeeded";
            state.error = null;
        })
    }
});

//Exportar las funciones que actualizaran el estado
export let {logout} = authSlice.actions;
export default authSlice.reducer;