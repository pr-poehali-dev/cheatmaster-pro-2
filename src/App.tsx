import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GamesCatalog from "./pages/GamesCatalog";
import CheatsCatalog from "./pages/CheatsCatalog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/games" element={<GamesCatalog />} />
          <Route path="/games/:gameId" element={<GamesCatalog />} />
          <Route path="/cheats" element={<CheatsCatalog />} />
          <Route path="/cheats/:cheatId" element={<CheatsCatalog />} />
          <Route path="/software" element={<CheatsCatalog />} />
          <Route path="/cart" element={<Index />} />
          <Route path="/checkout" element={<Index />} />
          <Route path="/profile" element={<Index />} />
          <Route path="/reviews" element={<Index />} />
          <Route path="/blog" element={<Index />} />
          <Route path="/admin" element={<Index />} />
          <Route path="/faq" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          <Route path="/terms" element={<Index />} />
          <Route path="/privacy" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
