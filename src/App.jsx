import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./store/auth-context";
import AppRoutes from "./routes/routes";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50">
          <AppRoutes />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
