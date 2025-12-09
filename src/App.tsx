import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import EssentialOils from "./pages/EssentialOils";
import CarrierOils from "./pages/CarrierOils";
import NaturalExtracts from "./pages/NaturalExtracts";
import Wholesale from "./pages/Wholesale";
import Quality from "./pages/Quality";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ChatBox from "./components/ChatBox";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/essential-oils" element={<EssentialOils />} />
          <Route path="/products/carrier-oils" element={<CarrierOils />} />
          <Route path="/products/natural-extracts" element={<NaturalExtracts />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBox />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
