
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FamilyMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const familyMembers: FamilyMember[] = [
  {
    name: "Rudra Basnet",
    role: "Father",
    description: "Social worker and business owner with deep ties to the community.",
    image: "father.PNG",
  },
  {
    name: "Ratna Basnet",
    role: "Mother",
    description: "Homemaker who has created a warm and loving environment for the family.",
    image: "mother.PNG",
  },
  {
    name: "Doshim Basnet",
    role: "Sister",
    description: "MBBS doctor at Birat Medical Teaching Hospital, dedicated to patient care.",
    image: "daughter.PNG",
  },
  {
    name: "Prasun Basnyat",
    role: "Son",
    description: "Pursuing a Bachelor's in Data Analytics at Northeastern University, Boston, USA.",
    image: "son.PNG",
  },
];

const Family = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <div className="container">
          <h1 className="page-title text-center">Family</h1>
          
          <div className="relative h-60 md:h-80 rounded-xl overflow-hidden my-8 max-w-4xl mx-auto">
            <img 
              src="family.jpg" 
              alt="Basnet Family" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-white text-2xl font-medium">The Basnet Family</h2>
              <p className="text-white/80">Residents of Banset Niwās</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-10">
            {familyMembers.map((member, index) => (
              <Card 
                key={index} 
                className={cn(
                  "overflow-hidden card-hover",
                  "animate-fade-in [animation-delay:var(--delay)]"
                )}
                style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="w-full sm:w-1/3 h-40 sm:h-auto">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-0">
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </CardHeader>
                    <CardContent>
                      <p>{member.description}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Family;
