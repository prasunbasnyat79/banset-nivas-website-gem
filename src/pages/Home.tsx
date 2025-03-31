
import { PageLayout } from "@/components/PageLayout";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <PageLayout>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="house.jpg"
            alt="Banset Niwās"
            className="w-full h-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <h1 className={cn(
            "text-4xl md:text-6xl lg:text-7xl text-white font-medium tracking-tight text-center",
            "animate-fade-in"
          )}>
            Banset Niwās
          </h1>
          <p className={cn(
            "mt-4 text-xl md:text-2xl text-white/90 text-center max-w-2xl",
            "animate-fade-in"
          )}>
            A Home in the Heart of Inaruwa
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
