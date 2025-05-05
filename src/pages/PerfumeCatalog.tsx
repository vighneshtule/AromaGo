
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

// Framer motion isn't directly installed, so let's mimic it with CSS animations
const AnimatedDiv = ({ children, onClick, className }: any) => (
  <div onClick={onClick} className={`${className} transition-all duration-500`}>
    {children}
  </div>
);

const PerfumeCatalog = () => {
  const [selectedPerfume, setSelectedPerfume] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState<number | null>(null);
  const spinWheelRef = useRef<HTMLDivElement>(null);
  
  const perfumes = [
    {
      id: 1,
      name: "Urban Mist",
      description: "A fresh, energizing blend with notes of citrus, mint, and subtle wood. Perfect for the dynamic professional on the move.",
      color: "bg-gradient-to-r from-pastel-blue to-electric-blue",
      icon: "💧",
      voteCount: 128,
    },
    {
      id: 2,
      name: "Violet Dreams",
      description: "A sophisticated floral with violet, jasmine, and a hint of vanilla. Elegance in every spray for special moments.",
      color: "bg-gradient-to-r from-pastel-purple to-electric-violet",
      icon: "🌸",
      voteCount: 155,
    },
    {
      id: 3,
      name: "Amber Rush",
      description: "Warm and inviting with amber, musk, and spice notes. Create a lasting impression with this seductive fragrance.",
      color: "bg-gradient-to-r from-neon-orange to-electric-violet",
      icon: "✨",
      voteCount: 107,
    },
    {
      id: 4,
      name: "Zesty Bloom",
      description: "Vibrant citrus notes blended with exotic flowers. An invigorating scent that brings energy to every occasion.",
      color: "bg-gradient-to-r from-pastel-yellow to-neon-orange",
      icon: "🍋",
      voteCount: 94,
    },
    {
      id: 5,
      name: "Midnight Sparkle",
      description: "A mysterious blend of dark berries, sandalwood, and vanilla. Captivating and perfect for evening events.",
      color: "bg-gradient-to-r from-electric-violet to-neon-pink",
      icon: "✨",
      voteCount: 136,
    },
  ];

  const handlePerfumeSelect = (id: number) => {
    setSelectedPerfume(id);
  };

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setSpinResult(null);
    
    // Random rotation between 2-8 full spins
    const rotations = 2 + Math.random() * 6;
    const degrees = rotations * 360;
    
    // Random winner (1-5)
    const randomPerfume = Math.floor(Math.random() * 5) + 1;
    
    if (spinWheelRef.current) {
      spinWheelRef.current.style.transition = "transform 4s cubic-bezier(0.2, 0.8, 0.2, 1)";
      spinWheelRef.current.style.transform = `rotate(${degrees}deg)`;
    }
    
    setTimeout(() => {
      setIsSpinning(false);
      setSpinResult(randomPerfume);
      setSelectedPerfume(randomPerfume);
    }, 4000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-electric-blue/5 to-electric-violet/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-blue to-electric-violet bg-clip-text text-transparent">
              Our Signature Scents
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Discover our curated collection of five premium fragrances, each crafted to match your unique style and personality.
          </p>
        </div>
      </section>

      {/* Perfume Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perfumes.map((perfume) => (
              <AnimatedDiv
                key={perfume.id}
                className={`hover-scale ${
                  selectedPerfume === perfume.id
                    ? "ring-4 ring-electric-violet/50 scale-105"
                    : ""
                }`}
                onClick={() => handlePerfumeSelect(perfume.id)}
              >
                <Card className="h-full border-0 shadow-lg overflow-hidden">
                  <div 
                    className={`h-32 ${perfume.color} flex items-center justify-center`}
                  >
                    <span className="text-5xl">{perfume.icon}</span>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{perfume.name}</h3>
                    <p className="text-gray-600 mb-4">{perfume.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium text-gray-500">
                          {perfume.voteCount} votes
                        </span>
                      </div>
                      <Button 
                        variant="ghost" 
                        className="text-electric-violet hover:text-electric-blue hover:bg-electric-violet/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePerfumeSelect(perfume.id);
                        }}
                      >
                        Vote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Perfume Wheel Game */}
      <section className="py-16 bg-gradient-to-br from-electric-blue/5 to-electric-violet/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-blue to-electric-violet bg-clip-text text-transparent">
              Can't Decide? Spin the Wheel!
            </span>
          </h2>
          <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
            Let fate decide your perfect fragrance. Spin the wheel and discover your signature scent!
          </p>

          <div className="relative max-w-md mx-auto">
            {/* Wheel Pointer */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 z-10">
              <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-t-[30px] border-l-transparent border-r-transparent border-t-electric-violet"></div>
            </div>
            
            {/* Spin Wheel */}
            <div 
              ref={spinWheelRef}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto border-8 border-electric-violet/50 overflow-hidden"
            >
              {perfumes.map((perfume, index) => {
                const angle = (index * 72) - 36; // 72 degrees per slice (360/5), offset by half a slice
                return (
                  <div 
                    key={perfume.id} 
                    className={`absolute top-0 left-0 w-1/2 h-full origin-right ${perfume.color}`}
                    style={{ 
                      transform: `rotate(${angle}deg)`,
                      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    }}
                  >
                    <div 
                      className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/4 text-white font-bold text-sm"
                      style={{ transform: `rotate(${-angle}deg) translateX(15%)` }}
                    >
                      {perfume.name}
                    </div>
                  </div>
                );
              })}
            </div>

            <Button 
              className="mt-8 bg-gradient-electric hover:opacity-90 text-white rounded-full px-8 py-2.5 font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={spinWheel}
              disabled={isSpinning}
            >
              {isSpinning ? "Spinning..." : "Spin the Wheel"}
            </Button>

            {spinResult && (
              <div className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-md inline-block">
                <p className="font-bold text-lg">
                  Your perfect match is{" "}
                  <span className="text-electric-violet">
                    {perfumes.find(p => p.id === spinResult)?.name}
                  </span>!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gifting Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-pastel-purple to-pastel-blue rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-3/5 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Gift a Perfume Experience</h2>
                <p className="text-gray-700 mb-6">
                  Surprise someone special with a ScentSpark gift card. They can redeem it at any of our vending machines for a luxury fragrance experience.
                </p>
                <Link to="/shop">
                  <Button className="bg-gradient-electric hover:opacity-90 text-white rounded-full px-8 py-2.5 font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                    Gift Now
                  </Button>
                </Link>
              </div>
              <div className="md:w-2/5 text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg inline-block transform rotate-3 hover-scale">
                  <div className="bg-gradient-to-r from-electric-blue to-electric-violet p-1 rounded-lg">
                    <div className="bg-white rounded-lg p-4">
                      <h3 className="font-bold text-lg mb-2">Gift Card</h3>
                      <p className="text-gray-600 text-sm mb-3">5 Premium Sprays</p>
                      <p className="text-2xl font-bold text-electric-violet">₹50</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-electric-blue to-electric-violet">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience Your Favorite Scent?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Find a ScentSpark machine near you or pre-purchase spray credits.
          </p>
          <Link to="/shop">
            <Button className="bg-white text-electric-violet hover:bg-white/90 rounded-full px-8 py-2.5 font-medium transition-all duration-300 shadow-md hover:shadow-lg">
              Find a Machine
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default PerfumeCatalog;
