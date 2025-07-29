import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Users,
  Video,
  Palette,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function AmplifyEDLanding() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-blue-500" />
            <span className="text-2xl font-bold">AmplifyED</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="#services" className="hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="#why-us" className="hover:text-blue-400 transition-colors">
              Why Us
            </Link>
            <Link href="#testimonials" className="hover:text-blue-400 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Book Free Audit</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Amplify Your School's
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {" "}
                Digital Presence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We help educational institutions in Indore stand out online through strategic social media marketing,
              compelling content creation, and targeted digital advertising that drives real enrollment growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 group">
                Book a Free Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-gray-600 hover:bg-gray-800 bg-transparent"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About AmplifyED</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            At AmplifyED, we understand that every school has a unique story to tell. Our mission is to help educational
            institutions in Indore amplify their voice in the digital world, connecting them with prospective students
            and parents through authentic, engaging content and strategic marketing campaigns.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">Schools Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
              <div className="text-gray-300">Students Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Offer</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored specifically for educational institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Social Media Management</h3>
                <p className="text-gray-300">
                  Complete social media strategy, content planning, and community management across all platforms
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Video className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Reels & Video Content</h3>
                <p className="text-gray-300">
                  Engaging video content, reels, and multimedia that showcases your school's unique culture
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Palette className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Branding & Design</h3>
                <p className="text-gray-300">
                  Professional branding, graphic design, and visual identity that reflects your school's values
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">Paid Ads for Enrollments</h3>
                <p className="text-gray-300">
                  Targeted advertising campaigns designed to drive qualified leads and increase enrollments
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose AmplifyED?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're not just another marketing agency - we're education specialists
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">School-First Approach</h3>
                  <p className="text-gray-300">
                    We understand the unique challenges and opportunities in the education sector, crafting strategies
                    that resonate with students, parents, and educators.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Strategy</h3>
                  <p className="text-gray-300">
                    Every school is different. We create custom marketing strategies that align with your institution's
                    values, goals, and target audience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                  <p className="text-gray-300">
                    Our data-driven approach has helped schools in Indore increase their enrollment by an average of 40%
                    within the first year.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                  <p className="text-gray-300">
                    Based in Indore, we understand the local market dynamics and cultural nuances that make your
                    marketing campaigns more effective.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6">Join 50+ schools in Indore who trust AmplifyED to grow their digital presence</p>
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Schools Say About Us</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the educators we've helped succeed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "AmplifyED transformed our school's online presence completely. Our enrollment increased by 45% in
                  just 8 months, and parents now actively engage with our content."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold">RS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Dr. Rajesh Sharma</div>
                    <div className="text-gray-400">Principal, Bright Future School</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "The team at AmplifyED understands education marketing like no one else. Their creative content and
                  strategic approach helped us reach more families than ever."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold">PG</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Mrs. Priya Gupta</div>
                    <div className="text-gray-400">Director, Excellence Academy</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">
                  "Professional, creative, and results-driven. AmplifyED helped us build a strong digital brand that
                  truly represents our school's values and achievements."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold">AK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Mr. Amit Kumar</div>
                    <div className="text-gray-400">Principal, Modern Public School</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Amplify Your School Together</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to transform your school's digital presence? Get in touch for a free consultation and audit.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-400" />
                  <span>+91 99520 70480</span>
                  <span>+91 70274 00480</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <span>tanisha@amplifyed.co</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  <span>Indore, Madhya Pradesh, India</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.instagram.com/amplifyed.co/"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/amplifyed-co/"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">School Name</label>
                      <Input className="bg-gray-700 border-gray-600" placeholder="Your School Name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">Your Name</label>
                      <Input className="bg-gray-700 border-gray-600" placeholder="Principal/Director Name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Email</label>
                    <Input type="email" className="bg-gray-700 border-gray-600" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Phone</label>
                    <Input className="bg-gray-700 border-gray-600" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white">Message</label>
                    <Textarea
                      className="bg-gray-700 border-gray-600"
                      rows={4}
                      placeholder="Tell us about your school and marketing goals..."
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    Book Free Audit Call
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-8 w-8 text-blue-500" />
                <span className="text-2xl font-bold">AmplifyED</span>
              </div>
              <p className="text-gray-400">
                Amplifying educational institutions' digital presence across Indore and beyond.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Social Media Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Content Creation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Branding & Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Paid Advertising
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AmplifyED. All rights reserved. Made with ❤️ in Indore.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
