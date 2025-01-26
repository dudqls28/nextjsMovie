import { Metadata } from "next"
import Navigation from "../components/navigation"

export const metadata : Metadata = {
  title: {
    template: "%s | Next Moveis",
    default :  "Next Moveis"
  },
  description: 'The best Moveis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
