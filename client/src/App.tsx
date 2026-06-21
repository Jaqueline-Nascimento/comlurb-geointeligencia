import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import MundoGEO from "./pages/MundoGEO";
import Cursos from "./pages/Cursos";
import Palestras from "./pages/Palestras";
import Geointeligencia from "./pages/Geointeligencia";
import Projetos from "./pages/Projetos";
import ApresentacaoPresidencia from './pages/ApresentacaoPresidencia';
import PitchDeck from './pages/PitchDeck';
import Insights from './pages/Insights';


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/mundogeo"} component={MundoGEO} />
      <Route path={"/cursos"} component={Cursos} />
      <Route path={"/palestras"} component={Palestras} />
      <Route path={"geointeligencia"} component={Geointeligencia} />
      <Route path={"projetos"} component={Projetos} />
      <Route path="/apresentacao-presidencia" component={ApresentacaoPresidencia} />
      <Route path="/pitch-deck" component={PitchDeck} />
      <Route path="/insights" component={Insights} />
      <Route path="*" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
