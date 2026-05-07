import type { Metadata } from "next"
import "./globals.css"

import Sidebar from "@/components/Sidebar/Sidebar"

export const metadata: Metadata = {
  title: "DevFlow",
  description: "Local AI Project Manager",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="appContainer">
          <Sidebar />

          <main className="mainContent">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}