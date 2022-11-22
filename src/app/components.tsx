"use client"
import React from "react"
import { AdminProvider } from "providers/AdminProvider"
import NavigationDesktop from "common/components/adminNavigation/DesktopNavigation"
import NavigationMobile from "common/components/adminNavigation/MobileNavigation"

import { adminRoutes } from "routes"
import Logo from "common/components/Logo"
import { Bars3Icon } from "@heroicons/react/24/outline"
import { useAdminManager } from "hooks/useAdminManager"

export const DesktopNavigation = () => (
  <NavigationDesktop
    routes={adminRoutes}
    currentPath={window.location.pathname}
  />
)

export const MobileNavigation = () => {
  const { setSidebarOpen, sidebarOpen } = useAdminManager()
  const handleSidebarClose = () => setSidebarOpen(false)
  return (
    <NavigationMobile
      routes={adminRoutes}
      open={sidebarOpen}
      onClose={handleSidebarClose}
      currentPath={window.location.pathname}
    />
  )
}

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => (
  <AdminProvider>{children}</AdminProvider>
)

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { setSidebarOpen } = useAdminManager()
  const handleSidebarOpen = () => setSidebarOpen(true)
  return (
    <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
      <div className="lg:hidden">
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
          <Logo />
          <div>
            <button
              type="button"
              className="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
              onClick={handleSidebarOpen}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
