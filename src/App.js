import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Favorite from "./routes/favorite/favorite.component";
import NoPage from "./routes/no-page/no-page.component";
import { FavoritesProvider } from "./contexts/favorites.context";

const App = () => {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/favorite" element={<Favorite />}/>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
