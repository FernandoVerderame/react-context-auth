import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import Posts from "./pages/Posts.jsx";
import PostDetail from "./pages/PostDeatil.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import { GlobalProvider } from "./contexts/GlobalContext.jsx";
import EditPost from "./pages/EditPost.jsx";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="posts">
              <Route index element={<Posts />} />
              <Route path=":slug" >
                <Route index element={<PostDetail />} />
                <Route path="edit" element={<EditPost />} />
              </ Route>
              <Route path="create" element={<CreatePost />} />
            </Route>
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;