const Navigation = () => {
  return (
    <nav className="flex justify-between px-1 py-2 h-20 items-center">
        <div>
            <img src="\images\logo.png" alt="Logo" />
        </div>

        <ul className="flex gap-6 list-none font-medium mr-2">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation