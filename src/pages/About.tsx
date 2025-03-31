
import { PageLayout } from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <div className="container">
          <div className="page-content">
            <h1 className="page-title">About Banset Niwās</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="mb-10 space-y-6">
                <p className="text-lg leading-relaxed">
                  Banset Niwās stands as a testament to modern residential architecture in the heart of Inaruwa. 
                  Built <strong>20 years ago</strong>, this home represents not just a structure of brick and mortar, 
                  but a place where countless memories have been created and cherished.
                </p>
                
                <div className="relative h-60 md:h-80 overflow-hidden rounded-xl my-8">
                  <img 
                    src="https://images.unsplash.com/photo-1518005020951-eccb494ad742" 
                    alt="Banset Niwās Front View" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <p className="text-lg leading-relaxed">
                  This <strong>modern two-story house</strong> features a thoughtfully designed layout that balances 
                  functionality with aesthetic appeal. While not a generational home in the traditional sense, 
                  Banset Niwās holds deep significance for the Basnet family, serving as their primary residence 
                  and the center of family gatherings and celebrations.
                </p>
                
                <p className="text-lg leading-relaxed">
                  The house has evolved over the years, with improvements and renovations that reflect the changing 
                  needs and tastes of its residents, while maintaining its warm, welcoming character that defines 
                  it as truly a home, not just a house.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
