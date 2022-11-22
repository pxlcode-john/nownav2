import clsx from "clsx"
import React from "react"
import { iNavigationItem } from "types"
import { isActiveRoute } from "utils/route"
import Logo from "common/components/Logo"

export type DesktopNavigationProps = {
  routes: iNavigationItem[][]
  currentPath: string
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ routes, currentPath }): React.ReactElement => {
  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex w-64 flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <Logo />
            </div>
            <div className="divide-y space-y-4 divide-gray-200 mt-4">
              {routes.map((navigation, index) => (
                <nav key={`index-${index}`} className="flex-1 pt-2" aria-label="Sidebar">
                  <div className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          isActiveRoute(currentPath, item.href)
                            ? "bg-gray-200 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={clsx(
                            isActiveRoute(currentPath, item.href)
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-3 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              ))}
            </div>
          </div>
          <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
            <a href="#" className="group block w-full flex-shrink-0">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Whitney Francis</p>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopNavigation
