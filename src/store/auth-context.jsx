import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

// Dummy credentials for production
const DUMMY_USERS = {
  student: {
    email: "student@example.com",
    password: "student123",
    role: "student",
    name: "John Student",
    id: "1",
  },
  company: {
    email: "company@example.com",
    password: "company123",
    role: "company",
    name: "Tech Corp",
    id: "2",
  },
  faculty: {
    email: "faculty@example.com",
    password: "faculty123",
    role: "faculty",
    name: "Dr. Smith",
    id: "3",
  },
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data on mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // In production, check against dummy credentials
      const user = Object.values(DUMMY_USERS).find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // Create a dummy token
        const token = btoa(JSON.stringify({ id: user.id, role: user.role }));
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        return { success: true };
      }

      return {
        success: false,
        error: "Invalid email or password",
      };
    } catch {
      return {
        success: false,
        error: "Login failed",
      };
    }
  };

  const signup = async (userData) => {
    try {
      // In production, just simulate a successful signup
      const newUser = {
        ...userData,
        id: Date.now().toString(),
        role: "student", // Default role for new signups
      };

      const token = btoa(
        JSON.stringify({ id: newUser.id, role: newUser.role })
      );
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      return { success: true };
    } catch {
      return {
        success: false,
        error: "Signup failed",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
