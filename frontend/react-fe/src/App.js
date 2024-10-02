import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/index.tsx";
import { Browse } from "./pages/browse/index.tsx";
import { View } from "./pages/view/index.tsx";
import { MovieSearch } from "./pages/search/index.tsx";
import { MovieReturn } from "./pages/returns/index.tsx";
import { Checkout } from "./pages/checkout/index.tsx";
import { ErrorPage } from "./pages/error/index.tsx";
import { CartProvider } from "./context/context.tsx";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/view/:id" element={<View />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/search" element={<MovieSearch />} />
            <Route path="/returns" element={<MovieReturn />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
