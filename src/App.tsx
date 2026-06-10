import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Auth from "./pages/Auth.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import FindGroups from "./pages/FindGroups.tsx";
import GroupDetail from "./pages/GroupDetail.tsx";
import CreateGroup from "./pages/CreateGroup.tsx";
import Profile from "./pages/Profile.tsx";
import Messages from "./pages/Messages.tsx";
import Help from "./pages/Help.tsx";
import Accessibility from "./pages/Accessibility.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/groups" element={<FindGroups />} />
          <Route path="/groups/create" element={<CreateGroup />} />
          <Route path="/groups/:id" element={<GroupDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/help" element={<Help />} />
          <Route path="/accessibility" element={<Accessibility />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
