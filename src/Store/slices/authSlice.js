import { createSlice } from "@reduxjs/toolkit";

// Helper to validate user object and role
const getValidUser = (user) => {
  try {
    if (!user || typeof user !== "object") {
      console.log("❌ Invalid user object:", user);
      return null;
    }

    // Ensure role is a number and valid
    const validRoles = [1, 2, 3, 4];
    let role = user.role;

    // Handle string roles that might be numbers
    if (typeof role === 'string') {
      role = parseInt(role, 10);
    }

    // Convert to number if it isn't already
    role = Number(role);

    if (!validRoles.includes(role)) {
      console.log("❌ Invalid role:", role, "Valid roles:", validRoles);
      return null;
    }

    const validUser = { 
      ...user, 
      role // normalize role as number
    };

    console.log("✅ Valid user created:", {
      id: validUser.id,
      email: validUser.email,
      role: validUser.role,
      hasToken: !!validUser.token
    });

    return validUser;
  } catch (error) {
    console.error("❌ Error validating user:", error);
    return null;
  }
};

// Helper to check if we have valid authentication
const checkAuthState = () => {
  try {
    const token = localStorage.getItem("authToken");
    const userStr = localStorage.getItem("user");

    console.log("🔍 Checking auth state:", {
      hasToken: !!token,
      hasUserStr: !!userStr
    });

    if (!token || !userStr) {
      console.log("❌ Missing token or user data");
      return { isAuthenticated: false, user: null };
    }

    const storedUser = JSON.parse(userStr);
    const validUser = getValidUser(storedUser);

    if (!validUser) {
      console.log("❌ Invalid stored user data");
      // Clean up invalid data
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      return { isAuthenticated: false, user: null };
    }

    console.log("✅ Valid authentication state found");
    return { isAuthenticated: true, user: validUser };
  } catch (error) {
    console.error("❌ Error checking auth state:", error);
    // Clean up corrupted data
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    return { isAuthenticated: false, user: null };
  }
};

// Initialize state from localStorage
const initialAuthState = checkAuthState();

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: initialAuthState.isAuthenticated,
    user: initialAuthState.user,
    loading: false,
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    
    login: (state, action) => {
      console.log("🔐 Login reducer called with:", action.payload);
      
      const validUser = getValidUser(action.payload);

      if (validUser) {
        console.log("✅ Login successful, updating state");
        
        state.isAuthenticated = true;
        state.user = validUser;
        state.loading = false;
        state.error = null;

        // Store in localStorage
        localStorage.setItem("user", JSON.stringify(validUser));
        
        // Store token separately for easier access
        if (validUser.token) {
          localStorage.setItem("authToken", validUser.token);
        }

        console.log("💾 User data stored in localStorage");
      } else {
        console.log("❌ Login failed - invalid user data");
        
        state.isAuthenticated = false;
        state.user = null;
        state.loading = false;
        state.error = "Invalid user data received";

        // Clean up localStorage
        localStorage.removeItem("user");
        localStorage.removeItem("authToken");
      }
    },

    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },

    logout: (state) => {
      console.log("🚪 Logging out user");
      
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = null;
      
      // Clean up localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("authToken");
      
      console.log("🧹 localStorage cleared");
    },

    clearError: (state) => {
      state.error = null;
    },

    // Action to manually refresh auth state from localStorage
    refreshAuthState: (state) => {
      console.log("🔄 Refreshing auth state");
      const authState = checkAuthState();
      state.isAuthenticated = authState.isAuthenticated;
      state.user = authState.user;
    }
  },
});

export const { 
  loginStart, 
  login, 
  loginFailure, 
  logout, 
  clearError, 
  refreshAuthState 
} = authSlice.actions;

export default authSlice.reducer;

// Selector helpers
export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthLoading = (state) => state.auth.loading;
export const selectAuthError = (state) => state.auth.error;