import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {


  const navigate = useNavigate();

  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          // make sure password is match
          if (e.target.password.value !== e.target.password2.value) {
            window.alert("Password is not match");
            return;
          }
          // http request 
          try {
            await axios.post('http://localhost:8000/register', {
              name: e.target.username.value,
              email: e.target.email.value,
              password: e.target.password.value
            });
            window.alert("Register success");
            navigate("/login");
          }
          catch (e) {
            window.alert("Something wrong");
          }

        }}
        style={{
          display: 'flex',
          flexDirection: "column"
        }}>
        <label style={{ marginTop: 8, marginBottom: 8 }}>
          Username:
          <input required type="text" name="username" />
        </label>
        <label style={{ marginTop: 8, marginBottom: 8 }}>
          Email:
          <input required type="email" name="email" />
        </label>
        <label required style={{ marginTop: 8, marginBottom: 8 }}>
          Password:
          <input type="password" name="password" />
        </label>
        <label required style={{ marginTop: 8, marginBottom: 8 }}>
          Confirm Password:
          <input type="password" name="password2" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}