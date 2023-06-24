import "../styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import DefaultProviders from "./components/default-providers";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Todo app ✍",
  description:
    "Efficiently organize and manage your tasks with our intuitive and feature-rich todo app.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DefaultProviders>
      <html lang="en">
        <body className={josefinSans.className}>{children}</body>
      </html>
    </DefaultProviders>
  );
}
