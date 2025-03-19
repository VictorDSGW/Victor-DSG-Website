import type { Metadata } from "next";
import {
  // Courier_Prime,
  Jura
} from 'next/font/google'
import "@/app/globals.css";
import { ThemeProvider } from 'next-themes';
import { Toaster } from "@/components/ui/sonner";

const jura = Jura({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-jura'
})

// const typeWriter = Courier_Prime({
//   subsets: ['latin'],
//   weight: ["400", "700"],
//   variable: '--font-typeWriter'
// })


export const metadata: Metadata = {
  title: "Victor DSG Website",
  description: "Victor DSG Portfolio",
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={jura.className} suppressHydrationWarning>
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>{children}</main>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}