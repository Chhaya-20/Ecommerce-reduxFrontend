import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define statuses
export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

// Define async thunk to fetch cart data
export const getCart = createAsyncThunk("cart/getCart", async (thunkAPI) => {
  try {
    const response = await fetch("https://ecommerce-reduxbackend.onrender.com/api/cart/getCart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch cart data");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Define async thunk to fetch product data
export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (thunkAPI) => {
    try {
      const response = await fetch("https://ecommerce-reduxbackend.onrender.com/api/cart/products");
      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


//   try {
//     const response = await fetch("http://localhost:3000/api/cart/products");
//     if (!response.ok) {
//       throw new Error("Failed to fetch product data");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// Define async thunk to add item to cart

// export const addcart = createAsyncThunk(
//   "cart/addCart",
//   async ({ id, price }, thunkAPI) => {
//     try {
//       const response = await fetch("http://localhost:3000/api/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ id, price }),
//       });
//       console.log(response);
//       if (response.status != 200) {
//         console.log("ejfeghk");
//         throw new Error("Failed to add item to cart");
//       }
//       const data = await response.json();
//       return { data, status: response.status }; // Return both data and status
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addcart = createAsyncThunk(
//   "cart/addCart",
//   async ({ id, price }, thunkAPI) => {
//     try {
//       const response = await fetch("http://localhost:3000/api/cart/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ id, price }),
//       });
//       console.log(response);
//       if (response.status !== 200) {
//         throw new Error("Failed to add item to cart");
//       }

//       const data = await response.json();
//       return { data, status: response.status }; // Return both data and status
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const addcart = createAsyncThunk(
  "cart/addCart",
  async ({ id, price }, thunkAPI) => {
    try {
      const response = await fetch("https://ecommerce-reduxbackend.onrender.com/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ id, price }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const data = await response.json();

      // Log the data and status for debugging
      console.log("Response data:", data);
      console.log("Response status:", response.status);

      return { data, status: response.status }; // Return both data and status
    } catch (error) {
      // Log the error for debugging
      console.error("Error in addcart:", error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const increases = createAsyncThunk(
  "cart/addCart",
  async ({ id, inc }, thunkAPI) => {
    console.log(id, inc);
    try {
      const response = await fetch("https://ecommerce-reduxbackend.onrender.com/api/cart/getCart", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ id, inc }),
      });
      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }
      const data = await response.json();
      return { data, status: response.status }; // Return both data and status
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const buyproduct = createAsyncThunk(
  "cart/order",
  async (id, thunkAPI) => {
    try {
      const response = await fetch("https://ecommerce-reduxbackend.onrender.com/api/cart/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }
      const data = await response.json();
      return { data, status: response.status }; // Return both data and status
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOrder = createAsyncThunk(
  "cart/getorder",
  async (id, thunkAPI) => {
    console.log("hererer");
    try {
      const response = await fetch("https://ecommerce-reduxbackend.onrender.com/api/cart/getorder", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }
      const data = await response.json();
      console.log(data);
      return { data, status: response.status }; // Return both data and status
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



// Define ProductSlice
const ProductSlice = createSlice({
  name: "Product",
  initialState: {
    data: null,
    status: null,
    error: null,
  },
  reducers: {},

  // Define extra reducers
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.error = action.error.message;
      })
      .addCase(getCart.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.data = action.payload;
      })
      .addCase(getCart.rejected, (state) => {
        state.status = STATUSES.ERROR;
      })
      .addCase(addcart.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(addcart.fulfilled, (state) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(addcart.rejected, (state) => {
        console.log("jgfjwk");
        state.status = STATUSES.ERROR;
      })
      .addCase(buyproduct.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(buyproduct.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.data = action.payload;
      })
      .addCase(buyproduct.rejected, (state) => {
        state.status = STATUSES.IDLE;
      })
      .addCase(getOrder.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.data = action.payload;
      })
      .addCase(getOrder.rejected, (state) => {
        state.status = STATUSES.IDLE;
      });
  },
});

// Export actions and reducer
export const {} = ProductSlice.actions;
export default ProductSlice.reducer;
