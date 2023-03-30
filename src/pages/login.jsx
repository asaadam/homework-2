import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          // http request
          try {
            const res = await axios.post('http://localhost:8000/login', {
              email: e.target.email.value,
              password: e.target.password.value
            });
            console.log("res", res);
            // storing token in local storage
            localStorage.setItem("token", res.data.token);
            navigate("/");
          }
          catch (e) {
            window.alert(e.response.data.message || "Something wrong");
          }
        }}
        style={{
          display: 'flex',
          flexDirection: "column"
        }}>
        <label style={{ marginTop: 8, marginBottom: 8 }}>
          Email:
          <input required type="email" name="email"/>
        </label>
        <label required style={{ marginTop: 8, marginBottom: 8 }}>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <GoogleLogin
        onSuccess={credentialResponse => {
          // set the token in local storage
          window.localStorage.setItem("token", credentialResponse.credential);
          // redirect to home page
          navigate("/");
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />

    </div>
  );
}