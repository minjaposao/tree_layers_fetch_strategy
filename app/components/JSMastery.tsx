import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Component() {
  const testimonials = [
    {
      name: "George Harris",
      role: "Full Stack Developer",
      avatar: "/placeholder.svg?height=40&width=40",
      text: "I've watched all JSM's YouTube videos, but what's available on here is just next level. It's clearer, deeper, and actually helps me build things that matter.",
      verified: true,
    },
    {
      name: "Arjun Mehta",
      role: "Software Developer",
      avatar: "/placeholder.svg?height=40&width=40",
      text: "Recently joined JSM Pro, and got my first real dev job in just a few months. It gave me exactly what I needed to switch careers.Staying subscribed for the community! :)",
      verified: true,
    },
    {
      name: "Agus Pratama",
      role: "Web Developer",
      avatar: "/placeholder.svg?height=40&width=40",
      text: "I was scared of AI taking my job soon but Adrian taught me some stuff that my boss loved and now I'm not worried at all! Might even get promoted!!!",
      verified: true,
    },
    {
      name: "Jack Wilson",
      role: "Frontend Developer",
      avatar: "/placeholder.svg?height=40&width=40",
      text: "After going through the Next.js course I was able to optimize my work's codebase and finally got that raise! Totally worth it.",
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-black font-bold text-sm">JS</span>
          </div>
          <span className="text-white font-semibold">MASTERY</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            All Courses
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Learning path
          </a>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">Login to your account</Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative px-6 py-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Go From</span>
            <br />
            <span className="text-orange-400">I Know This</span> <span className="text-white">to</span>{" "}
            <span className="text-green-400">I Built This</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Stop consuming. Start creating. Build real projects that get you hired.
          </p>
        </div>

        {/* Central Illustration with Testimonials */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Central Illustration */}
          <div className="relative z-10">
            {/* <Image
              src="/hero-illustration.png"
              alt="Technology stack illustration with JS, TS, Node.js, React and other technologies"
              width={400}
              height={400}
              className="w-80 h-80 md:w-96 md:h-96 object-contain"
            /> */}
          </div>

          {/* Testimonial Cards - Positioned around the illustration */}
          {/* Top Left */}
          <Card className="absolute top-0 left-0 md:left-8 w-72 p-4 bg-slate-800/90 border-slate-700 backdrop-blur-sm">
            <div className="flex items-start space-x-3 mb-3">
              <Image
                src={testimonials[0].avatar || "/placeholder.svg"}
                alt={testimonials[0].name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="flex items-center space-x-1">
                  <h4 className="text-white font-semibold text-sm">{testimonials[0].name}</h4>
                  {testimonials[0].verified && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-400 text-xs">{testimonials[0].role}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">{testimonials[0].text}</p>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </Card>

          {/* Top Right */}
          <Card className="absolute top-0 right-0 md:right-8 w-72 p-4 bg-slate-800/90 border-slate-700 backdrop-blur-sm">
            <div className="flex items-start space-x-3 mb-3">
              <Image
                src={testimonials[1].avatar || "/placeholder.svg"}
                alt={testimonials[1].name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="flex items-center space-x-1">
                  <h4 className="text-white font-semibold text-sm">{testimonials[1].name}</h4>
                  {testimonials[1].verified && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-400 text-xs">{testimonials[1].role}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">{testimonials[1].text}</p>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </Card>

          {/* Bottom Left */}
          <Card className="absolute bottom-0 left-0 md:left-8 w-72 p-4 bg-slate-800/90 border-slate-700 backdrop-blur-sm">
            <div className="flex items-start space-x-3 mb-3">
              <Image
                src={testimonials[2].avatar || "/placeholder.svg"}
                alt={testimonials[2].name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="flex items-center space-x-1">
                  <h4 className="text-white font-semibold text-sm">{testimonials[2].name}</h4>
                  {testimonials[2].verified && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-400 text-xs">{testimonials[2].role}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">{testimonials[2].text}</p>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </Card>

          {/* Bottom Right */}
          <Card className="absolute bottom-0 right-0 md:right-8 w-72 p-4 bg-slate-800/90 border-slate-700 backdrop-blur-sm">
            <div className="flex items-start space-x-3 mb-3">
              <Image
                src={testimonials[3].avatar || "/placeholder.svg"}
                alt={testimonials[3].name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="flex items-center space-x-1">
                  <h4 className="text-white font-semibold text-sm">{testimonials[3].name}</h4>
                  {testimonials[3].verified && (
                    <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-400 text-xs">{testimonials[3].role}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">{testimonials[3].text}</p>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            They Started Like <span className="text-blue-400">You</span>. Now They Work{" "}
            <span className="text-green-400">Here</span>
          </h2>
        </div>
      </main>
    </div>
  )
}
