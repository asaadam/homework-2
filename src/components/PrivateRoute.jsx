import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({
  children,
  ...rest
}) {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
    else {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      {isAuthenticated ? (
         children 
      ) : (
        <h1>Not authenticated</h1>
      )}
    </div>
  );
}