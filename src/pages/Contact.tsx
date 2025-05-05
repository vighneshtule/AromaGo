
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-electric-blue/5 to-electric-violet/10">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-blue to-electric-violet bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out to the ScentSpark team.
          </p>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-3/5">
              <Card className="shadow-xl border-0 overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-electric-blue to-electric-violet"></div>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone (Optional)
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full h-32"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="bg-gradient-electric hover:opacity-90 text-white rounded-full px-8 py-2.5 font-medium transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="lg:w-2/5">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-electric-blue/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-electric-blue" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">Address</h3>
                    <p className="text-gray-600">
                      IIT Madras Research Park<br />
                      Kanagam Road, Taramani<br />
                      Chennai, Tamil Nadu 600113<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-electric-violet/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-electric-violet" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@scentspark.com" className="hover:text-electric-violet transition-colors">
                        contact@scentspark.com
                      </a><br />
                      <a href="mailto:support@scentspark.com" className="hover:text-electric-violet transition-colors">
                        support@scentspark.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-neon-pink/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-neon-pink" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+918800123456" className="hover:text-electric-violet transition-colors">
                        +91 8800 123456
                      </a><br />
                      <a href="tel:+918800123457" className="hover:text-electric-violet transition-colors">
                        +91 8800 123457
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-neon-orange/10 p-3 rounded-full">
                    <Instagram className="h-6 w-6 text-neon-orange" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">Social Media</h3>
                    <p className="text-gray-600">
                      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-electric-violet transition-colors">
                        @scentspark.official
                      </a><br />
                      <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-electric-violet transition-colors">
                        @scentspark
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="mt-10">
                <h3 className="font-bold text-lg mb-4">Business Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-600">Monday - Friday:</div>
                  <div>10:00 AM - 6:00 PM</div>
                  <div className="text-gray-600">Saturday:</div>
                  <div>11:00 AM - 4:00 PM</div>
                  <div className="text-gray-600">Sunday:</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-electric-blue/5 to-electric-violet/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Find Us</h2>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-xl h-96 max-w-5xl mx-auto">
            <div className="h-full w-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-electric-blue to-electric-violet mx-auto mb-4 flex items-center justify-center text-white">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">IIT Madras Research Park</h3>
                <p className="text-gray-600 max-w-lg mx-auto">
                  Interactive map will appear here. For now, you can find us at the IIT Madras Research Park,
                  Kanagam Road, Taramani, Chennai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-electric-blue/10 to-electric-violet/10 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Interested in Partnerships?</h2>
              <p className="text-gray-700 mb-8">
                We're always looking for partners who share our vision of making premium fragrances accessible.
                Whether you're a mall owner, business owner, or investor, we'd love to explore collaboration opportunities.
              </p>
              <Button 
                className="bg-gradient-electric hover:opacity-90 text-white rounded-full px-8 py-2.5 font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={() => {
                  const element = document.querySelector('form');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Discuss Partnership
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
