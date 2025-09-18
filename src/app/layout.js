import Header from "./top-components/Header";
import Footer from "./top-components/Footer";
import "../styles/globals.css";

export const metadata = {
  title: "Bbooth",
  description: "ボランティアサークルのサイト",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
