import { useState } from "react";

export default function GalleryPage() {
  const [showScroll, setShowScroll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle scroll visibility for Back-to-Top
  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}