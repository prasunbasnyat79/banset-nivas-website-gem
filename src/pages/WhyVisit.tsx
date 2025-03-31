
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Package, MapPin } from "lucide-react";

const WhyVisit = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="page-title text-center">Why Visit Banset Niwās?</h1>
            
            <div className="space-y-8 mt-10">
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <CardTitle>For Guests & Relatives</CardTitle>
                  </div>
                  <CardDescription>Making your visit smooth and convenient</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    If you're visiting as a guest or relative, this website helps you locate Banset Niwās with ease. 
                    No more getting lost or making multiple phone calls for directions—simply follow the details 
                    provided here to reach your destination comfortably.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    <CardTitle>For Deliveries & Business Visits</CardTitle>
                  </div>
                  <CardDescription>Efficient and accurate location information</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    For delivery personnel and business visitors, knowing the exact location saves time and prevents 
                    confusion. Banset Niwās's distinctive yellow exterior and white boundary wall make it easy to 
                    identify, while its proximity to well-known landmarks helps with navigation.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <CardTitle>A Beautiful & Accessible Location</CardTitle>
                  </div>
                  <CardDescription>Convenience meets comfort</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">
                    Banset Niwās offers the perfect blend of peaceful residential living with convenient access to 
                    transportation. Located just a minute's drive from the highway and close to local landmarks, 
                    it combines the tranquility of a private home with the practicality of easy access.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default WhyVisit;
