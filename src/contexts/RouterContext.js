/*
 RouterContext.js - ESP3D WebUI context file

 Copyright (c) 2021 Alexandre Aussourd. All rights reserved.
 Modified by Luc LEBOSSE 2021
 
 This code is free software; you can redistribute it and/or
 modify it under the terms of the GNU Lesser General Public
 License as published by the Free Software Foundation; either
 version 2.1 of the License, or (at your option) any later version.
 This code is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 Lesser General Public License for more details.
 You should have received a copy of the GNU Lesser General Public
 License along with This code; if not, write to the Free Software
 Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/
import { h, createContext } from "preact"
import { useContext, useState, useRef } from "preact/hooks"
import { variablesList } from "../targets"

/*
 * Local const
 *
 */
const RouterContext = createContext("RouterContext")
const useRouterContext = () => useContext(RouterContext)
const RouterContextProvider = ({ children }) => {
    const defaultRoute = useRef("/about")
    const activeTab = useRef(
        variablesList.hideFeatures
            ? "/settings/interface"
            : "/settings/features"
    )
    const [activeRoute, setActiveRoute] = useState(defaultRoute.current)
    const [routes, setRoutes] = useState({})
    const store = {
        activeRoute,
        setActiveRoute,
        routes,
        setRoutes,
        defaultRoute,
        activeTab,
    }
    return (
        <RouterContext.Provider value={store}>
            {children}
        </RouterContext.Provider>
    )
}

export { RouterContextProvider, useRouterContext }
