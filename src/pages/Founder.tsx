
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Founder = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-electric-blue/5 to-electric-violet/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-blue to-electric-violet bg-clip-text text-transparent">
              Meet Our Founder
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            The visionary behind ScentSpark's journey to revolutionize fragrance accessibility.
          </p>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-electric-violet rounded-3xl transform rotate-3"></div>
                <div className="relative bg-gray-200 rounded-3xl h-96 overflow-hidden transform -rotate-3 hover-scale">
                  <div className="h-full w-full bg-gradient-to-br from-electric-blue/20 to-electric-violet/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-electric-blue to-electric-violet mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                        VT
                      </div>
                      <h3 className="text-2xl font-bold">Vighnesh Tule</h3>
                      <p className="text-gray-600">Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-3/5">
              <h2 className="text-3xl font-bold mb-6">
                The ScentSpark Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Vighnesh Tule, a passionate entrepreneur currently pursuing Data Science at IIT Madras and BCA from MIT Pune, founded ScentSpark with a simple belief: premium fragrance experiences should be accessible to everyone, anywhere.
                </p>
                <p>
                  The journey began when Vighnesh noticed a gap in the market - people wanted to smell great on-the-go without carrying bulky perfume bottles. This insight, combined with his technical expertise, led to the creation of India's first network of perfume vending machines.
                </p>
                <p>
                  With a background in technology and a keen interest in consumer behavior, Vighnesh developed ScentSpark as a solution that combines luxury, convenience, and innovation.
                </p>
                <blockquote className="border-l-4 border-electric-violet pl-4 py-2 my-6 italic">
                  "I believe perfume is not a luxury—it's your signature, accessible anywhere. ScentSpark is about democratizing premium scent experiences and making them available to everyone, whenever they need it most."
                </blockquote>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center bg-[#0A66C2] text-white rounded-full px-6 py-2.5 font-medium transition-all duration-300 hover:opacity-90"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center bg-[#1DA1F2] text-white rounded-full px-6 py-2.5 font-medium transition-all duration-300 hover:opacity-90"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-[#405DE6] via-[#E1306C] to-[#FFDC80] text-white rounded-full px-6 py-2.5 font-medium transition-all duration-300 hover:opacity-90"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Skills */}
      <section className="py-16 bg-gradient-to-br from-electric-blue/5 to-electric-violet/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-electric-blue to-electric-violet bg-clip-text text-transparent">
              Education & Expertise
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  Education
                </h3>
                <ul className="space-y-4">
                  <li>
                    <div className="font-bold">Indian Institute of Technology (IIT) Madras</div>
                    <div className="text-gray-600">Data Science, 2023-Present</div>
                  </li>
                  <li>
                    <div className="font-bold">MIT Pune</div>
                    <div className="text-gray-600">Bachelor of Computer Applications, 2022-Present</div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-electric-violet" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Skills & Expertise
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-electric-blue rounded-full mr-2"></span>
                    <span>Product Development</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-electric-violet rounded-full mr-2"></span>
                    <span>Data Science & Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-neon-pink rounded-full mr-2"></span>
                    <span>IoT Technologies</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-neon-orange rounded-full mr-2"></span>
                    <span>Business Strategy</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-electric-blue rounded-full mr-2"></span>
                    <span>Entrepreneurship</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-electric-blue/10 to-electric-violet/10 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">The Vision</h2>
              <p className="text-gray-700 mb-8">
                "ScentSpark aims to revolutionize how people access and experience fragrance. Our vision is to build a world where premium scent experiences are just a tap away, democratizing luxury and bringing it to everyone. With technology at our core, we're creating not just a product, but a movement that makes self-expression accessible to all."
              </p>
              <Link to="/contact">
                <Button className="bg-gradient-electric hover:opacity-90 text-white rounded-full px-8 py-2.5 font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Founder;
