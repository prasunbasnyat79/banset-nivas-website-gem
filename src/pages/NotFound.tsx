
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";

const NotFound = () => {
  return (
    <PageLayout>
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! The page you're looking for cannot be found.
        </p>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </PageLayout>
  );
};

export default NotFound;
