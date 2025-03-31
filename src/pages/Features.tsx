
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Home, Clock, Landmark } from "lucide-react";

const Features = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <div className="container">
          <h1 className="page-title text-center">Key Features</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="mr-2 h-5 w-5" />
                  Architectural Design
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Banset Niwās features a <strong>white-walled boundary</strong> with a strategically placed <strong>right-side gate</strong>, 
                  creating a secure yet welcoming entrance.
                </p>
                <p>
                  The house itself is <strong>painted in a warm yellow</strong>, giving it a distinctive, inviting appearance 
                  that stands out in the neighborhood.
                </p>
                <p>
                  The ground floor boasts <strong>elegant tiled flooring</strong> that extends to the entrance, creating a sense of sophistication 
                  from the moment you arrive.
                </p>
                <p>
                  With approximately <strong>30 cubic meters of open tiled space</strong> at the front, the property offers ample room 
                  for gatherings or vehicle parking.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Located just a <strong>one-minute drive from the highway</strong>, Banset Niwās offers exceptional convenience for commuting 
                  and transportation.
                </p>
                <p>
                  The area is well-served by <strong>local transportation options</strong>, making it easy to reach even for those 
                  without personal vehicles.
                </p>
                <div className="pt-4">
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <Landmark className="mr-2 h-5 w-5" />
                    Nearby Landmarks
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Near Sakuwagachhi</li>
                    <li>Close proximity to Malpot</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Features;
