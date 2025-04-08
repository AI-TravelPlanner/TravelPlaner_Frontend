import React from 'react'
import CustomerTestimonial from './CustomerTestimonial'
import { cn } from '@/lib/utils'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
    {
        testimonial: "The travel planning was exceptional! Every detail was taken care of and we had the most relaxing vacation thanks to this service.",
        customerName: "John Doe",
        tripType: "Business Trip",
        tripLocation: "London, UK",
        rating: 5
    },
    {
        testimonial: "Our honeymoon was absolutely perfect! The itinerary was well-planned, and we got to experience the best of Paris without any hassle.",
        customerName: "Emily & James",
        tripType: "Honeymoon",
        tripLocation: "Paris, France",
        rating: 5
    },
    {
        testimonial: "The trip exceeded all expectations! The recommendations for local restaurants and activities were spot-on.",
        customerName: "Michael Thompson",
        tripType: "Family Vacation",
        tripLocation: "Tokyo, Japan",
        rating: 5
    },
    {
        testimonial: "Absolutely amazing service! I was able to explore Bali stress-free, thanks to the well-organized travel plan.",
        customerName: "Samantha Lee",
        tripType: "Solo Adventure",
        tripLocation: "Bali, Indonesia",
        rating: 5
    },
    {
        testimonial: "This was my first time traveling abroad, and everything went smoothly! The hotel choices were excellent, and transportation was a breeze.",
        customerName: "David Rodriguez",
        tripType: "First-Time Traveler",
        tripLocation: "Barcelona, Spain",
        rating: 5
    },
    // {
    //     testimonial: "I had an unforgettable hiking experience in Switzerland. The travel planner ensured all permits and accommodations were taken care of!",
    //     customerName: "Jessica Patel",
    //     tripType: "Adventure Trip",
    //     tripLocation: "Swiss Alps, Switzerland",
    //     rating: 5
    // },
    // {
    //     testimonial: "A flawless business trip! The accommodations were top-notch, and the itinerary was perfectly tailored to my meetings and free time.",
    //     customerName: "Robert Chang",
    //     tripType: "Business Trip",
    //     tripLocation: "New York, USA",
    //     rating: 5
    // },
    // {
    //     testimonial: "Traveling with kids can be stressful, but this service made it effortless! Every detail was well thought out, and we had a fantastic time.",
    //     customerName: "Sarah Wilson",
    //     tripType: "Family Getaway",
    //     tripLocation: "Orlando, USA",
    //     rating: 5
    // },
    // {
    //     testimonial: "From booking to the final day of my trip, everything was seamless. I felt completely at ease knowing my itinerary was expertly handled.",
    //     customerName: "Olivia Martinez",
    //     tripType: "Luxury Escape",
    //     tripLocation: "Santorini, Greece",
    //     rating: 5
    // },
    // {
    //     testimonial: "Backpacking through South America was a dream come true! The suggested routes and accommodations were perfect for an unforgettable experience.",
    //     customerName: "Daniel Foster",
    //     tripType: "Backpacking Trip",
    //     tripLocation: "Machu Picchu, Peru",
    //     rating: 5
    // }
];

const CustomerGrid = () => {

    const settings = {
        dots: true,
        centerMode: true,
        centerPadding: '20px',
        variableWidth: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768, // Mobile screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 1024, // Tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1280, // Laptops and above
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <div className={cn(
            "flex flex-col justify-items-center bg-gray-300 dark:bg-gray-500"
        )}>
            <div className='flex justify-center'>
                <h1 className='text-center text-4xl font-bold text-[#FF4800] p-4'>Testimonials</h1>
            </div>

            {/* Carousel for smaller screens */}
            <div className='lg:hidden pb-12'>
                <Slider {...settings} className="w-[90%] mx-auto px-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="px-6"> {/* Added horizontal padding */}
                            <CustomerTestimonial
                                testimonial={t.testimonial}
                                customerImage="/src/assets/user-img/ProfilePic.png"
                                customerName={t.customerName}
                                tripType={t.tripType}
                                tripLocation={t.tripLocation}
                                rating={t.rating}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Grid layout for monitors */}
            <div className={cn(
                "hidden lg:grid grid-cols-5 grid-rows-1 gap-2 justify-items-center",
                "p-4"
            )}>
                {testimonials.map((t, index) => (
                    <CustomerTestimonial
                        key={index}
                        testimonial={t.testimonial}
                        customerImage="/src/assets/user-img/ProfilePic.png"
                        customerName={t.customerName}
                        tripType={t.tripType}
                        tripLocation={t.tripLocation}
                        rating={t.rating}
                    />
                ))}
            </div>
        </div>
    )
}

export default CustomerGrid