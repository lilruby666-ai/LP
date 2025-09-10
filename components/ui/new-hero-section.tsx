import React from 'react'
import { Button } from './button'
import { cn } from '../../lib/utils'
import { Menu, X, ChevronRight, Star } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'
import { AnimatedTooltip } from './animated-tooltip'

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M19.05 4.94A9.99 9.99 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.39 1.23 4.85L2 22l5.15-1.23A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10a9.99 9.99 0 0 0-2.95-7.06zM12 20c-1.55 0-3.02-.45-4.29-1.23L6.9 19.1l.4 1.8-1.8-.4-1.12.82A8 8 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.55-7.23c-.24-.12-1.42-.7-1.64-.78-.23-.08-.39-.12-.56.12-.17.24-.62.78-.76.93-.14.16-.28.18-.52.06s-1.03-.38-1.96-1.21c-.72-.65-1.2-1.45-1.34-1.69-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.56-.42-.15 0-.31-.02-.48-.02s-.43.06-.66.3c-.23.24-.87.85-.87 2.07s.9 2.4 1.02 2.56c.12.17 1.76 2.67 4.25 3.75 2.5 1.08 2.5.72 2.94.69.44-.02 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.23-.16-.48-.28z"/>
    </svg>
);

const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      },
      {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
      },
];

export function HeroContent() {
    return (
        <>
            <section>
                <div className="relative py-24 md:pb-32 lg:pb-36 lg:pt-32">
                    <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                        <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                            <h1 className="mt-8 max-w-4xl text-balance text-4xl font-bold md:text-5xl lg:mt-16 xl:text-6xl">Blackout Curve™: The Zero-Photoshop Legging That Erases Cellulite In 3 Seconds—Even Under FBI Surveillance Lighting</h1>
                            <p className="mt-8 max-w-3xl text-balance text-lg text-muted-foreground">BioCeramic: far-infrared micro-crystals woven into the yarn turn your own body heat into a 24/7 cellulite-melting laser—sculpting smoother, tighter skin without a single squat.</p>

                            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-12 rounded-full pl-5 pr-3 text-base">
                                    <a href="#shop">
                                        <span className="text-nowrap">Shop The Blackout Curve™</span>
                                        <ChevronRight className="ml-1" />
                                    </a>
                                </Button>
                                <Button
                                    key={2}
                                    asChild
                                    size="lg"
                                    variant="ghost"
                                    className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                    <a href="#results">
                                        <span className="text-nowrap">See The Results</span>
                                    </a>
                                </Button>
                            </div>

                            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                                <AnimatedTooltip items={people} />
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-center sm:justify-start">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1 text-center sm:text-left">From 10,000+ peoples using</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="aspect-[2/3] absolute inset-1 top-20 overflow-hidden rounded-3xl border border-black/10 sm:aspect-video lg:rounded-[3rem] dark:border-white/5">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="size-full object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
                            src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"></video>
                    </div>
                </div>
            </section>
        </>
    )
}

const menuItems = [
    { name: 'Shop', href: '#shop' },
    { name: 'Features', href: '#features' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <nav
                data-state={menuState ? 'active' : 'inactive'}
                className="group fixed z-20 w-full pt-2">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-background/50 backdrop-blur-2xl')}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <a
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </a>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                                    <a href="https://wa.me/15551234567?text=Hi!%20I'm%20interested%20in%20Elevate%20London%20products." target="_blank" rel="noopener noreferrer" className="flex items-center">
                                        <WhatsAppIcon className="w-5 h-5 mr-2" />
                                        <span>Chat on WhatsApp</span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}

const Logo = () => {
    return (
        <span className="text-xl font-bold tracking-tight text-foreground">
            ELEVATE LONDON
        </span>
    )
}