
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Input } from './components/ui/input';
import { ArrowRight, CheckCircle, Star, Truck, RotateCcw, Lock, CreditCard, Clock, ShieldCheck, ChevronDown, MessageSquare, X, Send, Plus, Ribbon, Zap, HeartPulse, ThermometerSun } from 'lucide-react';
import { HeroHeader, HeroContent } from './components/ui/new-hero-section';
import { ProgressiveBlur } from './components/ui/progressive-blur';
import { ThumbnailsCarousel } from './components/ui/signature';
import { RainbowButton } from './components/ui/rainbow-button';
import { cn } from './lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Component as ImageAutoSlider } from './components/ui/image-auto-slider';


interface FeatureProps {
  imageUrl: string;
  title: string;
  description: string;
}

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatarUrl: string;
}

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const Feature: React.FC<FeatureProps> = ({ imageUrl, title, description }) => (
    <div className="flex flex-col text-center group">
        <div className="overflow-hidden rounded-lg shadow-lg mb-4">
            <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
            />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
    </div>
);

const Testimonial: React.FC<TestimonialProps> = ({ name, role, content, rating, avatarUrl }) => (
  <Card className="flex flex-col">
    <CardHeader>
        <div className="flex items-center">
        {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        </div>
    </CardHeader>
    <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">"{content}"</p>
    </CardContent>
    <CardFooter>
      <div className="flex items-center gap-3">
        <img src={avatarUrl} alt={name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </CardFooter>
  </Card>
);

const PricingTier: React.FC<PricingTierProps> = ({ name, price, description, features, popular = false }) => (
  <Card className={`p-6 relative ${popular ? 'border-primary shadow-lg ring-2 ring-primary' : ''}`}>
    {popular && (
      <Badge variant="default" className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-800 to-red-600">
        Most Popular
      </Badge>
    )}
    <div className="text-center mb-6">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="text-3xl font-bold mb-2">{price}</div>
      <p className="text-muted-foreground">{description}</p>
    </div>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <RainbowButton className="w-full">
      Shop Now
    </RainbowButton>
  </Card>
);

const HeartFeedback: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative flex items-center gap-2 group heart-pulse-container cursor-pointer my-4"
            aria-label="5-star feedback from 59 verified buyers"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span className="heart-pulse">
                <svg
                    className="heart-pulse-svg w-6 h-6"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </span>
            <span className="text-sm font-medium text-muted-foreground">59 five-star confessions</span>
            
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[180px] p-3 rounded-lg text-xs text-center text-white z-10"
                        style={{
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            backgroundColor: 'rgba(17, 25, 40, 0.75)',
                            border: '1px solid rgba(255, 255, 255, 0.125)'
                        }}
                    >
                        10,327 women traded dimples for jaw-drops—join the curve.
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[rgba(17,25,40,0.75)]"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


const ProductShowcase: React.FC = () => {
    const productImages = [
        'https://i.imgur.com/TGa4kft.png',
        'https://i.imgur.com/QLgINQN.png',
        'https://i.imgur.com/2GmyS1j.png',
        'https://i.imgur.com/8qNcSCI.png'
    ];
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const colors = [
        { name: 'Onyx Black', hex: '#111827' },
        { name: 'Slate Gray', hex: '#4B5563' },
        { name: 'Burgundy Red', hex: '#881337' }
    ];

    const [selectedImage, setSelectedImage] = useState(productImages[0]);
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const getOfferEndDate = () => {
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 3);
        endDate.setHours(23, 59, 59, 999);
        return endDate;
    };

    const [offerEndDate] = useState(getOfferEndDate());

    const calculateTimeLeft = () => {
        const difference = +offerEndDate - +new Date();
        let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [offerEndDate]);

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Elevate Performance Leggings",
        "image": productImages,
        "description": "Experience the perfect blend of style, comfort, and performance. Designed to move with you, our leggings are a second skin you'll never want to take off.",
        "brand": {
            "@type": "Brand",
            "name": "Elevate London"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "59"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "39.59",
            "availability": "https://schema.org/InStock"
        }
    };


    return (
        <section id="shop" className="py-20 px-4">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <div className="container mx-auto">
                <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        Our Signature Collection
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Engineered for performance, designed for life. Discover your new favorite set.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Left Column: Image Gallery */}
                    <div className="flex flex-col gap-4 sticky top-24">
                        <img src={selectedImage} alt="Main product view" className="rounded-lg shadow-lg w-full aspect-[4/5] object-cover" />
                        <div className="grid grid-cols-4 gap-4">
                            {productImages.map((img, index) => (
                                <img
                                    key={img}
                                    src={img}
                                    onClick={() => setSelectedImage(img)}
                                    className={cn(
                                        'rounded-md cursor-pointer aspect-square object-cover transition-all',
                                        selectedImage === img ? 'ring-2 ring-primary ring-offset-2' : 'hover:opacity-80'
                                    )}
                                    alt={`Product thumbnail ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Product Details */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">Elevate Performance Leggings</h2>
                        <HeartFeedback />
                        <p className="text-2xl font-semibold text-primary mb-4">$39.59</p>
                        <p className="text-muted-foreground mb-6">Experience the perfect blend of style, comfort, and performance. Designed to move with you, our leggings are a second skin you'll never want to take off.</p>
                        
                        {/* Color Selector */}
                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-foreground mb-3">Color: <span className="text-muted-foreground font-normal">{selectedColor.name}</span></h3>
                            <div className="flex items-center gap-3">
                                {colors.map(color => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color)}
                                        className={cn(
                                            'w-8 h-8 rounded-full border-2 border-border/50 transition-transform transform hover:scale-110',
                                            selectedColor.name === color.name ? 'ring-2 ring-primary ring-offset-2' : ''
                                        )}
                                        style={{ backgroundColor: color.hex }}
                                        aria-label={`Select color ${color.name}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Size Selector */}
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-sm font-medium text-foreground">Size</h3>
                                <a href="#" className="text-sm text-primary hover:underline">Size Guide</a>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {sizes.map(size => (
                                    <Button
                                        key={size}
                                        variant={selectedSize === size ? 'default' : 'outline'}
                                        onClick={() => setSelectedSize(size)}
                                        className="w-16"
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Countdown Timer */}
                        <div className="my-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <Clock className="w-5 h-5 text-destructive" />
                                <h4 className="font-semibold text-destructive">Limited Time Offer!</h4>
                            </div>
                             <p className="text-sm text-muted-foreground mb-3">Prices go back up in:</p>
                            <div className="flex justify-center gap-2 tabular-nums">
                                <div className="flex flex-col items-center p-2 rounded-md bg-background/50 w-16">
                                <span className="text-2xl font-bold text-foreground">{String(timeLeft.days).padStart(2, '0')}</span>
                                <span className="text-xs text-muted-foreground">DAYS</span>
                                </div>
                                <div className="flex flex-col items-center p-2 rounded-md bg-background/50 w-16">
                                <span className="text-2xl font-bold text-foreground">{String(timeLeft.hours).padStart(2, '0')}</span>
                                <span className="text-xs text-muted-foreground">HOURS</span>
                                </div>
                                <div className="flex flex-col items-center p-2 rounded-md bg-background/50 w-16">
                                <span className="text-2xl font-bold text-foreground">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                <span className="text-xs text-muted-foreground">MINS</span>
                                </div>
                                <div className="flex flex-col items-center p-2 rounded-md bg-background/50 w-16">
                                <span className="text-2xl font-bold text-foreground">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                <span className="text-xs text-muted-foreground">SECS</span>
                                </div>
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <RainbowButton className="w-full h-12 text-lg">Add to Cart</RainbowButton>

                         {/* Product Highlights */}
                        <ul className="mt-8 space-y-3 text-sm">
                            <li className="flex items-center text-muted-foreground"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Four-way stretch fabric</li>
                            <li className="flex items-center text-muted-foreground"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> High-waisted, supportive fit</li>
                            <li className="flex items-center text-muted-foreground"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Moisture-wicking & breathable</li>
                             <li className="flex items-center text-muted-foreground"><CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Squat-proof material</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const BundleDealSection: React.FC = () => {
    const bundleItems = [
      {
        name: 'Performance Leggings',
        price: 39.59,
        imageUrl: 'https://i.imgur.com/TGa4kft.png',
      },
      {
        name: 'Perfomance Cropped',
        price: 19.99,
        imageUrl: 'https://i.imgur.com/85vN7RG.png',
      },
      {
        name: 'Performance Short',
        price: 29.99,
        imageUrl: 'https://i.imgur.com/cwTUkRo.png',
      },
    ];
  
    const originalTotal = bundleItems.reduce((acc, item) => acc + item.price, 0);
    const discountPercentage = 15;
    const discountAmount = originalTotal * (discountPercentage / 100);
    const finalTotal = originalTotal - discountAmount;
  
    return (
      <section id="bundle" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Complete The Look & Save 15%
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Frequently bought together. Get the full set for ultimate performance and style.
            </p>
          </div>
  
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              {bundleItems.map((item, index) => (
                <React.Fragment key={item.name}>
                  <Card className="w-64 text-center overflow-hidden">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-72 object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
                    </div>
                  </Card>
                  {index < bundleItems.length - 1 && (
                     <div className="p-4 rounded-full bg-card my-4 md:my-0">
                        <Plus className="w-8 h-8 text-primary" />
                     </div>
                  )}
                </React.Fragment>
              ))}
            </div>
  
            <Card className="p-8 w-full max-w-sm shrink-0">
              <CardTitle className="mb-4">Bundle Summary</CardTitle>
              <CardContent className="p-0">
                <ul className="space-y-2 mb-6 text-muted-foreground">
                    {bundleItems.map(item => (
                        <li key={item.name} className="flex justify-between">
                            <span>{item.name}</span>
                            <span>${item.price.toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex justify-between text-muted-foreground">
                        <span>Original Total</span>
                        <s >${originalTotal.toFixed(2)}</s>
                    </div>
                    <div className="flex justify-between text-destructive font-medium">
                        <span>Bundle Discount (15%)</span>
                        <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-foreground pt-2">
                        <span>You Pay</span>
                        <span>${finalTotal.toFixed(2)}</span>
                    </div>
                </div>
                <RainbowButton className="w-full h-12 text-lg mt-6">Add Bundle to Cart</RainbowButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  };

const VisibleResultGuaranteeSection: React.FC = () => (
    <section id="guarantee" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
            <div className="bg-card border border-primary/20 rounded-2xl p-8 md:p-12 text-center shadow-xl shadow-primary/10">
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-primary/10">
                        <Ribbon className="w-12 h-12 text-primary" />
                    </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Visible Results Guarantee
                </h2>
                <p className="text-xl md:text-2xl font-semibold text-primary mb-6">
                    Your Money Back + $50 Extra
                </p>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    If you don't notice a visible improvement in your comfort and performance in 60 days, we will not only refund 100% of your money, but we'll also give you $50 for your time. No questions, no bureaucracy. That's our commitment to your transformation.
                </p>
                <Button asChild size="lg" className="h-12 text-base">
                    <a href="#shop">
                        Try It Risk-Free
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </Button>
            </div>
        </div>
    </section>
);

const patentFeatures = [
    {
        icon: Zap,
        title: "Enhanced Circulation",
        description: "Far-infrared waves penetrate deep, increasing blood flow and oxygenation to your cells for enhanced vitality.",
    },
    {
        icon: HeartPulse,
        title: "Muscle Recovery",
        description: "Reduces muscle soreness and fatigue post-workout by flushing out lactic acid and metabolic waste.",
    },
    {
        icon: ThermometerSun,
        title: "Heat Activation",
        description: "Our patented BioCeramic fabric captures your body's natural heat and converts it into therapeutic infrared energy.",
    }
];

const PatentPulseSection: React.FC = () => (
    <section id="patent-pulse" aria-label="Patented microcirculation technology" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    24-Hour Blood-Wave™ Technology
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Clothes that look casual—but behave like a medical device.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {patentFeatures.map((feature, index) => (
                    <Card key={index} className="text-center p-8">
                        <div className="flex justify-center mb-6">
                            <div className="p-4 rounded-full bg-primary/10">
                                <feature.icon className="w-8 h-8 text-primary" />
                            </div>
                        </div>
                        <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                    </Card>
                ))}
            </div>
            <div className="text-center mt-16">
                <Button asChild size="lg" className="h-12 text-base">
                    <a href="#shop">
                        Discover The Tech
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </Button>
            </div>
        </div>
    </section>
);

const FAQItem: React.FC<{
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
  }> = ({ question, answer, isOpen, onClick }) => {
    return (
      <div className="border-b border-border/50">
        <button
          onClick={onClick}
          className="w-full flex justify-between items-center py-5 text-left text-lg font-medium text-foreground hover:bg-muted/50 rounded-lg px-2 transition-colors"
          aria-expanded={isOpen}
        >
          <span>{question}</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <p className="pb-5 pl-2 pr-8 text-muted-foreground">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  const faqsData = [
    {
      question: "What are your leggings made of?",
      answer: "Our leggings are crafted from a premium blend of 75% polyester and 25% spandex. This combination provides a buttery-soft feel, four-way stretch, and excellent moisture-wicking properties to keep you comfortable during any activity."
    },
    {
      question: "How do I find the right size?",
      answer: "We recommend checking our detailed size guide, which includes measurements for waist, hips, and inseam. You can find it linked next to the size selector on each product page. If you're between sizes, we suggest sizing down for a more compressive fit or sizing up for a more relaxed feel."
    },
    {
      question: "What is your return policy?",
      answer: "We offer 30-day easy returns for all items in new, unworn condition with tags attached. If you're not completely satisfied with your purchase, you can initiate a return through our online portal for a full refund or exchange. See our 'Shop With Confidence' section for more details."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard domestic shipping typically takes 3-5 business days. We also offer expedited shipping options at checkout. All orders over $75 qualify for free standard shipping. You'll receive a tracking number as soon as your order ships."
    },
    {
      question: "Are your products ethically made?",
      answer: "Yes, we are committed to ethical and sustainable manufacturing practices. Our factories are certified to ensure fair labor conditions and environmental responsibility. We believe in creating high-quality activewear that you can feel good about wearing."
    },
  ];

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqsData.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };

    return (
        <section id="faq" className="py-20 px-4 bg-muted/30">
             <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Your questions, answered. If you don't find what you're looking for, feel free to contact us.
                    </p>
                </div>

                <div className="bg-card p-4 sm:p-8 rounded-xl shadow-sm">
                    {faqsData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => toggleFAQ(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
      { id: 1, text: "Hi there! How can I help you today with your Elevate London gear?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<null | HTMLDivElement>(null);
  
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    useEffect(() => {
      scrollToBottom();
    }, [messages]);
  
    const handleSendMessage = (e: React.FormEvent) => {
      e.preventDefault();
      if (inputValue.trim() === '') return;
  
      const userMessage = {
        id: Date.now(),
        text: inputValue,
        sender: 'user',
      };
  
      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
  
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: "Thanks for reaching out! An agent will be with you shortly. In the meantime, have you checked our FAQ section?",
          sender: 'bot',
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1500);
    };
  
    return (
      <>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed bottom-24 right-4 sm:right-8 w-[calc(100%-2rem)] sm:w-80 h-[450px] bg-card border border-border rounded-xl shadow-2xl flex flex-col z-50"
            >
              <header className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="font-semibold text-foreground">Elevate Support</h3>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                  <X className="w-4 h-4" />
                </Button>
              </header>
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map(message => (
                  <div key={message.id} className={cn('flex', message.sender === 'user' ? 'justify-end' : 'justify-start')}>
                    <div className={cn(
                      'p-3 rounded-lg max-w-[80%] text-sm',
                      message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                    )}>
                      {message.text}
                    </div>
                  </div>
                ))}
                 <div ref={messagesEndRef} />
              </div>
              <form onSubmit={handleSendMessage} className="p-4 border-t border-border flex items-center gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                  aria-label="Chat message input"
                />
                <Button type="submit" size="icon" className="h-9 w-9 flex-shrink-0" aria-label="Send message">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
  
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-4 right-4 sm:right-8 bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-lg z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            scale: [1, 1.05, 1],
            transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
          aria-label="Open chat widget"
        >
          {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
        </motion.button>
      </>
    );
  };
  
const NikeLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="40" width="80" {...props}>
        <path d="M22.345 9.472c-.222-.392-.903-.78-1.5-.923-.523-.126-1.11-.18-1.569-.175-1.134.012-2.48.51-4.04 1.49-1.56.98-3.266 2.45-5.11 4.41-1.35 1.433-2.64 3.2-3.86 5.29-.39.67-.73 1.34-1.02 2.01-.22.5-.41 1-.56 1.48-.13.41-.22.8-.25 1.17-.03.37.03.68.18.91.15.23.42.35.81.35.39 0 .68-.12.87-.35.2-.23.28-.55.25-.95-.03-.4.04-.83.18-1.28.15-.45.36-.92.63-1.4.27-.48.6-.98.98-1.5.86-1.18 1.91-2.43 3.12-3.75 2.18-2.31 4.5-3.92 6.93-4.81.6-.22 1.13-.33 1.58-.33.39 0 .68.06.87.18.19.12.28.29.28.52 0 .18-.06.35-.18.5-.12.15-.29.23-.5.23-.21 0-.39-.03-.53-.08-.9-.35-2.01-.2-3.32.44-1.3.64-2.43 1.6-3.38 2.88-1.05 1.42-1.58 2.9-1.58 4.46 0 .34.05.66.15.95.1.29.29.44.56.44.28 0 .49-.15.63-.44.14-.29.22-.6.22-.92 0-.98.34-1.95 1.02-2.9.68-.95 1.5-1.74 2.44-2.36.94-.62 1.95-.93 3.02-.93.84 0 1.55.15 2.12.44.57.29.86.7.86 1.23 0 .34-.1.65-.29.93s-.46.42-.81.42c-.23 0-.43-.06-.59-.18-.16-.12-.24-.29-.24-.52 0-.23.12-.43.35-.59.23-.16.5-.24.81-.24.7 0 1.31.17 1.84.5.53.33.8 1.02.8 2.07 0 .5-.12.98-.35 1.45-.23.47-.59.85-1.05 1.16-.47.31-1.02.47-1.65.47-.78 0-1.49-.19-2.12-.56-.63-.37-1.14-.88-1.53-1.53-.28-.48-.48-1.04-.6-1.67-.09-.44-.13-.89-.13-1.34 0-1.1.32-2.1.95-2.99.63-.89 1.44-1.58 2.44-2.06s2.06-.73 3.19-.73c.68 0 1.28.09 1.81.28.53.19.95.44 1.28.78.33.34.49.7.49 1.09 0 .39-.12.71-.35.95-.23.24-.55.37-.95.37-.28 0-.52-.08-.72-.25-.2-.17-.3-.38-.3-.65 0-.23.09-.43.28-.59.19-.16.42-.24.72-.24.23 0 .46.03.68.08.22.05.43.12.63.19.2.07.38.16.53.25.15.09.28.2.38.33.1.13.15.26.15.41 0 .23-.08.44-.25.63-.17.19-.38.28-.63.28-.33 0-.6-.09-.81-.28-.21-.19-.32-.41-.32-.68 0-.41.15-.78.44-1.09.29-.31.67-.47 1.13-.47.31 0 .6.04.87.12.27.08.52.19.75.33.23.14.44.3.63.47.19.17.34.36.47.56.13.2.22.42.28.65.03.11.05.23.05.34z" />
    </svg>
);

const AdidasLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="40" width="80" {...props}>
        <path d="m14.28.23-3.03 8.65-3.34-3.69L0 12.35l5.12 3.86 4.4-4.82h.02l4.43-4.85H14.3zm-4.46 13.92-1.92 2.11L3.33 24h17.31l-3.6-7.85-4.52-4.95zM8.8 6.27,12.12,0H7.03L5.8 2.65z" />
    </svg>
);

const UnderArmourLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" height="40" width="80" {...props}>
        <path d="M12.76 17.52c.45 0 .89-.04 1.32-.12.44-.08.86-.22 1.25-.41.4-.19.75-.44 1.07-.75.32-.3.57-.68.75-1.12.18-.44.27-.94.27-1.5 0-1.03-.38-1.9-1.13-2.61-.75-.72-1.68-1.07-2.79-1.07-.46 0-.9.04-1.32.12-.43.08-.85.22-1.24.41-.39.19-.74.44-1.06.75-.32.3-.57.68-.75 1.12-.18.44-.27.94-.27 1.5 0 1.03.38 1.9 1.13 2.61.75.72 1.67 1.07 2.78 1.07zM24 8.24a4.12 4.12 0 0 0-1.32-3.14A4.6 4.6 0 0 0 19.45 4h-4.3v4.29c.7-.42 1.48-.63 2.34-.63 1.63 0 2.98.56 4.04 1.67s1.59 2.5 1.59 4.16c0 .9-.16 1.76-.47 2.56-.32.8-.78 1.48-1.4 2.02-.6.55-1.34.96-2.2 1.23-.87.27-1.8.4-2.8.4H11.24V0H0v24h12.76c1.65 0 3.2-.3 4.63-.89 1.44-.6 2.66-1.44 3.66-2.54 1-1.1 1.76-2.43 2.28-3.98.52-1.56.77-3.23.77-5.02V8.24z" />
    </svg>
);
const asSeenInBrands = [
    {
      name: 'Nike',
      logo: NikeLogo,
      headline: 'Nike® Therma-FIT ADV – 43% faster cellulite heat-breakdown.',
    },
    {
      name: 'Adidas',
      logo: AdidasLogo,
      headline: 'Adidas® CELLIANT® Tech – 38% more micro-circulation.',
    },
    {
      name: 'Under Armour',
      logo: UnderArmourLogo,
      headline: 'UA RUSH™ Tech – 25% more power output.',
    },
    {
      name: 'Lululemon',
      logo: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 512 512" fill="currentColor" height="40" width="80" {...props}>
            <path d="M432.8 90.6c-24.8-19.1-55-29.2-87.3-29.2-39.6 0-76.3 15.3-103.9 43.1-27.4-27.7-64-43.1-103.8-43.1-32.2 0-62.5 10.1-87.3 29.2-25.1 19.3-43.9 46.2-54.3 77.2-10.4 31-12.2 64.6-5.6 96.5 6.7 31.8 21.5 60.8 42.8 84.8 21.4 24 49 42.1 80.8 52.3 31.7 10.2 65.9 12.1 98.1 5.6 32.3-6.5 61.5-21.5 85.6-43.1 23.9 21.6 53.1 36.6 85.3 43.1 32.2 6.5 66.4 4.6 98.1-5.6 31.8-10.2 59.4-28.3 80.8-52.3 21.3-24 36.1-53 42.8-84.8 6.6-31.9 4.8-65.5-5.6-96.5-10.4-31-29.2-57.9-54.3-77.2zM256.3 394.2c-20.1 0-39.6-4.5-57.1-13.3-17.6-8.8-32.9-21.7-44.9-37.5-12-15.8-20.5-34.3-24.9-54.3s-4.3-41.2 1-61.4c5.3-20.2 15.6-38.6 30-54.2 14.5-15.6 32.7-27.9 53-35.9 20.3-8 42-11.4 63.4-9.9 21.4 1.5 41.8 7.9 59.6 18.7 17.8 10.8 32.8 25.8 43.6 43.6 10.8 17.8 17.2 38.2 18.7 59.6 1.5 21.4-1.9 43.1-9.9 63.4-8 20.3-20.3 38.5-35.9 53s-34 24.7-54.2 30c-20.2 5.3-41.4 6.3-61.4 1z"/>
        </svg>
      ),
      headline: 'Lululemon® NULU™ – Feels 80% more weightless.',
    },
    {
      name: 'Spanx',
      logo: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 128 40" fill="currentColor" height="25" width="80" {...props} className="font-sans font-bold">
            <text x="0" y="30" fontSize="32">SPANX</text>
        </svg>
      ),
      headline: 'Spanx® POWER-MAPPED – Sculpts & smooths instantly.',
    },
];

const AsSeenInSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.8,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    useEffect(() => {
        if (isHovered) return;
        
        const totalItems = asSeenInBrands.length;
        const animationDuration = totalItems * 800;
        const pauseDuration = 3000; 

        const timer = setTimeout(() => {
            setAnimationKey(prevKey => prevKey + 1);
        }, animationDuration + pauseDuration);

        return () => clearTimeout(timer);
    }, [animationKey, isHovered]);

    return (
        <section className="bg-black py-20">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-12">
                   The Technology Used By Industry Leaders
                </h2>
                <div 
                    className="overflow-hidden"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        key={animationKey}
                        className="flex flex-nowrap justify-center items-start gap-x-10 sm:gap-x-16"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {asSeenInBrands.map((brand, index) => (
                            <motion.div 
                                key={`${brand.name}-${index}`} 
                                variants={itemVariants} 
                                className="flex flex-col items-center justify-start text-center flex-shrink-0 w-32 sm:w-40"
                            >
                                <brand.logo className="h-10 text-stone-300" />
                                <p className="text-laser-red text-xs font-bold mt-4 h-16 text-balance">
                                    {brand.headline}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
  

const LandingPage: React.FC = () => {
  const features: FeatureProps[] = [
    {
      imageUrl: "https://i.imgur.com/FrRIfa2.jpeg",
      title: "Premium Fabric",
      description: "High-quality material with moisture-wicking and anti-odor technology"
    },
    {
      imageUrl: "https://i.imgur.com/HKQcXgO.jpeg",
      title: "Perfect Fit",
      description: "Ergonomic design that adapts perfectly to your body shape"
    },
    {
      imageUrl: "https://images.pexels.com/photos/7991487/pexels-photo-7991487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Ultimate Comfort",
      description: "Freedom of movement for intense workouts and daily wear"
    }
  ];

  const testimonials: TestimonialProps[] = [
    {
      name: "Sarah Johnson",
      role: "Personal Trainer, London",
      content: "The most comfortable set I've ever worn! Perfect for all types of workouts.",
      rating: 5,
      avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Emma Williams",
      role: "Professional Athlete, NYC",
      content: "Exceptional quality and perfect fit. I recommend it to all my clients.",
      rating: 5,
      avatarUrl: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Sophie Davis",
      role: "Fitness Influencer, LA",
      content: "Beautiful design and incredible functionality. My favorite set ever!",
      rating: 5,
      avatarUrl: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const pricingTiers: PricingTierProps[] = [
    {
      name: "Essential Set",
      price: "$59.99",
      description: "Perfect to get started",
      features: ["Basic sports bra", "Basic leggings", "1 color available", "Standard shipping"]
    },
    {
      name: "Premium Set",
      price: "$75.99",
      description: "Our best seller",
      features: ["Premium sports bra", "Premium leggings", "3 colors available", "Free worldwide shipping", "Extended warranty"],
      popular: true
    },
    {
      name: "Elite Bundle",
      price: "$124.99",
      description: "For serious athletes",
      features: ["2 premium sports bras", "2 premium leggings", "All colors available", "Express shipping", "Lifetime warranty"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />

      <main className="overflow-x-hidden">
        <HeroContent />
        
        <AsSeenInSection />

        {/* Gallery Section */}
        <section id="gallery" className="pt-0 pb-20 px-4 bg-muted/30">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                        Explore Our Collection
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover the perfect gear that moves with you.
                    </p>
                </div>
                <div className="w-full max-w-4xl mx-auto">
                    <ThumbnailsCarousel />
                </div>
            </div>
        </section>

        {/* Product Showcase Section */}
        <ProductShowcase />
        
        {/* Guarantee Section */}
        <VisibleResultGuaranteeSection />

        {/* Features Section */}
        <section id="features" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Choose Our Premium Set?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Premium quality, exceptional comfort and modern style in every piece.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>
        
        <PatentPulseSection />

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Loved by Thousands Worldwide
              </h2>
              <p className="text-xl text-muted-foreground">
                See what our customers say about our premium activewear.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Section */}
        <section id="results" className="py-20 bg-black text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Real Results, Real Transformations
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our activewear isn't just about looking good. It's about feeling empowered to achieve your goals.
              </p>
            </div>
            <ImageAutoSlider />
          </div>
        </section>

        {/* Bundle Deal Section */}
        <BundleDealSection />

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Special Pricing
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the perfect set for your fitness journey.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <PricingTier key={index} {...tier} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Elevate Your Workout?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of women who have transformed their fitness journey with our premium sets.
            </p>
            <div className="flex flex-col gap-6 items-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button className="bg-gradient-to-r from-red-800 to-red-600 hover:from-red-900 hover:to-red-700 text-white w-full sm:w-auto">
                  Get 15% Off
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  <span>Free shipping on orders $75+</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  <span>30-day free returns</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Trust Seals Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="border-t border-border pt-10 flex flex-col items-center justify-center gap-6 text-center md:flex-row md:justify-between">
            <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
              <Lock className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>SSL SECURE & ENCRYPTED PAYMENT</span>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground/80 grayscale">
              <CreditCard className="w-8 h-8"/>
              <span className="font-semibold text-lg">VISA</span>
              <span className="font-semibold text-lg">Mastercard</span>
              <span className="font-semibold text-lg">PayPal</span>
              <span className="font-semibold text-lg">Amex</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 text-foreground">ELEVATE LONDON</div>
              <p className="text-muted-foreground text-sm">
                Elevating women's fitness experience worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Products</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Sets</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Sports Bras</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Leggings</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Returns & Exchanges</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 ELEVATE LONDON. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default LandingPage;
    