import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Register from './pages/register';
import Login from './pages/login';
import PrivateRoute from './components/PrivateRoute';

function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const { data } = await axios.get('http://localhost:8000');
        setData(data);
      }
      catch (err) {
        window.alert("Something wrong");
      }
      setLoading(false);
    };

    fetchData();

  }, []);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {data?.map(pokemon => {
        return (
          <div>
            <h1>{pokemon.name.english}</h1>
            <div style={{ display: 'flex' }}>
              <h2>Type</h2>
              {pokemon.type.map((type, index) => {
                return (
                  <div>
                    <h3>{type}{index !== pokemon.type.length - 1 && ","} </h3>
                  </div>
                );
              })
              }
            </div>
          </div>
        );
      })}
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}

function DashboardDetails() {
  return (
    <div>
      <ul>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
      </ul>
      <h1>Dashboard Details</h1>
    </div>
  );
}

function Dashboard() {

  useEffect(() => {
    const fetchDataUsers = async () => {
      try {
        const res = await axios.get('http://localhost:8000/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        console.log("res", res);
      }
      catch (e) {
        window.alert(e.response.data.message || "Something wrong");
      }
    };
    fetchDataUsers();
  }, []);

  return (
    <div>
      <ul>
        <li>
          <a href="/dashboard/details">DashboardDetail</a>
        </li>
      </ul>
      <h1>Dashboard</h1>
    </div>
  );
}

function User() {
  let { userId } = useParams();

  return (
    <div>
      <h1>{userId}</h1>
    </div>
  );
}

function Upload() {
  const [file, setFile] = useState(null);
  return (
    <div>
      <h1>Upload</h1>
      <input type='file' onChange={(e) => {
        setFile(e.target.files[0]);
      }} />
      <button onClick={
        async () => {

          if (!file) {
            window.alert("Please select a file");
            return;
          }
          const formData = new FormData();
          formData.append('file', file);

          try {
            const res = await axios.post('http://localhost:8000/upload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            console.log("res", res);
            window.alert("Upload success");
          }
          catch (e) {
            window.alert("Something wrong");
          }

        }
      }>Upload</button>
    </div>
  );
}




function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          {
            localStorage.getItem('token') && <li>
              <button onClick={() => {
                localStorage.removeItem('token');
                window.location.href = '/login';
              }}>Logout</button>
            </li>
          }

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />
        <Route path="/users" element={
          <h1>Test</h1>
        } />
        <Route path='/register' element={<Register />} />
        <Route path='/user/:userId/' element={<User />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='login' element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
