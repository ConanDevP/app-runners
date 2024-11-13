import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function Athletes() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Adaptable performance-driven training
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Only $12.99/Month after Cancel anytime
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              14-day free trial
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Personalized Training</h3>
              <p className="text-gray-600 mb-4">
                Get customized training plans based on your current fitness level and goals.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Runner training"
                className="w-full h-64 object-cover rounded-lg"
              />
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Progress Tracking</h3>
              <p className="text-gray-600 mb-4">
                Monitor your improvements with detailed analytics and insights.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Running analytics"
                className="w-full h-64 object-cover rounded-lg"
              />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Athletes;