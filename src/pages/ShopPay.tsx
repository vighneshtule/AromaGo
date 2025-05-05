
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ShopPay = () => {
  const { toast } = useToast();
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const locations = [
    {
      id: "phoenix",
      name: "Phoenix Marketcity",
      address: "Whitefield, Bangalore",
      machines: 3,
    },
    {
      id: "inorbit",
      name: "InOrbit Mall",
      address: "Malad West, Mumbai",
      machines: 2,
    },
    {
      id: "dlf",
      name: "DLF Cyber Hub",
      address: "Gurgaon, Delhi NCR",
      machines: 4,
    },
    {
      id: "metro",
      name: "Bangalore Metro",
      address: "MG Road Station",
      machines: 1,
    },
    {
      id: "forum",
      name: "Forum Mall",
      address: "Koramangala, Bangalore",
      machines: 2,
    },
  ];

  const prices = [
    { id: "price5", amount: "Rs. 5", sprays: 1 },
    { id: "price10", amount: "Rs. 10", sprays: 2 },
    { id: "price20", amount: "Rs. 20", sprays: 5 },
    { id: "price50", amount: "Rs. 50", sprays: 15 },
  ];

  const handlePay = () => {
    toast({
      title: "Payment Integration Coming Soon!",
      description: `This will connect to a payment gateway for ${selectedPrice} at ${
        locations.find((loc) => loc.id === selectedLocation)?.name
      }.`,
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-electric-blue/5 to-electric-violet/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-blue to-electric-violet bg-clip-text text-transparent">
              Find & Pay
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Locate a ScentSpark machine near you or pre-pay for fragrance credits.
          </p>
        </div>
      </section>

      {/* Location Finder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-electric-blue to-electric-violet bg-clip-text text-transparent">
              Find a Machine
            </span>
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-xl h-80 md:h-full flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-electric-blue to-electric-violet mx-auto mb-4 flex items-center justify-center text-white">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Interactive Map</h3>
                  <p className="text-gray-600">
                    Map integration coming soon. For now, please select a location from the list.
                  </p>
                </div>
              </div>

              {/* Location List */}
              <div className="space-y-4">
                <h3 className="font-bold text-xl mb-4">Available Locations</h3>
                
                {locations.map((location) => (
                  <Card 
                    key={location.id}
                    className={`hover-scale transition-all duration-300 cursor-pointer ${
                      selectedLocation === location.id 
                        ? "border-electric-violet ring-2 ring-electric-violet/30" 
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedLocation(location.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-bold">{location.name}</h4>
                          <p className="text-sm text-gray-600">{location.address}</p>
                        </div>
                        <div className="text-sm text-gray-600">
                          {location.machines} {location.machines > 1 ? "machines" : "machine"}
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

      {/* Prepay Section */}
      <section className="py-16 bg-gradient-to-br from-electric-blue/5 to-electric-violet/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-electric-blue to-electric-violet bg-clip-text text-transparent">
              Pre-pay for Sprays
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-xl mb-6">Select a Package</h3>
                  <div className="space-y-4">
                    {prices.map((price) => (
                      <Card 
                        key={price.id}
                        className={`hover-scale transition-all duration-300 cursor-pointer ${
                          selectedPrice === price.amount
                            ? "border-electric-violet ring-2 ring-electric-violet/30" 
                            : "border-gray-200"
                        }`}
                        onClick={() => setSelectedPrice(price.amount)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center">
                            <div className="font-bold text-xl">{price.amount}</div>
                            <div className="text-gray-600">{price.sprays} spray{price.sprays > 1 ? "s" : ""}</div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-xl mb-6">Payment Summary</h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Selected Location:</span>
                          <span className="font-medium">
                            {selectedLocation 
                              ? locations.find(loc => loc.id === selectedLocation)?.name
                              : "None selected"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Selected Package:</span>
                          <span className="font-medium">{selectedPrice || "None selected"}</span>
                        </div>
                        {selectedPrice && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Number of Sprays:</span>
                            <span className="font-medium">
                              {prices.find(price => price.amount === selectedPrice)?.sprays}
                            </span>
                          </div>
                        )}
                        
                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex justify-between font-bold">
                            <span>Total:</span>
                            <span>{selectedPrice || "Rs. 0"}</span>
                          </div>
                        </div>
                        
                        <Button 
                          className="w-full bg-gradient-electric hover:opacity-90 text-white rounded-full px-8 py-2.5 font-medium transition-all duration-300 shadow-md hover:shadow-lg mt-4"
                          disabled={!selectedLocation || !selectedPrice}
                          onClick={handlePay}
                        >
                          Proceed to Payment
                        </Button>
                        
                        <p className="text-xs text-gray-500 text-center mt-2">
                          Secure payments via Razorpay/UPI
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Card Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-pastel-purple to-pastel-blue rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-3/5 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Gift the Experience</h2>
                <p className="text-gray-700 mb-6">
                  Looking for a unique gift? Give the gift of instant luxury with a ScentSpark gift card.
                  Perfect for birthdays, anniversaries, or just because.
                </p>
                <Button 
                  className="bg-gradient-electric hover:opacity-90 text-white rounded-full px-8 py-2.5 font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => {
                    toast({
                      title: "Gift Cards Coming Soon!",
                      description: "This feature will be available in our next update.",
                    });
                  }}
                >
                  Gift a Card
                </Button>
              </div>
              <div className="md:w-2/5 text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg inline-block transform rotate-3 hover-scale">
                  <div className="bg-gradient-to-r from-electric-blue to-electric-violet p-1 rounded-lg">
                    <div className="bg-white rounded-lg p-6">
                      <h3 className="font-bold text-xl mb-2">ScentSpark Gift Card</h3>
                      <p className="text-gray-600 mb-4">A perfect gift for fragrance lovers</p>
                      <p className="text-3xl font-bold text-electric-violet">Rs. 100</p>
                      <p className="text-sm text-gray-500 mt-2">20 Premium Sprays</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ShopPay;
