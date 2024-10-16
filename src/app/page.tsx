import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-custom-image bg-cover bg-center min-h-screen flex flex-col">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-grow text-center bg-white bg-opacity-50 p-4 md:p-8">
        <Welcome />
      </main>
      <Footer />
    </div>
  );
}

