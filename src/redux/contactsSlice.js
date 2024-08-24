import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [{ id: "id-1", name: "Katrin", number: "000-458-74-58" }],
};

const slice = createSlice({
  name: "contacts",
  initialState,

  reducers: {
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    addContact: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { deleteContact, addContact } = slice.actions;
export const contactsReducer = slice.reducer;
export const selectContacts = (state) => state.contacts.items;