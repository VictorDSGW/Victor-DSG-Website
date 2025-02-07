import type { Metadata } from "next";
import { Courier_Prime, Jura } from 'next/font/google'
import "@/app/globals.css";

const jura = Jura({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-jura'
})

const typeWriter = Courier_Prime({
  subsets: ['latin'],
  weight: ["400", "700"],
  variable: '--font-typeWriter'
})


export const metadata: Metadata = {
  title: "Victor DSG Website",
  description: "Victor DSG Portfolio",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${jura.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={jura.className || typeWriter.className}>
      <body>
        {children}
      </body>
    </html>
  )
}