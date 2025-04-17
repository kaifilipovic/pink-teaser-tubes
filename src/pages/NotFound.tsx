
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-tube-black flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <Container className="flex items-center justify-center">
          <div className="text-center max-w-md">
            <h1 className="text-6xl font-bold text-tube-pink mb-6">404</h1>
            <p className="text-xl text-white mb-8">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/">
              <Button className="bg-tube-pink hover:bg-tube-pink-dark">
                Return to Home
              </Button>
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
