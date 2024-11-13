import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-black to-gray-800">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold text-white mb-6">
              Where running meets science
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              VO2 is a coaching app for athletes of all abilities to reach their full potential.
            </p>
            <div className="flex gap-4">
              <Button size="lg">For Athletes</Button>
              <Button size="lg" variant="outline">For Coaches</Button>
            </div>
          </div>
          <div className="w-1/2">
            <Card className="p-6 max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-4">VDOT Running Calculator</h2>
              {/* Calculator form would go here */}
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Take your running to the next level</h2>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {/* Feature cards */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Focus on quality, not paces</h3>
              <p>VDOT paces are automatically generated to save time with personalization.</p>
            </Card>
            {/* Add more feature cards */}
          </div>
        </divI'll help you create a React application that matches the VO2 website design using shadcn/ui and React Router DOM. Let's break this down into components and pages.

<boltArtifact id="vo2-website-clone" title="Complete VO2 Website Clone">
<boltAction type="file" filePath="src/pages/Home.jsx">import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-16 min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Where running meets science
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                VO2 is a coaching app for athletes of all abilities to reach their full potential.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-[#84cc16] hover:bg-[#65a30d] text-white">
                  For Athletes
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  For Coaches
                </Button>
              </div>
            </div>

            <Card className="bg-white p-6">
              <h2 className="text-2xl font-bold mb-6 text-black">VDOT Running Calculator</h2>
              <div className="space-y-4">
                <div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Event Distance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k">5K</SelectItem>
                      <SelectItem value="10k">10K</SelectItem>
                      <SelectItem value="half">Half Marathon</SelectItem>
                      <SelectItem value="full">Marathon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Input type="text" placeholder="Time (hh:mm:ss)" />
                </div>
                <div>
                  <Input type="text" placeholder="Pace (min/mi)" />
                </div>
                <Button className="w-full bg-[#84cc16] hover:bg-[#65a30d]">
                  Calculate
                </Button>
                <div className="text-center">
                  <a href="#" className="text-sm text-green-600">Advanced Features</a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold">Take your running to the next level</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <feature.icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Why VDOT is the most effective way to train for runners...
          </h2>
          <div className="max-w-2xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="what-is-vdot">
                <AccordionTrigger>What is VDOT?</AccordionTrigger>
                <AccordionContent>
                  VDOT is a measure of your current running ability and fitness level...
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="who-is-it-for">
                <AccordionTrigger>Does VDOT work for anyone?</AccordionTrigger>
                <AccordionContent>
                  Yes! VDOT works for runners of all levels, from beginners to elite athletes...
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="how-it-works">
                <AccordionTrigger>How does VDOT make me a faster runner?</AccordionTrigger>
                <AccordionContent>
                  VDOT provides personalized training paces based on your current fitness level...
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Focus on quality, not paces",
    description: "VDOT paces are automatically generated to save time with personalization.",
    icon: () => <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">🎯</div>
  },
  {
    title: "Gain useful insights",
    description: "Review athletic GPS and workout feedback from your computer or on-the-go using the mobile app.",
    icon: () => <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">📊</div>
  },
  {
    title: "Milestone management",
    description: "Workout paces to Coach and athlete communication devices to guide athletes in real-time.",
    icon: () => <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">🏃</div>
  },
  {
    title: "Save time with templates",
    description: "Spend more time coaching, not making tasks by saving templates with notes, workouts, races, etc.",
    icon: () => <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">⚡</div>
  }
];

export default Home;