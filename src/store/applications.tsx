import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAll } from "../api/requests";
import { ApplicationT } from "../views/application/application";

interface State {
  loading: boolean;
  entities: ApplicationT[];
}
const initialState: State = {
  loading: false,
  entities: [],
};

export const fetchApplications = createAsyncThunk(
  "applications/fetchAll",
  async (thunkAPI) => {
    const response = await fetchAll();
    return response.data;
  }
);

const applicationsSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    load_applications(state, action) {
      return action.payload.data;
    },
    add_application(state, action: PayloadAction<ApplicationT>) {
      state.entities.push(action.payload);
    },
    remove_application(state, action: PayloadAction<{ index: string }>) {
      state.entities = state.entities.filter(
        (app) => app.id !== action.payload.index
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchApplications.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchApplications.fulfilled,
      (state, action: PayloadAction<ApplicationT[]>) => {
        state.entities = action.payload;
        state.loading = false;
      }
    );
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = applicationsSlice;
// Extract and export each action creator by name
export const { load_applications, add_application, remove_application } =
  actions;
// Export the reducer, either as a default or named export
export default reducer;
