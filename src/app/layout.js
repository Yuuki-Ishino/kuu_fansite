import Header from "./top-components/Header";
import Footer from "./top-components/Footer";
import "../styles/globals.css";

export const metadata = {
  title: "Bbooth",
  description: "東洋大学公式ボランティアサークル Bbooth",
  metadataBase: new URL("https://bbooth.vercel.app"),
  keywords: [
    "Bbooth",
    "東洋大学",
    "サークル",
    "ボランティアサークル",
    "学生ボランティア",
  ],
  icons: {
    icon: "/images/Bbooth_logo.ico",
  },
  openGraph: {
    title: "Bbooth",
    description: "東洋大学公式ボランティアサークル Bbooth",
    url: "https://bbooth.vercel.app",
    siteName: "Bbooth",
    locale: "ja_JP",
    type: "website",
  },
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
