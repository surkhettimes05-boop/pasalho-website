import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import BottomNav from "@/components/BottomNav";
import RecentSalesPopup from "@/components/RecentSalesPopup";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <Cart />
      <BottomNav />
      <RecentSalesPopup />
    </>
  );
}
