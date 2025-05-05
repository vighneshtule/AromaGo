
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);
  
  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: "Choose a Scent",
      description: "Browse and select from five premium fragrance options on our touchscreen display.",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-10 w-10" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      color: "from-electric-blue to-electric-violet",
    },
    {
      title: "Scan & Pay",
      description: "Scan the QR code and pay instantly via UPI. Quick, secure, and contactless.",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-10 w-10" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
          />
        </svg>
      ),
      color: "from-neon-pink to-neon-orange",
    },
    {
      title: "Enjoy Your Spray",
      description: "Stand in position and experience the perfect amount of premium fragrance.",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-10 w-10" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "from-pastel-purple to-pastel-blue",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-electric-blue/5 to-electric-violet/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-blue to-electric-violet bg-clip-text text-transparent">
              How It Works
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Experience premium fragrance in three simple steps. ScentSpark makes luxury accessible anywhere, anytime.
          </p>
        </div>
      </section>

      {/* Interactive Steps Section */}
      <section className="py-16 bg-white" ref={stepsRef}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Step Visualization */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative h-[500px] w-full md:w-[400px] mx-auto">
                {/* Vending Machine Base */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-96 bg-gray-100 rounded-3xl shadow-xl overflow-hidden">
                  {/* Machine Screen */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-48 h-32 bg-white rounded-lg shadow-inner overflow-hidden">
                    {/* Screen content changes based on active step */}
                    {activeStep === 0 && (
                      <div className="h-full w-full bg-gradient-to-br from-electric-blue/20 to-electric-violet/20 p-4 flex flex-col items-center justify-center text-center transition-all duration-300">
                        <div className="text-sm font-bold text-gray-800 mb-2">Select Fragrance</div>
                        <div className="flex justify-around w-full">
                          <div className="w-6 h-6 rounded-full bg-pastel-pink"></div>
                          <div className="w-6 h-6 rounded-full bg-pastel-blue"></div>
                          <div className="w-6 h-6 rounded-full bg-pastel-purple"></div>
                          <div className="w-6 h-6 rounded-full bg-pastel-yellow"></div>
                        </div>
                      </div>
                    )}
                    {activeStep === 1 && (
                      <div className="h-full w-full bg-gradient-to-br from-neon-pink/20 to-neon-orange/20 p-4 flex flex-col items-center justify-center text-center transition-all duration-300">
                        <div className="text-sm font-bold text-gray-800 mb-2">Scan to Pay</div>
                        <div className="w-16 h-16 bg-gray-800 mx-auto"></div>
                      </div>
                    )}
                    {activeStep === 2 && (
                      <div className="h-full w-full bg-gradient-to-br from-pastel-purple/30 to-pastel-blue/30 p-4 flex flex-col items-center justify-center text-center transition-all duration-300">
                        <div className="text-sm font-bold text-gray-800 mb-2">Ready!</div>
                        <div className="text-xs text-gray-700">Please stand in position</div>
                        <div className="mt-2 w-6 h-6 bg-green-500 rounded-full mx-auto animate-pulse"></div>
                      </div>
                    )}
                  </div>

                  {/* Payment Section */}
                  <div className="absolute top-52 left-1/2 transform -translate-x-1/2 w-48 h-20 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-600 font-medium">UPI Payment</span>
                  </div>

                  {/* Spray Outlet */}
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xs text-gray-800">Spray Outlet</span>
                  </div>

                  {/* Spray Animation */}
                  {activeStep === 2 && (
                    <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className="absolute w-4 h-4 rounded-full"
                          style={{
                            backgroundColor: `rgba(155, 135, 245, ${0.3 - i * 0.05})`,
                            transform: `scale(${1 + i * 0.4})`,
                            left: `${i * 4 - 10}px`,
                            bottom: `${i * 8}px`,
                            animation: `spray 2s ease-out infinite ${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Circular Steps Indicators */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeStep === index 
                          ? "bg-electric-violet scale-125" 
                          : "bg-gray-300"
                      }`}
                      onClick={() => setActiveStep(index)}
                      aria-label={`Step ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step Details */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <Card 
                    key={index}
                    className={`hover-scale transition-all duration-500 ${
                      activeStep === index 
                        ? "border border-electric-violet/50 shadow-lg scale-105" 
                        : "border border-gray-200 opacity-70"
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r ${step.color} text-white`}>
                          {step.icon}
                        </div>
                        <div className="ml-6">
                          <h3 className="text-xl font-bold flex items-center">
                            <span className="mr-2">{index + 1}.</span>
                            {step.title}
                          </h3>
                          <p className="mt-2 text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-electric-blue/5 to-electric-violet/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-electric-blue to-electric-violet bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-scale border-electric-blue/20 hover:border-electric-blue/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">How much fragrance is dispensed?</h3>
                <p className="text-gray-600">
                  Each spray delivers the perfect amount of fragrance (approximately 0.5ml) - enough to provide 
                  a noticeable scent without being overwhelming.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-electric-violet/20 hover:border-electric-violet/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">How long does the scent last?</h3>
                <p className="text-gray-600">
                  Our premium fragrances are designed to last 4-6 hours, providing the perfect amount of scent for meetings, 
                  dates, or social events.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-electric-violet/20 hover:border-electric-violet/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Where are the machines located?</h3>
                <p className="text-gray-600">
                  Our vending machines are strategically placed in premium malls, metro stations, and office complexes 
                  across major cities. Check the "Find a Machine" section for exact locations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-electric-blue/20 hover:border-electric-blue/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Is it hygienic?</h3>
                <p className="text-gray-600">
                  Absolutely! Our system is 100% touchless and the fragrance is dispensed as a fine mist from a comfortable distance,
                  ensuring complete hygiene.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to experience ScentSpark?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Find a machine near you or pre-purchase spray credits for your next fragrance experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button className="bg-gradient-electric hover:opacity-90 text-white rounded-full px-8 py-2.5 font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                Find a Machine
              </Button>
            </Link>
            <Link to="/perfumes">
              <Button variant="outline" className="border-electric-violet text-electric-violet hover:bg-electric-violet/10 rounded-full px-8 py-2.5 font-medium transition-all duration-300">
                Explore Fragrances
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
