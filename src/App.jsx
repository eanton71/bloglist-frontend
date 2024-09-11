import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import LoginForm from "./components/LoginForm";
import blogService from "./services/blogs";
import loginService from "./services/login";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //variable de estado para el token de autenticacion
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  //funcion para manejar el evento de formulario de inicio de sesion
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      console.log(username, password);
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem("loggedBlogListAppUser", JSON.stringify(user)); 
      blogService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
      setLogged(true);
    } catch (exception) {
      //setErrorMessage("Wrong credentials");
      console.log(exception);
      setTimeout(() => {
        //setErrorMessage(null);
      }, 5000);
    }
  };
  /**
   * 
   */
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogListAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);
  /***
   * manejadores de eventos asociados al estado de los inputs
   */
  const handleChange = {
    username: (event) => {
      setUsername(event.target.value);
    },
    password: (event) => {
      setPassword(event.target.value);
    },
    logout: (event) => {
      setUser(null);
      window.localStorage.removeItem("loggedBlogListAppUser");
    },
  };


  return (
    <div>
      <h2>blogs</h2>
      {/* renderizado condicional de formualri ode inicio de sesion y de notas */}
      {user === null ? (
        <LoginForm
          handleLogin={handleLogin}
          setUsername={handleChange["username"]}
          setPassword={handleChange["password"]}
          username={username}
          password={password}
        />
      ) : (
        <div>
          <p>{user.name} logged-in</p>
          <button
            type="submit"
            onClick={  handleChange["logout"]}
          >
            logout
          </button>
        </div>
      )}

      {/* fin de forumulario de iniio de sesion */}
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default App;
