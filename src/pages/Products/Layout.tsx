import { useAppSelector } from "../../app/hooks";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <div
      data-theme={theme}
      className="min-h-screen flex flex-col justify-between"
    >
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
