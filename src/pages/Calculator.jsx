import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Calculator() {
  const [eventDistance, setEventDistance] = useState('');
  const [time, setTime] = useState('');
  const [pace, setPace] = useState('');

  const handleCalculate = () => {
    // Add calculation logic here
    console.log('Calculating...', { eventDistance, time, pace });
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 bg-white text-black">
              <h1 className="text-3xl font-bold mb-8">VDOT Running Calculator</h1>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="event">Event Distance</Label>
                  <Select value={eventDistance} onValueChange={setEventDistance}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event distance" />
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
                  <Label htmlFor="time">Time (hh:mm:ss)</Label>
                  <Input 
                    id="time" 
                    placeholder="00:00:00" 
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="pace">Pace (min/mi)</Label>
                  <Input 
                    id="pace" 
                    placeholder="00:00" 
                    value={pace}
                    onChange={(e) => setPace(e.target.value)}
                  />
                </div>

                <Button 
                  className="w-full bg-[#84cc16] hover:bg-[#65a30d] text-white"
                  onClick={handleCalculate}
                >
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

      {/* Training Zones Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Training Zones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Easy</h3>
              <p className="text-gray-600">65-75% of max heart rate</p>
              <div className="mt-4 h-2 bg-green-200 rounded"></div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Tempo</h3>
              <p className="text-gray-600">76-85% of max heart rate</p>
              <div className="mt-4 h-2 bg-yellow-200 rounded"></div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Race Pace</h3>
              <p className="text-gray-600">86-95% of max heart rate</p>
              <div className="mt-4 h-2 bg-red-200 rounded"></div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Calculator;