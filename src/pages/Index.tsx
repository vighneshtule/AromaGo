
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    features: false,
    testimonials: false,
    social: false,
  });

  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === featuresRef.current && entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, features: true }));
        } else if (entry.target === testimonialsRef.current && entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, testimonials: true }));
        } else if (entry.target === socialRef.current && entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, social: true }));
        }
      });
    }, observerOptions);

    if (featuresRef.current) observer.observe(featuresRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (socialRef.current) observer.observe(socialRef.current);

    return () => {
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
      if (socialRef.current) observer.unobserve(socialRef.current);
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen pt-20 relative bg-gradient-to-br from-electric-blue/5 to-electric-violet/10 overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-28 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Experience <span className="bg-gradient-to-r from-electric-blue to-electric-violet bg-clip-text text-transparent">Instant Fragrance</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              The future of fragrance is here. Premium scents on-the-go from our touchless vending machines. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/how-it-works">
                <Button className="bg-gradient-electric hover:opacity-90 text-white rounded-full px-8 py-2.5 font-medium transition-all duration-300 shadow-md hover:shadow-lg text-lg">
                  How It Works
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="outline" className="border-electric-violet text-electric-violet hover:bg-electric-violet/10 rounded-full px-8 py-2.5 font-medium transition-all duration-300 text-lg">
                  Find a Machine
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-r from-electric-blue/30 to-electric-violet/30 rounded-3xl shadow-xl relative overflow-hidden neon-border animate-pulse-glow">
              <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-80 bg-gray-800/80 rounded-2xl shadow-2xl">
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gradient-to-r from-electric-blue to-electric-violet rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Touch Screen</span>
                </div>
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-electric-yellow rounded-full"></div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-white rounded-md flex items-center justify-center">
                  <span className="text-xs text-gray-800">Spray Outlet</span>
                </div>
              </div>
              {/* Spray animation */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-20">
                <div className="w-6 h-6 bg-electric-violet/50 rounded-full animate-spray"></div>
                <div className="w-6 h-6 bg-electric-blue/50 rounded-full animate-spray animation-delay-300"></div>
                <div className="w-6 h-6 bg-neon-pink/50 rounded-full animate-spray animation-delay-600"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gradient orbs for visual appeal */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-electric-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-electric-violet/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-neon-pink/10 rounded-full filter blur-2xl"></div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef} 
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-electric-blue to-electric-violet bg-clip-text text-transparent">Key Features</span>
          </h2>

          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ease-out ${
              isVisible.features 
                ? "opacity-100 transform translate-y-0" 
                : "opacity-0 transform translate-y-10"
            }`}
          >
            <Card className="hover-scale border-electric-blue/20 hover:border-electric-blue/50 bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-electric-blue/10 flex items-center justify-center mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 text-electric-blue" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" 
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Touchless</h3>
                <p className="text-gray-600">
                  Completely contactless experience for ultimate hygiene and convenience.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-electric-violet/20 hover:border-electric-violet/50 bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-electric-violet/10 flex items-center justify-center mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 text-electric-violet" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" 
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">5 Fragrances</h3>
                <p className="text-gray-600">
                  Choose from five signature premium scents for every mood and occasion.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-neon-pink/20 hover:border-neon-pink/50 bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-neon-pink/10 flex items-center justify-center mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 text-neon-pink" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">UPI Pay</h3>
                <p className="text-gray-600">
                  Quick and secure payments via UPI, making transactions effortless.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-electric-yellow/20 hover:border-electric-yellow/50 bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-electric-yellow/30 flex items-center justify-center mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 text-neon-orange" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Anywhere Access</h3>
                <p className="text-gray-600">
                  Located in malls, metros, and premium locations for on-the-go access.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="py-20 bg-gradient-to-r from-electric-blue/5 to-electric-violet/10"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-electric-blue to-electric-violet bg-clip-text text-transparent">Customer Love</span>
          </h2>

          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ease-out ${
              isVisible.testimonials 
                ? "opacity-100 transform translate-y-0" 
                : "opacity-0 transform translate-y-10"
            }`}
          >
            <Card className="glassmorphism hover-scale bg-white/50 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-electric-blue to-electric-violet flex items-center justify-center text-white font-bold">
                    PK
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Priya Kumar</h4>
                    <p className="text-sm text-gray-600">Marketing Executive</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Absolutely love the concept! I use it before client meetings for a quick refresh. The Urban Mist scent is my go-to power fragrance!"
                </p>
                <div className="flex text-electric-violet mt-4">
                  ★★★★★
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism hover-scale bg-white/50 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-pink to-neon-orange flex items-center justify-center text-white font-bold">
                    RJ
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Rahul Joshi</h4>
                    <p className="text-sm text-gray-600">Tech Entrepreneur</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Genius innovation! Used one at InOrbit Mall before a date - the touchless experience and premium scent quality really impressed me."
                </p>
                <div className="flex text-electric-violet mt-4">
                  ★★★★★
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism hover-scale bg-white/50 border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-electric-violet to-electric-blue flex items-center justify-center text-white font-bold">
                    AM
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Anjali Mehra</h4>
                    <p className="text-sm text-gray-600">Fashion Designer</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "As someone in the fashion industry, presentation is everything. These machines at premium locations have saved me countless times!"
                </p>
                <div className="flex text-electric-violet mt-4">
                  ★★★★☆
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section 
        ref={socialRef}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-electric-blue to-electric-violet bg-clip-text text-transparent">@ScentSpark</span>
          </h2>

          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 ease-out ${
              isVisible.social 
                ? "opacity-100 transform translate-y-0" 
                : "opacity-0 transform translate-y-10"
            }`}
          >
            {/* Instagram-style photo grid */}
            <div className="aspect-square bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-xl overflow-hidden shadow-md hover-scale">
              <div className="h-full w-full flex items-center justify-center bg-electric-violet/10 p-4">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 text-electric-violet" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">Our Citrus Bloom at Bangalore Metro</p>
                </div>
              </div>
            </div>

            <div className="aspect-square bg-gradient-to-br from-pastel-blue to-pastel-purple rounded-xl overflow-hidden shadow-md hover-scale">
              <div className="h-full w-full flex items-center justify-center bg-electric-blue/10 p-4">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 text-electric-blue" 
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
                  </div>
                  <p className="text-gray-700 font-medium">Customers loving the instant spray experience</p>
                </div>
              </div>
            </div>

            <div className="aspect-square bg-gradient-to-br from-pastel-yellow to-pastel-pink rounded-xl overflow-hidden shadow-md hover-scale">
              <div className="h-full w-full flex items-center justify-center bg-neon-orange/10 p-4">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 text-neon-orange" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">New installation at Phoenix Marketcity</p>
                </div>
              </div>
            </div>

            <div className="aspect-square bg-gradient-to-br from-pastel-purple to-pastel-blue rounded-xl overflow-hidden shadow-md hover-scale">
              <div className="h-full w-full flex items-center justify-center bg-neon-pink/10 p-4">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-8 w-8 text-neon-pink" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" 
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">Team ScentSpark at TiE Startup Expo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center text-electric-violet hover:text-electric-blue transition-colors"
            >
              <span className="font-medium">Follow us on Instagram</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-blue to-electric-violet">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience Instant Luxury?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Find a ScentSpark machine near you or pre-purchase spray credits for your next fragrance experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button className="bg-white text-electric-violet hover:bg-white/90 rounded-full px-8 py-2.5 font-medium transition-all duration-300 text-lg shadow-md hover:shadow-lg">
                Find a Machine
              </Button>
            </Link>
            <Link to="/perfumes">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-2.5 font-medium transition-all duration-300 text-lg">
                Explore Fragrances
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
