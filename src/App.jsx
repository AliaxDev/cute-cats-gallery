import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/Hero";
import SectionMain from "./components/SectionMain";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ThemeToggle />
      <Hero />
      <QueryClientProvider client={queryClient}>
        <SectionMain />
        <ScrollToTopButton />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
