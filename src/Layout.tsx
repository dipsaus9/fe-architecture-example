import { Link, Outlet } from "react-router-dom"

export function Layout() {
  return (
    <main>
      <h1>Welcome FE Team</h1>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <Outlet />
    </main>
  )
}
