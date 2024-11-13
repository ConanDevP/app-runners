import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Spotify } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Social Links */}
          <div>
            <Link to="/" className="text-2xl font-bold mb-6 block">V.O2</Link>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gray-400"><Instagram size={24} /></a>
              <a href="#" className="hover:text-gray-400"><TwitterI'll help you create a complete React application that matches the VO2 website design. Let's continue with the remaining components and pages.

<boltArtifact id="vo2-website-complete" title="Complete VO2 Website Implementation">
<boltAction type="file" filePath="src/components/Footer.jsx">import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Spotify } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Newsletter */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold mb-6 block">V.O2</Link>
            <h3 className="text-xl font-semibold mb-4">Get the Latest Training Advice</h3>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border-white/20"
              />
              <Button variant="secondary">→</Button>
            </div>
          </div>

          {/* Latest Podcast */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Latest Podcast</h3>
            <p className="text-gray-400 mb-2">Conversation Pace</p>
            <div className="flex gap-2 mb-4">
              <a href="#" className="hover:text-gray-400">
                <Spotify className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
              <li><Link to="/contact" className="hover:text-gray-400">Contact us</Link></li>
              <li><Link to="/terms" className="hover:text-gray-400">Terms</Link></li>
              <li><Link to="/privacy" className="hover:text-gray-400">Privacy</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><Facebook /></a>
              <a href="#" className="hover:text-gray-400"><Instagram /></a>
              <a href="#" className="hover:text-gray-400"><Twitter /></a>
              <a href="#" className="hover:text-gray-400"><Youtube /></a>
              <a href="#" className="hover:text-gray-400"><Spotify /></a>
            </div>
            <p className="text-sm text-gray-400">© 2024 — V.O2</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;