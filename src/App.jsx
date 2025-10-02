import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, Calendar, Users, Award, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import './App.css'

// Import images
import logo from './assets/logo.jpg'
import cheetahs from './assets/cheetahs.jpg'
import lion from './assets/lion.webp'
import zebras from './assets/zebras.jpg'
import landscape1 from './assets/landscape1.jpg'
import landscape2 from './assets/landscape2.jpg'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Safari Packages', href: '#packages' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Contact Us', href: '#contact' },
  ]

  const trendingTours = [
    {
      id: 1,
      title: 'Masai Mara Great Migration Safari',
      destination: 'Masai Mara, Kenya',
      duration: '7 Days',
      price: '$2,850',
      image: zebras,
      description: 'Witness the spectacular wildebeest migration across the Mara River. Experience one of nature\'s greatest shows with expert guides.',
      highlights: ['Game drives', 'Cultural visits', 'Hot air balloon option']
    },
    {
      id: 2,
      title: 'Serengeti & Ngorongoro Crater Adventure',
      destination: 'Tanzania',
      duration: '10 Days',
      price: '$3,950',
      image: landscape1,
      description: 'Explore the vast Serengeti plains and descend into the Ngorongoro Crater, a UNESCO World Heritage Site teeming with wildlife.',
      highlights: ['Big Five viewing', 'Crater exploration', 'Luxury lodges']
    },
    {
      id: 3,
      title: 'Uganda Gorilla Trekking Experience',
      destination: 'Bwindi Forest, Uganda',
      duration: '5 Days',
      price: '$4,200',
      image: cheetahs,
      description: 'An intimate encounter with mountain gorillas in their natural habitat. A once-in-a-lifetime experience in the misty mountains.',
      highlights: ['Gorilla permits', 'Forest trekking', 'Conservation education']
    },
  ]

  const destinations = [
    {
      name: 'Masai Mara National Reserve',
      country: 'Kenya',
      image: zebras,
      description: 'Home to the Great Migration and abundant wildlife, the Masai Mara is Kenya\'s most famous safari destination.',
      bestTime: 'July - October'
    },
    {
      name: 'Serengeti National Park',
      country: 'Tanzania',
      image: landscape1,
      description: 'Endless plains stretching to the horizon, the Serengeti offers unparalleled wildlife viewing year-round.',
      bestTime: 'June - October'
    },
    {
      name: 'Amboseli National Park',
      country: 'Kenya',
      image: landscape2,
      description: 'Famous for its large elephant herds and stunning views of Mount Kilimanjaro.',
      bestTime: 'June - October'
    },
    {
      name: 'Bwindi Impenetrable Forest',
      country: 'Uganda',
      image: cheetahs,
      description: 'Ancient rainforest sanctuary for endangered mountain gorillas and diverse birdlife.',
      bestTime: 'June - September'
    },
  ]

  const packages = [
    {
      id: 1,
      name: 'Classic Safari Package',
      duration: '5-7 Days',
      price: 'From $1,850',
      features: [
        'Accommodation in safari lodges',
        'Daily game drives',
        'Professional safari guide',
        'Park entrance fees',
        'All meals included'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Luxury Safari Experience',
      duration: '7-10 Days',
      price: 'From $3,500',
      features: [
        'Premium luxury lodges',
        'Private game drives',
        'Expert wildlife photographer guide',
        'Hot air balloon safari',
        'Gourmet dining',
        'Spa treatments'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Family Safari Adventure',
      duration: '6-8 Days',
      price: 'From $2,200',
      features: [
        'Family-friendly accommodations',
        'Educational game drives',
        'Cultural village visits',
        'Children activities',
        'Flexible itinerary'
      ],
      popular: false
    },
    {
      id: 4,
      name: 'Honeymoon Safari',
      duration: '8-12 Days',
      price: 'From $4,500',
      features: [
        'Romantic luxury lodges',
        'Private game drives',
        'Candlelit dinners',
        'Couples spa treatments',
        'Champagne sundowners',
        'Beach extension option'
      ],
      popular: false
    },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Oloibon Africa Safaris" className="h-16 w-16 object-contain" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">OLOIBON</h1>
                <p className="text-xs text-gray-600">AFRICA SAFARIS</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href.substring(1))
                  }}
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-amber-600"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href.substring(1))
                  }}
                  className="block px-3 py-2 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={zebras}
            alt="East African Safari"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover East Africa's Wild Beauty
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
            Authentic safari experiences across Kenya, Tanzania, and Uganda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
              onClick={() => scrollToSection('packages')}
            >
              Explore Safari Packages
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Plan Your Adventure
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Tours Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trending Safari Tours</h2>
            <p className="text-lg text-gray-600">Experience the most sought-after adventures in East Africa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.price}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{tour.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <MapPin size={16} />
                    {tour.destination} • {tour.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="space-y-2">
                    {tour.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700" onClick={() => scrollToSection('contact')}>
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Oloibon Africa Safaris</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Based in the heart of Nairobi, we are East Africa's premier safari specialists, dedicated to creating extraordinary wildlife experiences across Kenya, Tanzania and Uganda. Founded with a passion for East African wildlife and culture, Oloibon Africa Safaris has been connecting travelers with the raw beauty of the African wilderness for many years.
                </p>
                <p>
                  Our name "Oloibon" comes from the Maasai word for a traditional healer and spiritual leader, reflecting our deep respect for local communities and traditions.
                </p>
                <p>
                  We specialize in authentic safari experiences that go beyond wildlife viewing, offering cultural immersion, conservation education, and sustainable tourism practices that benefit local communities and preserve Africa's natural heritage.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <Award className="text-amber-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Guides</h3>
                    <p className="text-sm text-gray-600">Professional wildlife experts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="text-amber-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Conservation</h3>
                    <p className="text-sm text-gray-600">Sustainable tourism practices</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={cheetahs} alt="Wildlife" className="rounded-lg shadow-lg w-full h-64 object-cover" />
              <img src={lion} alt="Lion" className="rounded-lg shadow-lg w-full h-64 object-cover mt-8" />
              <img src={landscape2} alt="Landscape" className="rounded-lg shadow-lg w-full h-64 object-cover -mt-8" />
              <img src={landscape1} alt="Safari" className="rounded-lg shadow-lg w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top Destinations in East Africa</h2>
            <p className="text-lg text-gray-600">Explore the most breathtaking wildlife sanctuaries and natural wonders</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((destination, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                    <p className="flex items-center gap-2 text-sm mb-2">
                      <MapPin size={16} />
                      {destination.country}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Best Time: {destination.bestTime}</span>
                    <Button variant="outline" className="text-amber-600 border-amber-600 hover:bg-amber-50" onClick={() => scrollToSection('contact')}>
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Packages Section */}
      <section id="packages" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Safari Packages</h2>
            <p className="text-lg text-gray-600">Choose the perfect safari experience tailored to your preferences</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={`relative overflow-hidden hover:shadow-xl transition-shadow duration-300 ${pkg.popular ? 'border-2 border-amber-600' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.duration}</CardDescription>
                  <div className="text-2xl font-bold text-amber-600 mt-2">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-1.5 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-amber-600 hover:bg-amber-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                    onClick={() => scrollToSection('contact')}
                  >
                    Book Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">Ready to start your East African adventure? Get in touch with us today</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-amber-600 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Our Office</h3>
                      <p className="text-gray-600">
                        Nairobi, Kenya<br />
                        East Africa
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="text-amber-600 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600">+254 (0) 700 000 000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-amber-600 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">info@oloibonafricasafaris.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <Card>
              <CardHeader>
                <CardTitle>Book Your Safari</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault()
                  alert('Thank you for your interest! We will contact you shortly.')
                }}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Destination</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent">
                      <option>Select a destination</option>
                      <option>Masai Mara, Kenya</option>
                      <option>Serengeti, Tanzania</option>
                      <option>Amboseli, Kenya</option>
                      <option>Bwindi Forest, Uganda</option>
                      <option>Custom Safari</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Travel Dates</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="e.g., July 2025"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
                    <input
                      type="number"
                      min="1"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      placeholder="Tell us about your safari preferences..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="Oloibon Africa Safaris" className="h-12 w-12 object-contain bg-white rounded-full p-1" />
                <div>
                  <h3 className="text-lg font-bold">OLOIBON</h3>
                  <p className="text-xs text-gray-400">AFRICA SAFARIS</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                East Africa's premier safari specialists, creating extraordinary wildlife experiences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="hover:text-amber-600 transition-colors">Home</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-amber-600 transition-colors">About Us</a></li>
                <li><a href="#packages" onClick={(e) => { e.preventDefault(); scrollToSection('packages'); }} className="hover:text-amber-600 transition-colors">Safari Packages</a></li>
                <li><a href="#destinations" onClick={(e) => { e.preventDefault(); scrollToSection('destinations'); }} className="hover:text-amber-600 transition-colors">Destinations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Kenya Safaris</li>
                <li>Tanzania Safaris</li>
                <li>Uganda Safaris</li>
                <li>Custom Tours</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  Nairobi, Kenya
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  +254 (0) 700 000 000
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  info@oloibonafricasafaris.com
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Oloibon Africa Safaris. All rights reserved. | Sustainable Tourism | Conservation Partners</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
