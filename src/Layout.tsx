import { Link, Outlet } from "react-router-dom"

export function Layout() {
  return (
    <main>
      <h1>Welcome FE Team</h1>
      <Link to="/product/1">Naar product pagina</Link>
      <Outlet />
    </main>
  )
}
