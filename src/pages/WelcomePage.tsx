import { useState } from "react";
import { FileText, Code, Eye, Zap, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";

const WelcomePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    setIsLoading(true);
    // Navigate to the main application after a brief delay
    setTimeout(() => {
      window.location.href = "/home";
    }, 800);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br  bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 via-transparent to-green-950 pointer-events-none bg-[length:400%_400%] animate-pulse" />

      {/* Floating orbs for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 rounded-full bg-accent/10 blur-3xl animate-pulse [animation-delay:2s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-teal/10 blur-2xl animate-bounce" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Logo/Icon */}
          <div className="animate-in mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-2xl shadow-primary/20 animate-bounce">
              <FileText className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
          </div>

          {/* Title */}
          <h1 className="animate-in text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 [animation-delay:0.2s]">
            <span className="text-foreground">Markdown</span>
            <span className="text-primary"> Preview</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed [animation-delay:0.4s]">
            Write, preview, and perfect your markdown in real-time. 
            A beautiful, distraction-free editor built for developers.
          </p>

          {/* Feature badges */}
          <div className="animate-fade-in flex flex-wrap items-center justify-center gap-3 mb-10 [animation-delay:0.4s]">
            <FeatureBadge icon={<Code className="w-4 h-4" />} text="Syntax Highlighting" />
            <FeatureBadge icon={<Eye className="w-4 h-4" />} text="Live Preview" />
            <FeatureBadge icon={<Zap className="w-4 h-4" />} text="Instant Rendering" />
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in [animation-delay:0.6s]">
            <Button
              variant="ghost"
              size="lg"
              onClick={handleGetStarted}
              disabled={isLoading}
              className="group transition-all duration-300 hover:scale-105"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  Get Started
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </div>

          {/* Additional info */}
          <p className="animate-in mt-8 text-sm text-muted-foreground/70 [animation-delay:0.6s]">
            Built with React & TypeScript • Fast & Lightweight
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 via-transparent to-green-950 pointer-events-none animate-pulse" />
    </div>
  );
};

interface FeatureBadgeProps {
  icon: React.ReactNode;
  text: string;
}

const FeatureBadge = ({ icon, text }: FeatureBadgeProps) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300">
    <span className="text-primary">{icon}</span>
    <span>{text}</span>
  </div>
);

export default WelcomePage;