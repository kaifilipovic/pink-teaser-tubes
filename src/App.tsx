import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Videos from "./pages/Videos";
import Actors from "./pages/Actors";
import Categories from "./pages/Categories";
import Tags from "./pages/Tags";
import NotFound from "./pages/NotFound";
import VideoDetail from "./pages/VideoDetail";
import CreatorDetail from "./pages/CreatorDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos/:id" element={<VideoDetail />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="/creators/:id" element={<CreatorDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
