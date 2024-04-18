export const Navbar = () => {
  return (
    <nav className="absolute inset-x-0 top-0 h-16 flex justify-between items-center px-20 bg-gradient-to-b from-black to-black/0">
        <span className="font-extrabold text-2xl">Jujutsu Kaisen</span>
        <ul className="flex gap-6">
            <li><a href="#">Home</a></li>
            <li><a href="#">Episodes</a></li>
            <li><a href="#">Characters</a></li>
            <li><a href="#">Watch</a></li>
        </ul>
    </nav>
  )
}
