import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import Posts from "./pages/Posts.jsx";
import PostDetail from "./pages/PostDeatil.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="posts">
            <Route index element={<Posts />} />
            <Route path=":slug" element={<PostDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;