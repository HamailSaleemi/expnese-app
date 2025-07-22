import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
