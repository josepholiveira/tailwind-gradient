import './globals.css'

export const metadata = {
  title: 'Gradient Cards',
  description: 'by @josepholiveirad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
