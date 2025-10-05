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
    icon: "/favicon.ico",
    apple: "/images/logo02.jpg",
  },
  openGraph: {
    title: "Bbooth",
    description: "東洋大学公式ボランティアサークル Bbooth",
    url: "https://bbooth.vercel.app",
    siteName: "Bbooth",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/top-image.jpg",   // 共通OG画像（相対パスでOK）
        width: 1200,
        height: 630,
        alt: "Bbooth サイトイメージ",
      },
    ],
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
