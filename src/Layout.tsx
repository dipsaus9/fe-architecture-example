import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <main>
      <h1>Welcome FE Team</h1>
      <Outlet />
    </main>
  )
}
