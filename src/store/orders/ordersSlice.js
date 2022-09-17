import { createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    active: null,
    isSaving: false,
    orders: [],
    savedMessage: ''
  },
  reducers: {
    addNewEmptyNote: (state, { payload }) => {
      state.orders = [...state.orders, payload];
      state.isSaving = false;
      state.savedMessage = `${payload.title}, guardada correctamente`;
    },
    deleteNoteByID: (state, { payload }) => {
      state.orders = state.orders.filter(order => order.id !== payload);
      state.active = null;
      state.isSaving = false;
    },
    purgeOrdersLogout: (state) => {
      state.isSaving = false;
      state.savedMessage = null;
      state.orders = [];
      state.active = null;
    },
    setActiveOrder: (state, action) => {
      state.active = action.payload;
      state.savedMessage = null;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setSaving: (state, action) => {
      state.isSaving = action.payload;
      state.savedMessage = null;
    },
    updateOrder: (state, { payload }) => {
      state.isSaving = false;
      state.orders = state.orders.map(order => order.id === payload.id ? payload : order);
      state.savedMessage = `${payload.title}, actualizada correctamente`;
    }
  }
});
// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  deleteNoteByID,
  purgeOrdersLogout,
  setActiveOrder,
  setOrders,
  setSaving,
  updateOrder,
} = ordersSlice.actions;
