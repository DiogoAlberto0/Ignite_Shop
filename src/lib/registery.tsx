'use client'

import React, { useState } from "react"
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components"
import { GlobalStyle } from "@/app/styles/global"
import { defaultTheme } from "@/app/styles/defaultTheme"

export default function StyledComponentsRegistry({
    children,
  }: {
    children: React.ReactNode
  }) {
    // Only create stylesheet once with lazy initial state
    // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
    // const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
   
    // useServerInsertedHTML(() => {
    //   const styles = styledComponentsStyleSheet.getStyleElement()
    //   styledComponentsStyleSheet.instance.clearTag()
    //   return <>{styles}</>
    // })
   
    // if (typeof window !== 'undefined') return <>{children}</>
   
    return (
      // <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      // </StyleSheetManager>
    )
  }