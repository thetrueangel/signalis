import React from "react"

import { bindKeyboardShortcut } from "main/services/KeyboardShortcut.ts"

import RootStore from "stores/RootStore.ts"
import { theme } from "common/theme/muiTheme"
import { ThemeProvider } from "@material-ui/styles"

import { applyThemeToCSS } from "common/theme/applyThemeToCSS"
import { defaultTheme } from "common/theme"
import { ThemeContext } from "main/hooks/useTheme"
import { StoreContext } from "main/hooks/useStores"
import RootView from "../RootView/RootView"

import "./App.css"

const rootStore = new RootStore()

applyThemeToCSS(defaultTheme)

bindKeyboardShortcut(rootStore)

export default function App() {
  return (
    <StoreContext.Provider value={{ rootStore: new RootStore() }}>
      <ThemeContext.Provider value={defaultTheme}>
        <ThemeProvider theme={theme}>
          <RootView />
        </ThemeProvider>
      </ThemeContext.Provider>
    </StoreContext.Provider>
  )
}
