'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Code, Smile, Zap, Github, Twitter, Linkedin, Maximize2, Minimize2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ReactConfetti from 'react-confetti'
import { useWindowSize } from 'react-use'

const FeatureCard = ({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) => (
  <div className={`bg-white bg-opacity-80 p-6 rounded-lg shadow-md backdrop-blur-sm border-2 ${color}`}>
    <div className={`${color.replace('border', 'text')} mb-4`}>{icon}</div>
    <h3 className={`text-lg font-semibold mb-2 ${color.replace('border', 'text')}`}>{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
)

const SocialIcon = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
    {icon}
  </a>
)

const VideoSection = () => {
  const [isEnlarged, setIsEnlarged] = useState(false)

  return (
    <div className="relative">
      <motion.div 
        className={`bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg shadow-lg relative z-10 border-2 border-gray-700 transition-all duration-300 ease-in-out`}
        whileHover={{ scale: isEnlarged ? 1 : 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-64 md:h-80">
          <video 
            className="w-full h-full object-cover rounded"
            src="/placeholder.mp4"
            controls
            loop
            muted
          >
            Your browser does not support the video tag.
          </video>
          <button 
            onClick={() => setIsEnlarged(!isEnlarged)} 
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300"
          >
            {isEnlarged ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
          </button>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-green-400">Confetti Coder in action</span>
          <Sparkles className="h-5 w-5 text-yellow-400" />
        </div>
      </motion.div>
      <AnimatePresence>
        {isEnlarged && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={() => setIsEnlarged(false)}
          >
            <div className="relative w-11/12 h-5/6 max-w-4xl">
              <video 
                className="w-full h-full object-contain rounded"
                src="/placeholder.mp4"
                controls
                loop
                autoPlay
                muted
              >
                Your browser does not support the video tag.
              </video>
              <button 
                onClick={(e) => { e.stopPropagation(); setIsEnlarged(false); }} 
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300"
              >
                <Minimize2 size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function LandingPage() {
  const [confettiPieces, setConfettiPieces] = useState(200)
  const { width, height } = useWindowSize()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const timer = setTimeout(() => {
      setConfettiPieces(50) // Reduce confetti after 5 seconds
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900 relative overflow-hidden">
      {isClient && (
        <ReactConfetti
          width={width}
          height={height}
          numberOfPieces={confettiPieces}
          recycle={true}
          colors={['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B']} // Brighter confetti colors
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} // Ensure it covers the entire viewport
        />
      )}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <header className="text-center mb-16">
          <motion.h1 
            className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
           Confetti Coder
          </motion.h1>
          <motion.p 
            className="text-xl mb-8 text-gray-700"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Add a sprinkle of joy to your coding experience
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
              onClick={() => window.open('https://marketplace.visualstudio.com/items?itemName=chongdashu.confetti-coder', '_blank')}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Install Extension
            </Button>
          </motion.div>
        </header>
        
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-white bg-opacity-80 p-6 rounded-lg backdrop-blur-sm border-2 border-blue-300">
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">Celebrate Every Line of Code</h2>
            <p className="text-lg mb-6 text-gray-700">
              Confetti Coder is a delightful VS Code extension that adds a touch of celebration to your coding sessions. 
              Experience customizable confetti effects as you type, making your development process more enjoyable.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center"><Sparkles className="mr-2 h-4 w-4 text-yellow-500" /> Boost your coding mood</li>
              <li className="flex items-center"><Code className="mr-2 h-4 w-4 text-green-500" /> Customizable effects</li>
              <li className="flex items-center"><Smile className="mr-2 h-4 w-4 text-pink-500" /> Lightweight and fun</li>
              <li className="flex items-center"><Zap className="mr-2 h-4 w-4 text-purple-500" /> Zero performance impact</li>
            </ul>
          </div>
          <VideoSection />
        </section>
        
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Sparkles className="h-8 w-8" />}
              title="Customizable Confetti"
              description="Adjust colors, intensity, and trigger events to match your preferences."
              color="border-yellow-300 text-yellow-600"
            />
            <FeatureCard 
              icon={<Code className="h-8 w-8" />}
              title="Language Agnostic"
              description="Works with any programming language supported by VS Code."
              color="border-green-300 text-green-600"
            />
            <FeatureCard 
              icon={<Zap className="h-8 w-8" />}
              title="Performance Friendly"
              description="Enjoy the fun without any impact on your coding performance."
              color="border-pink-300 text-pink-600"
            />
          </div>
        </section>
        
        <section className="text-center bg-white bg-opacity-80 p-8 rounded-lg backdrop-blur-sm border-2 border-purple-300 mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-purple-700">Ready to add some joy to your code?</h2>
          <p className="text-xl mb-8 text-gray-700">Install Confetti Coder now and transform your coding experience!</p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            onClick={() => window.open('https://marketplace.visualstudio.com/items?itemName=chongdashu.confetti-coder', '_blank')}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Get Confetti Coder
          </Button>
        </section>

        <footer className="text-center py-8">
          <div className="flex justify-center space-x-6 mb-4">
            <SocialIcon icon={<Github className="h-6 w-6" />} href="https://github.com/chongdashu" />
            <SocialIcon icon={<Twitter className="h-6 w-6" />} href="https://twitter.com/chongdashu" />
            <SocialIcon icon={<Linkedin className="h-6 w-6" />} href="https://linkedin.com/in/chongdashu" />
          </div>
          <p className="text-gray-600">
            Made with <span className="text-red-500">&hearts;</span> by <a href="https://twitter.com/chongdashu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">@chongdashu</a>
          </p>
        </footer>
      </div>
    </div>
  )
}