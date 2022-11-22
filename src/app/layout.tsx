"use client"
import { initializeApp } from "firebase/app"
import { PageWrapper, LayoutWrapper, DesktopNavigation, MobileNavigation } from "./components"
import "./globals.css"

initializeApp({
  apiKey: "AIzaSyDX30xjRUilCjiNkFhdtBcz5oLeHitFX7Y",
  authDomain: "nowna-6c45a.firebaseapp.com",
  projectId: "nowna-6c45a",
  storageBucket: "nowna-6c45a.appspot.com",
  messagingSenderId: "92261510019",
  appId: "1:92261510019:web:c599bc87670b974b24a4b6",
  measurementId: "G-ZKG8KYMGB5",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full bg-gray-100">
      <head>
        <title>Nowna</title>
      </head>
      <body className="h-full overflow-hidden">
        <LayoutWrapper>
          <div className="flex h-screen bg-white">
            <MobileNavigation />
            <DesktopNavigation />
            <PageWrapper>{children}</PageWrapper>
          </div>
        </LayoutWrapper>
      </body>
    </html>
  )
}
