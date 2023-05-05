import { getCssText } from '@/styles'
import { globalStyles } from '@/styles/global'
import { ReactNode } from 'react'

globalStyles()

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
