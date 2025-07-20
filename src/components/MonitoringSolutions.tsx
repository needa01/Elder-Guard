"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import indoorCamera from "@/assets/product1.jpeg";
import outdoorCamera from "@/assets/product2.jpeg";

const MonitoringSolutions = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Popular Elderly Monitoring Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Indoor Wi-Fi Cameras */}
          <Card className="overflow-hidden border-0 shadow-lg bg-card">
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={indoorCamera}
                alt="Indoor Wi-Fi Camera on shelf"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                Indoor Wi-Fi Cameras
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Easy to set up and easy to use, Lorex Indoor Wi-Fi Cameras are a
                perfect solution to keep an eye on your elderly relatives while
                you're away. Perfect for main areas within a home, apartment, or
                assisted living rooms.
              </p>
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-3 text-base font-medium"
              >
                Shop Now
              </Button>
            </CardContent>
          </Card>

          {/* Outdoor Wi-Fi Cameras */}
          <Card className="overflow-hidden border-0 shadow-lg bg-card">
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={outdoorCamera}
                alt="Outdoor Wi-Fi Camera mounted on building"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                Outdoor Wi-Fi Cameras
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Perfect for elderly relatives still living at home, outdoor
                Wi-Fi Cameras will help you ensure their safety as they work or
                relax outside. Plus, you will be made aware of any motion
                activity around their house, especially during off hours.
              </p>
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-3 text-base font-medium"
              >
                Shop Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSolutions;