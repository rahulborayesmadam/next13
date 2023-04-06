import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Traversy Media",
  description: "web dev by rahul by create next app",
  keywords: "rahul,webDevelopment,web design,vue,react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
