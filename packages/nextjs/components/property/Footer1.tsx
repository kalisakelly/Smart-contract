import { Facebook, Twitter, Instagram, Linkedin, Github, ExternalLink } from 'lucide-react'
import { Button } from "../ui/button"

export default function Footer1() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm text-muted-foreground">
              Blockchain Property Marketplace revolutionizes real estate with secure, transparent transactions using blockchain technology.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">How It Works</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">List Your Property</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">FAQs</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm text-muted-foreground">Email: info@blockchainproperty.com</p>
            <p className="text-sm text-muted-foreground">Phone: +1 (555) 123-4567</p>
            <p className="text-sm text-muted-foreground">Address: 123 Blockchain Street, Crypto City, CC 12345</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Blockchain Property Marketplace. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                Connect Wallet
              </Button>
              <a
                href="https://etherscan.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
              >
                View Smart Contract
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
