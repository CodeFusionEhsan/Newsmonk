import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, TrendingUp, Bookmark, User, LogIn, Menu, X } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: TrendingUp, label: "Trending", href: "/trending" },
    { icon: Bookmark, label: "Bookmarks", href: "/bookmarked" },
    { icon: User, label: "Account", href: "/account" },
  ];

  return (
    <nav className="fixed mb-6 top-0 w-full z-50 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-lg border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              NewsMonk.com
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors duration-200"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            ))}
            <SignedOut>
                <SignInButton className="ml-4 pt-3 pb-3 pl-8 pr-8 bg-primary hover:bg-primary/90 text-white" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={
        isOpen ? "block" : "hidden"
      }>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/50 backdrop-blur-lg">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          ))}
          <div className="pt-2">
            <SignedOut>
                <SignInButton className="ml-4 pt-3 pb-3 pl-8 pr-8 bg-primary hover:bg-primary/90 text-white" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;