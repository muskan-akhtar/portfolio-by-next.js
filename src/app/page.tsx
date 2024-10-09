
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Welcome from '../components/Welcome';

export default function Home() {
  return (
    <div className="bg-custom-image bg-cover bg-center h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center h-full text-center bg-white bg-opacity-50">
        <Welcome />
      </main>
      <Footer />
    </div>
  );
}
