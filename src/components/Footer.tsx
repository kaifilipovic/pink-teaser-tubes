
import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '@/components/Container';

const Footer = () => {
  return (
    <footer className="bg-tube-darkgray border-t border-tube-gray mt-auto">
      <Container className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              TubeAffiliate is your premier destination for discovering and sharing the best affiliate marketing content.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-tube-pink text-sm">Home</Link></li>
              <li><Link to="/videos" className="text-gray-400 hover:text-tube-pink text-sm">Videos</Link></li>
              <li><Link to="/actors" className="text-gray-400 hover:text-tube-pink text-sm">Actors</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-tube-pink text-sm">Categories</Link></li>
              <li><Link to="/tags" className="text-gray-400 hover:text-tube-pink text-sm">Tags</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:contact@tubeaffiliate.com" className="flex items-center text-gray-400 hover:text-tube-pink text-sm">
                <Mail size={16} className="mr-2" />
                contact@tubeaffiliate.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-gray-400 hover:text-tube-pink text-sm">
                <Phone size={16} className="mr-2" />
                (123) 456-7890
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-tube-pink">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-tube-pink">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-tube-pink">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-tube-pink">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-tube-gray mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} TubeAffiliate. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
