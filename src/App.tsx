import React from 'react';
import homeImg from "./asseets/home.png";

import {
  Download,
  Star,
  Users,
  Clock,
  Smartphone,
  Shield,
  ChefHat,
  MapPin,
  CreditCard,
  Truck,
  Phone,
  Mail,
  Globe
} from 'lucide-react';

function App() {
  const features = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "100+ Restaurants",
      description: "Discover delicious food from your favorite local restaurants and cuisines"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Get your food delivered in 30 minutes or less with our rapid delivery network"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Real-time Tracking",
      description: "Track your order in real-time from kitchen to your doorstep"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Secure Payments",
      description: "Multiple payment options with secure and encrypted transactions"
    }
  ];

  const screenshots = [
    {
      url: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg",
      alt: "Home Screen"
    },
    {
      url: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg",
      alt: "Menu Browse"
    },
    {
      url: "https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg",
      alt: "Order Tracking"
    }
  ];

  const handleDownload = () => {
    // In a real app, this would trigger the actual APK download
    alert('APK download would start here. Wait');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Zayka</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-orange-500 transition-colors">Features</a>
              <a href="#screenshots" className="text-gray-600 hover:text-orange-500 transition-colors">Screenshots</a>
              <a href="#download" className="text-gray-600 hover:text-orange-500 transition-colors">Download</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Delicious Food
                  <span className="block text-orange-500">At Your Doorstep</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Download the Zayka app and discover thousands of restaurants, fast delivery,
                  and the best food experience in your city.
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">4.8 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold">500+ Downloads</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-5 h-5 text-blue-500" />
                  <span className="text-sm font-semibold">100+ Restaurants</span>
                </div>
              </div>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3"
              >
                <Download className="w-6 h-6" />
                <span>Download APK (Free)</span>
              </button>

              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Safe & Secure Download • Version 2.1.4 • 25.6 MB</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={homeImg}
                  alt="Zayka Food App Interface"
                  className="w-80 h-auto mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-orange-200 to-red-200 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-green-200 to-blue-200 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zayka?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the best food delivery service with features designed to make ordering food effortless and enjoyable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">App Screenshots</h2>
            <p className="text-xl text-gray-600">
              Take a look at the beautiful and intuitive interface of our food delivery app.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
              >
                <img
                  src={screenshot.url}
                  alt={screenshot.alt}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-2xl transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <p className="font-semibold text-gray-900">{screenshot.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Order Delicious Food?
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Join thousands of food lovers who trust Zayka for their daily meals.
              Download now and get your first order delivered for free!
            </p>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Smartphone className="w-8 h-8 text-white" />
                <div className="text-left text-white">
                  <p className="font-semibold">Zayka Food Delivery</p>
                  <p className="text-sm text-orange-100">Version 2.1.4 • 25.6 MB</p>
                </div>
              </div>

              <button
                onClick={handleDownload}
                className="w-full bg-white text-orange-500 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <Download className="w-6 h-6" />
                <span>Download APK Now</span>
              </button>

              <div className="flex items-center justify-center space-x-2 text-sm text-orange-100 mt-4">
                <Shield className="w-4 h-4" />
                <span>Virus-free • Safe Download • No Registration Required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Have questions about our app? We're here to help you get started.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600">+91 7979765899 </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600">support@Zayka.com</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Website</h3>
              <p className="text-gray-600">www.Zayka.com</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">Pachpakari, Dhaka, East Champaran</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <ChefHat className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Zayka</span>
              </div>
              <p className="text-gray-400">
                Your favorite food delivery app bringing delicious meals right to your doorstep.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Restaurants</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Become a Partner</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Download</h4>
              <p className="text-gray-400 mb-4">Get the Zayka app for your mobile device</p>
              <button
                onClick={handleDownload}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download APK</span>
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Zayka. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
