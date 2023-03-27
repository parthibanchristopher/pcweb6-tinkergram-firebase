import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Views/LoginPage";
import PostPageHome from "./Views/PostPageHome";
import SignUpPage from "./Views/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPageHome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


