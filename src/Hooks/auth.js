import axios from "axios";
import { API_BASE_URL } from "../Config/url";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../Store/slices/authSlice"; 
import { toastErr, toastInfo, toastSuccess } from "../Utilities/alertService";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      console.log("🔐 Sending login request with:", { email });

      const response = await axios.post(`${API_BASE_URL}/login`, { 
        email, 
        password 
      });

      console.log("📨 Login response received:", response.data);

      const { token, data: user, message, success, ...otherData } = response.data;

      // Validate that we have the required data
      if (!token) {
        throw new Error("No token received from server");
      }

      if (!user) {
        throw new Error("No user data received from server");
      }

      // Log the user data for debugging
      console.log("👤 User data from server:", user);
      console.log("🔑 Token received:", token ? "✅" : "❌");
      console.log("✅ Success:", success);
      console.log("💬 Message:", message);

      // Prepare user data for Redux store
      const userData = {
        ...user,
        token, // Include token in user data
      };

      console.log("🏪 Dispatching login action with:", userData);

      // Dispatch login action to update Redux store
      dispatch(loginAction(userData));

      // Show success message
      toastSuccess("Login successful!");

      setLoading(false);

      // Navigate to dashboard
      navigate("/dashboard");

      return response.data;
    } catch (err) {
      console.error("❌ Error during login:", {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status
      });

      const errorMessage = err.response?.data?.message || err.message || "Login failed. Please try again.";
      
      setLoading(false);
      setError(errorMessage);
      
      // Show error message
      toastErr(errorMessage);

      throw err; // Re-throw for component handling if needed
    }
  };

  return { login, loading, error };
};

export const useForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  const forgotPassword = async (email) => {
    setLoading(true);

    try {
      console.log("Sending forgot password request with:", { email });

      const response = await axios.post(`${API_BASE_URL}/forgot-password`, { email });

      console.log("Response received:", response);

      toastSuccess(response.data.message || "Password reset link sent.");
      setLoading(false);
      return response.data;
    } catch (err) {
      console.error("Error during forgot password:", err.response?.data || err.message);
      setLoading(false);
      toastErr(err.response?.data?.message || "An error occurred.");
    }
  };

  return { forgotPassword, loading, };
};

const INACTIVITY_LIMIT = 1 * 60 * 1000

export const useAutoLogout = () => {
  const navigate = useNavigate()
  const timeoutRef = useRef(null)

  const logoutUser = () => {
    const wasInactive = true;
    localStorage.removeItem('authToken');
    if (wasInactive) {
      toastInfo('You have been logged out due to inactivity.');
    }
    navigate('/login');
  };

  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      logoutUser()
    }, INACTIVITY_LIMIT)
  }

  useEffect(() => {
    const events = ['mousemove', 'mousedown', 'click', 'scroll', 'keypress']

    const handleActivity = () => resetTimer()

    events.forEach(event =>
      window.addEventListener(event, handleActivity)
    )

    resetTimer()

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      events.forEach(event =>
        window.removeEventListener(event, handleActivity)
      )
    }
  }, [])
}


export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const logout = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("No authentication token found");
      }

      await axios.post(
        `${API_BASE_URL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("authToken");
      window.location.href = "/login";
    } catch (err) {
      console.error("Logout error:", err.message);
      setError(err.response?.data?.message || "Failed to log out");
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading, error };
};

export const useUserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get(`${API_BASE_URL}/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data.data);
        console.log(response)
      } catch (err) {
        toast.error(err.response?.data?.message || "Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  return { profile, loading };
};
