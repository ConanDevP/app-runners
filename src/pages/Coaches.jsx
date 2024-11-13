import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function Coaches() {
  return (
    <div className="pt-16">
      {/* HeroI'll help you create a complete React application that matches the VO2 website design. Let's continue with the Coaches page and Calculator page.

<boltArtifact id="vo2-website-pages" title="VO2 Website Additional Pages">
<boltAction type="file" filePath="src/pages/Coaches.jsx">import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function Coaches() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Get V.O2 for coaches free for 1 month
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your $32.99/Month after 30-day free trial. Cancel anytime.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Focus on quality, not paces</h3>
              <p className="text-gray-600">
                VDOT paces are automatically generated to save time with personalization.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Gain useful insights</h3>
              <p className="text-gray-600">
                Review athletic GPS and workout feedback from your computer or mobile app.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Milestone management</h3>
              <p className="text-gray-600">
                Guide athletes in real-time with workout paces and communication tools.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Save time with templates</h3>
              <p className="text-gray-600">
                Create and save templates for notes, workouts, races, and more.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Coaches;