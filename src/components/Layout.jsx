import Navbar from "./home/Navbar";
import Footer from "./home/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-20"> {/* pt-20 for navbar offset */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
