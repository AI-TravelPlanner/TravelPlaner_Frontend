import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TravelWebsite = () => {
  const [activeTab, setActiveTab] = useState("beach");
  const sliderRefs = {
    beach: useRef(null),
    city: useRef(null),
    mountain: useRef(null),
    tropical: useRef(null),
    cultural: useRef(null)
  };
  
  // State to track current position in each slider
  const [sliderPositions, setSliderPositions] = useState({
    beach: 0,
    city: 0,
    mountain: 0,
    tropical: 0,
    cultural: 0
  });

  // Destination data organized by category
  const destinationsByCategory = {
    beach: [
      { name: "Miami Beach", location: "Florida, United States of America", image: "/src/assets/user-img/miami-beach.avif" },
      { name: "Montego Beach", location: "Saint James, Jamaica", image: "/src/assets/user-img/Montega-Beach.jpg" },
      { name: "Punta Cana", location: "Dominican Republic", image: "/src/assets/user-img/punta-cana.jpg" },
      { name: "Cancun", location: "City of Quintana Roo, Mexico", image: "/src/assets/user-img/Cancun-Beach.jpg" },
      { name: "Maldives", location: "Male, Maldives", image: "/src/assets/user-img/Maldives.jpg" },
      { name: "Bondi Beach", location: "Sydney, Australia", image: "/src/assets/user-img/Bondi-Beach.jpg" },
      { name: "Copacabana", location: "Rio de Janeiro, Brazil", image: "/src/assets/user-img/Copacbana-Beach.jpg" },
      { name: "Navagio Beach", location: "Zakynthos, Greece", image: "/src/assets/user-img/Navagio-Beach.webp" },
      { name: "Grace Bay", location: "Turks and Caicos Islands", image: "/src/assets/user-img/GraceBay-Beach.jpg" },
      { name: "Anse Source d'Argent", location: "La Digue, Seychelles", image: "/src/assets/user-img/AnseSource.jpg" },
      { name: "El Nido", location: "Palawan, Philippines", image: "/src/assets/user-img/ElNido.avif" },
      { name: "Seven Mile Beach", location: "Grand Cayman, Cayman Islands", image: "/src/assets/user-img/SevenMileBeach.jpg" },
      { name: "Pink Sands Beach", location: "Harbour Island, Bahamas", image: "/src/assets/user-img/PinkSandsBeach.jpeg" },
      { name: "Playa del Carmen", location: "Quintana Roo, Mexico", image: "/src/assets/user-img/playadelcarmen.jpg" },
      { name: "Whitehaven Beach", location: "Whitsunday Island, Australia", image: "/src/assets/user-img/whitehaven.jpg" },
      { name: "Baia do Sancho", location: "Fernando de Noronha, Brazil", image: "/src/assets/user-img/baiadosancho.jpg" }
    ],
    city: [
      { name: "New York", location: "United States of America", image: "/src/assets/user-img/New-York-City.jpg" },
      { name: "Paris", location: "France", image: "/src/assets/user-img/Paris.jpg" },
      { name: "Tokyo", location: "Japan", image: "/src/assets/user-img/Tokyo.jpeg" },
      { name: "London", location: "United Kingdom", image: "/src/assets/user-img/London-United.jpg" },
      { name: "Dubai", location: "United Arab Emirates", image: "/src/assets/user-img/Dubai.jpg" },
      { name: "Barcelona", location: "Spain", image: "/src/assets/user-img/Barcelona.webp" },
      { name: "Toronto", location: "Ontario, Canada", image: "/src/assets/user-img/Toronto.webp" },
      { name: "Singapore", location: "Singapore", image: "/src/assets/user-img/singapore.jpeg" },
      { name: "Hong Kong", location: "China", image: "/src/assets/user-img/HongKong.webp" },
      { name: "Istanbul", location: "Turkey", image: "/src/assets/user-img/Istanbul.jpg" },
      { name: "San Francisco", location: "California, United States", image: "/src/assets/user-img/SanFran.jpg" },
      { name: "Seoul", location: "South Korea", image: "/src/assets/user-img/Seoul.jpg" },
      { name: "Amsterdam", location: "Netherlands", image: "/src/assets/user-img/Amsterdam.avif" },
      { name: "Buenos Aires", location: "Argentina", image: "/src/assets/user-img/BuenosAires.jpg" },
      { name: "Berlin", location: "Germany", image: "/src/assets/user-img/Berlin.jpeg" },
      { name: "Lisbon", location: "Portugal", image: "/src/assets/user-img/Lisbon.jpeg" }
    ],
    mountain: [
      { name: "Aspen", location: "Colorado, United States", image: "/src/assets/user-img/Aspen.webp" },
      { name: "Zermatt", location: "Switzerland", image: "/src/assets/user-img/Zermatt.jpg" },
      { name: "Banff", location: "Alberta, Canada", image: "/src/assets/user-img/Banff.jpg" },
      { name: "Chamonix", location: "French Alps, France", image: "/src/assets/user-img/Chamonix.jpg" },
      { name: "Queenstown", location: "South Island, New Zealand", image: "/src/assets/user-img/Queenstone-NewZealand.webp" },
      { name: "Whistler", location: "British Columbia, Canada", image: "/src/assets/user-img/whistler.jpeg" },
      { name: "Interlaken", location: "Switzerland", image: "/src/assets/user-img/Interlaken.jpg" },
      { name: "Blue Mountains", location: "New South Wales, Australia", image: "/src/assets/user-img/bluemountains.webp" },
      { name: "Mount Fuji", location: "Honshu Island, Japan", image: "/src/assets/user-img/MountFuji.jpg" },
      { name: "Patagonia", location: "Argentina/Chile", image: "/src/assets/user-img/patagonia-argentina.jpg" },
      { name: "Dolomites", location: "Italy", image: "/src/assets/user-img/bluemountains.webp" },
      { name: "Table Mountain", location: "Cape Town, South Africa", image: "/src/assets/user-img/tablemountain.jpeg" },
      { name: "Rocky Mountains", location: "Colorado, United States", image: "/src/assets/user-img/Rockymountain.jpg" },
      { name: "Himalayas", location: "Nepal", image: "/src/assets/user-img/Himalayas.jpg" },
      { name: "Andes", location: "South America", image: "/src/assets/user-img/Andes.jpeg" },
      { name: "Mount Cook", location: "New Zealand", image: "/src/assets/user-img/MountCook.jpeg" }
    ],
    tropical: [
      { name: "Bali", location: "Indonesia", image: "/src/assets/user-img/TropBali.avif" },
      { name: "Phuket", location: "Thailand", image: "/src/assets/user-img/Phuket.jpg" },
      { name: "Bora Bora", location: "French Polynesia", image: "/src/assets/user-img/BoraBora.jpg" },
      { name: "Fiji", location: "South Pacific", image: "/src/assets/user-img/Fiji.avif" },
      { name: "Seychelles", location: "East Africa", image: "/src/assets/user-img/Secychelles.jpg" },
      { name: "The Bahamas", location: "Caribbean", image: "/src/assets/user-img/Bahamas.jpeg" },
      { name: "Langkawi", location: "Malaysia", image: "/src/assets/user-img/Langkawi.jpg" },
      { name: "Moorea", location: "French Polynesia", image: "/src/assets/user-img/Moorea.jpg" },
      { name: "Kauai", location: "Hawaii, United States", image: "/src/assets/user-img/Kauai.jpg" },
      { name: "Zanzibar", location: "Tanzania", image: "/src/assets/user-img/zanzibar.webp" },
      { name: "Palawan", location: "Philippines", image: "/src/assets/user-img/palawan.jpeg" },
      { name: "Mauritius", location: "Indian Ocean", image: "/src/assets/user-img/Mauritius.jpg" },
      { name: "Dominica", location: "Caribbean", image: "/src/assets/user-img/Dominica.jpg" },
      { name: "Comoros", location: "East Africa", image: "/src/assets/user-img/Comoros.jpg" },
      { name: "Nusa Penida", location: "Indonesia", image: "/src/assets/user-img/NusaPendia.jpg" },
      { name: "Rarotonga", location: "Cook Islands", image: "/src/assets/user-img/Rarotonga.avif" }
    ],
    cultural: [
      { name: "Rome", location: "Italy", image: "/src/assets/user-img/Rome.jpg" },
      { name: "Kyoto", location: "Japan", image: "/src/assets/user-img/kyoto.jpg" },
      { name: "Istanbul", location: "Turkey", image: "/src/assets/user-img/Istanbul.jpg" },
      { name: "Marrakech", location: "Morocco", image: "/src/assets/user-img/Marrakech.jpg" },
      { name: "Cairo", location: "Egypt", image: "/src/assets/user-img/Cario.avif" },
      { name: "Beijing", location: "China", image: "/src/assets/user-img/Beijing.jpg" },
      { name: "Cusco", location: "Peru", image: "/src/assets/user-img/Cusco.jpg" },
      { name: "Jerusalem", location: "Israel", image: "/src/assets/user-img/Jerusalem.jpg" },
      { name: "Athens", location: "Greece", image: "/src/assets/user-img/Athena.jpg" },
      { name: "Lhasa", location: "Tibet, China", image: "/src/assets/user-img/Lhasa.jpg" },
      { name: "Fez", location: "Morocco", image: "/src/assets/user-img/Fez.avif" },
      { name: "Petra", location: "Jordan", image: "/src/assets/user-img/Petra.jpg" },
      { name: "Varanasi", location: "India", image: "/src/assets/user-img/Varanasi.jpg" },
      { name: "Samarkand", location: "Uzbekistan", image: "/src/assets/user-img/Samarkand.jpg" },
      { name: "Hanoi", location: "Vietnam", image: "/src/assets/user-img/Hanoi.jpg" },
      { name: "Mexico City", location: "Mexico", image: "/src/assets/user-img/Mexico.jpeg" }
    ]
  };
  

  // Function to calculate items per page based on current viewport
  const getItemsPerPage = () => {
    // Default for mobile
    let itemsPerPage = 1;
    
    // Adjust based on viewport width
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width >= 1280) itemsPerPage = 4;
      else if (width >= 768) itemsPerPage = 3;
      else if (width >= 640) itemsPerPage = 2;
    }
    
    return itemsPerPage;
  };
  
  // Function to handle tab change with animation
  const handleTabChange = (value) => {
    setActiveTab(value);
    // Reset position when changing tabs
    setSliderPositions(prev => ({
      ...prev,
      [value]: 0
    }));
    
    // Reset scroll position when changing tabs
    if (sliderRefs[value] && sliderRefs[value].current) {
      sliderRefs[value].current.scrollLeft = 0;
    }
  };

  // Function to navigate to next page of items
  const scrollRight = (category) => {
    const sliderRef = sliderRefs[category].current;
    if (!sliderRef) return;
    
    const itemsPerPage = getItemsPerPage();
    const totalItems = destinationsByCategory[category].length;
    const cardWidth = sliderRef.querySelector('.card-item').offsetWidth + 16; // Card width + gap
    
    // Calculate next position
    let nextPosition = sliderPositions[category] + itemsPerPage;
    
    // If we're at the end, wrap around to the beginning
    if (nextPosition >= totalItems) {
      nextPosition = 0;
    }
    
    // Update position state
    setSliderPositions(prev => ({
      ...prev,
      [category]: nextPosition
    }));
    
    // Scroll to the appropriate position
    sliderRef.scrollTo({
      left: nextPosition * cardWidth,
      behavior: 'smooth'
    });
  };

  // Function to navigate to previous page of items
  const scrollLeft = (category) => {
    const sliderRef = sliderRefs[category].current;
    if (!sliderRef) return;
    
    const itemsPerPage = getItemsPerPage();
    const totalItems = destinationsByCategory[category].length;
    const cardWidth = sliderRef.querySelector('.card-item').offsetWidth + 16; // Card width + gap
    
    // Calculate previous position
    let prevPosition = sliderPositions[category] - itemsPerPage;
    
    // If we're at the beginning, wrap around to the end
    if (prevPosition < 0) {
      // Find the last complete page
      const lastPage = Math.floor((totalItems - 1) / itemsPerPage) * itemsPerPage;
      prevPosition = lastPage;
    }
    
    // Update position state
    setSliderPositions(prev => ({
      ...prev,
      [category]: prevPosition
    }));
    
    // Scroll to the appropriate position
    sliderRef.scrollTo({
      left: prevPosition * cardWidth,
      behavior: 'smooth'
    });
  };

  // Update pagination dots based on current position
  const getCurrentPage = (category) => {
    const itemsPerPage = getItemsPerPage();
    return Math.floor(sliderPositions[category] / itemsPerPage);
  };

  // Total pages for pagination dots
  const getTotalPages = (category) => {
    const itemsPerPage = getItemsPerPage();
    return Math.ceil(destinationsByCategory[category].length / itemsPerPage);
  };

  return (
    <div className="bg-blue-500">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-orange-500 uppercase font-semibold text-sm tracking-wider">Curated Beyond The Ordinary</h3>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Text Content - Now with BLACK text for heading */}
          <div className="md:w-1/3">
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-3">Escape to Your Dream Destination</h1>
            <p className="text-sm text-white mb-6">
              Discover a curated selection of resorts that combine breathtaking views, world-class amenities, and unforgettable experiences. Whether you're seeking relaxation, adventure, or romance, these destinations are designed to make every moment extraordinary. Our handpicked collection features exclusive properties in the most coveted locations around the globe, each offering unique charm and personalized service that elevates your vacation experience.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium px-8">
              View More
            </Button>
          </div>
          
          {/* Right Column - Images with varied sizes like in reference image */}
          <div className="md:w-2/3">
            <div className="grid grid-cols-12 grid-rows-12 gap-3 h-96">
              {/* Top left large image - takes 7 columns and 8 rows - INCREASED HEIGHT */}
              <div className="col-span-7 row-span-8">
                <img 
                  src="/src/assets/user-img/Resort1.1.jpg" 
                  alt="Luxury waterfront resort" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Top right image - takes 5 columns and 6 rows - INCREASED HEIGHT */}
              <div className="col-span-5 row-span-6 col-start-8 row-start-1">
                <img 
                  src="/src/assets/user-img/Resort1.2.webp" 
                  alt="Resort with pools" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Bottom left image - takes 5 columns and 4 rows - INCREASED HEIGHT */}
              <div className="col-span-5 row-span-5 col-start-1 row-start-9">
                <img 
                  src="/src/assets/user-img/Resort1.3.jpeg" 
                  alt="Palm tree resort pool" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Bottom right image - takes 5 columns and 6 rows - INCREASED HEIGHT */}
              <div className="col-span-5 row-span-7 col-start-8 row-start-7">
                <img 
                  src="/src/assets/user-img/Resort1.4.avif" 
                  alt="Luxury resort experience" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Top Rated Section with Custom Tabs and Circular Slider */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-3">Top Rated Experience</h2>
          
          {/* Custom Navigation Tabs */}
          <div className="mb-4">
            <div className="border-b flex justify-start bg-white overflow-x-auto">
              {Object.keys(destinationsByCategory).map((tabKey) => (
                <button 
                  key={tabKey}
                  onClick={() => handleTabChange(tabKey)}
                  className={`px-3 py-2 border-b-2 transition-all duration-300 whitespace-nowrap ${
                    activeTab === tabKey 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-700'
                  }`}
                >
                  {tabKey === 'beach' && 'Beach Getaways'}
                  {tabKey === 'city' && 'City Escapes'}
                  {tabKey === 'mountain' && 'Mountain Retreats'}
                  {tabKey === 'tropical' && 'Tropical Paradises'}
                  {tabKey === 'cultural' && 'Cultural Landmarks'}
                </button>
              ))}
            </div>
            
            <hr className="border-gray-200 mb-4" />
            
            {/* Tab content with circular slider navigation */}
            {Object.keys(destinationsByCategory).map((category) => (
              <div 
                key={category}
                className={`mt-2 transition-opacity duration-500 ${
                  activeTab === category ? 'opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="relative group">
                  {/* Left navigation button */}
                  <button 
                    onClick={() => scrollLeft(category)}
                    type="button"
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 rounded-full shadow-md h-10 w-10 p-2 flex items-center justify-center border border-gray-200 hover:bg-gray-100"
                    aria-label="Previous destinations"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  
                  {/* Scrollable destination cards - INCREASED IMAGE HEIGHT */}
                  <div 
                    ref={sliderRefs[category]}
                    className="flex overflow-x-hidden gap-4 pb-4 px-12 scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
                  >
                    {destinationsByCategory[category].map((destination, index) => (
                      <Card 
                        key={index} 
                        className="card-item flex-none w-48 md:w-52 lg:w-56 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
                      >
                        <img 
                          src={destination.image} 
                          alt={destination.name} 
                          className="w-full h-48 object-cover"
                        />
                        <CardContent className="p-3">
                          <h3 className="font-bold">{destination.name}</h3>
                          <p className="text-xs text-gray-600">{destination.location}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {/* Right navigation button */}
                  <button 
                    onClick={() => scrollRight(category)}
                    type="button"
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 rounded-full shadow-md h-10 w-10 p-2 flex items-center justify-center border border-gray-200 hover:bg-gray-100"
                    aria-label="Next destinations"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
                
                {/* Pagination indicators */}
                <div className="flex justify-center gap-1 mt-4">
                  {[...Array(getTotalPages(category))].map((_, i) => (
                    <div 
                      key={i}
                      className={`h-1 w-6 rounded-full transition-all ${
                        i === getCurrentPage(category) ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelWebsite;