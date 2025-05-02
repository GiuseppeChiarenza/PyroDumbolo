import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Calendar, Sparkles, Zap, Users, MessageSquare, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/videos/fireworks-bg.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Fireworks display"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority
            />
          </video>
        </div>
        <div className="container relative z-20 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-block bg-red-500/20 px-6 py-3 text-2xl md:text-3xl lg:text-4xl font-bold text-red-300 mb-6 rounded-lg">
              Pyrotecnica Dumbolo
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight max-w-3xl">
              Igniting <span className="text-red-500">Unforgettable</span> Moments
            </h1>
            <p className="max-w-[700px] text-zinc-300 md:text-xl">
              Professional fireworks displays and pyrotechnic effects for weddings, concerts, festivals, and corporate
              events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Book a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-950">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <ChevronRight className="h-8 w-8 text-white rotate-90" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-300">Our Services</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Spectacular Pyrotechnic Solutions</h2>
            <p className="max-w-[700px] text-zinc-400">
              From intimate celebrations to grand spectacles, we create custom fireworks displays that leave a lasting
              impression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Card className="bg-zinc-900 border-zinc-800 hover:border-red-500/50 transition-all duration-300">
              <CardHeader>
                <Sparkles className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="text-xl">Custom Fireworks Displays</CardTitle>
                <CardDescription className="text-zinc-400">
                  Tailor-made pyrotechnic shows designed to match your event's theme and atmosphere.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-950/30 w-full">
                  Learn More <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 hover:border-red-500/50 transition-all duration-300">
              <CardHeader>
                <Calendar className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="text-xl">Wedding Pyrotechnics</CardTitle>
                <CardDescription className="text-zinc-400">
                  Romantic and elegant fireworks to make your special day truly magical.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-950/30 w-full">
                  Learn More <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 hover:border-red-500/50 transition-all duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="text-xl">Stage Effects</CardTitle>
                <CardDescription className="text-zinc-400">
                  Dynamic pyrotechnic and special effects for concerts, theaters, and performances.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-950/30 w-full">
                  Learn More <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800 hover:border-red-500/50 transition-all duration-300">
              <CardHeader>
                <Play className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="text-xl">LED & Light Shows</CardTitle>
                <CardDescription className="text-zinc-400">
                  Cutting-edge LED technology combined with pyrotechnics for unforgettable visual experiences.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-950/30 w-full">
                  Learn More <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio/Gallery Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-300">Our Portfolio</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Spectacular Moments Captured</h2>
            <p className="max-w-[700px] text-zinc-400">
              Browse through our gallery of past events and be inspired for your next celebration.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-zinc-800">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="weddings">Weddings</TabsTrigger>
                <TabsTrigger value="concerts">Concerts</TabsTrigger>
                <TabsTrigger value="corporate">Corporate</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="relative group overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=600&width=800`}
                      alt={`Fireworks display ${item}`}
                      width={800}
                      height={600}
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-xl font-bold">Spectacular Event {item}</h3>
                        <p className="text-zinc-300">Location, Year</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Other tab contents would be similar but with filtered images */}
            <TabsContent value="weddings" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 3, 5].map((item) => (
                  <div key={item} className="relative group overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=600&width=800`}
                      alt={`Wedding fireworks ${item}`}
                      width={800}
                      height={600}
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-xl font-bold">Wedding Celebration {item}</h3>
                        <p className="text-zinc-300">Location, Year</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="concerts" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[2, 4].map((item) => (
                  <div key={item} className="relative group overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=600&width=800`}
                      alt={`Concert fireworks ${item}`}
                      width={800}
                      height={600}
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-xl font-bold">Concert Event {item}</h3>
                        <p className="text-zinc-300">Location, Year</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="corporate" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[6].map((item) => (
                  <div key={item} className="relative group overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=600&width=800`}
                      alt={`Corporate event ${item}`}
                      width={800}
                      height={600}
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-xl font-bold">Corporate Event {item}</h3>
                        <p className="text-zinc-300">Location, Year</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-12">
            <Button className="bg-red-600 hover:bg-red-700">View Full Gallery</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-300 mb-4">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
                Crafting Spectacular Moments Since 1995
              </h2>
              <p className="text-zinc-300 mb-6">
                Pyrotecnica Dumbolo has been at the forefront of the pyrotechnics industry for over 25 years. Our team
                of skilled technicians and creative designers work together to create breathtaking displays that
                captivate audiences and create lasting memories.
              </p>
              <p className="text-zinc-300 mb-6">
                Safety is our top priority. All our shows are meticulously planned and executed by certified
                professionals, ensuring a spectacular yet secure experience for everyone involved.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Certified pyrotechnicians with decades of experience",
                  "State-of-the-art equipment and materials",
                  "Comprehensive safety protocols and insurance",
                  "Environmentally conscious practices",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 bg-red-500 rounded-full p-1">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-red-600 hover:bg-red-700">Learn More About Us</Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 opacity-30 blur-xl"></div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Pyrotechnics team at work"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-300">Testimonials</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">What Our Clients Say</h2>
            <p className="max-w-[700px] text-zinc-400">
              Don't just take our word for it. Hear from those who have experienced our spectacular displays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Sarah & Michael",
                role: "Wedding Clients",
                quote:
                  "The fireworks display at our wedding was absolutely magical. Our guests are still talking about it months later. Pyrotecnica Sarro made our special day truly unforgettable.",
              },
              {
                name: "John Davis",
                role: "Event Director, Summer Festival",
                quote:
                  "Working with Pyrotecnica Sarro for our annual festival has been a game-changer. Their professionalism, creativity, and attention to detail are unmatched. The displays get better every year!",
              },
              {
                name: "Corporate Events Team",
                role: "Tech Company Annual Gala",
                quote:
                  "The combination of LED light show and pyrotechnics created the perfect atmosphere for our corporate event. The team was responsive, flexible, and delivered beyond our expectations.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-zinc-300 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-xl font-bold text-red-500 mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-zinc-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-300 mb-4">
                Get In Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
                Ready to Create Something Spectacular?
              </h2>
              <p className="text-zinc-300 mb-8">
                Contact us today to discuss your event and how we can make it unforgettable with our custom pyrotechnic
                displays.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                    <MessageSquare className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-zinc-400">info@pyrotecnicadumbolo.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <p className="text-zinc-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                    <Calendar className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Office Hours</h3>
                    <p className="text-zinc-400">Monday - Friday: 9am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                      Name
                    </label>
                    <input
                      id="name"
                      placeholder="Your name"
                      className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="event" className="text-sm font-medium text-zinc-300">
                    Event Type
                  </label>
                  <select
                    id="event"
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="concert">Concert/Festival</option>
                    <option value="private">Private Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your event..."
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 border-t border-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-red-500" />
                <span className="text-xl font-bold">Pyrotecnica Dumbolo</span>
              </div>
              <p className="text-zinc-400">Creating spectacular moments through the art of pyrotechnics since 1995.</p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="bg-zinc-900 p-2 rounded-full hover:bg-red-500/20 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 text-zinc-300" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  "Custom Fireworks Displays",
                  "Wedding Pyrotechnics",
                  "Stage Effects",
                  "LED & Light Shows",
                  "Corporate Events",
                  "Festivals & Concerts",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-zinc-400 hover:text-red-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                {["About Us", "Our Team", "Testimonials", "Gallery", "Blog", "Careers"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-zinc-400 hover:text-red-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "Safety Information",
                  "Licensing",
                  "Contact Us",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-zinc-400 hover:text-red-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Pyrotecnica Dumbolo. All rights reserved.
            </p>
            <p className="text-zinc-500 text-sm mt-4 md:mt-0">
              Designed with passion for creating spectacular moments.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
