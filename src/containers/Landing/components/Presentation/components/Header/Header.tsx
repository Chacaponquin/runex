export default function Header() {
  return (
    <header className="flex flex-col mb-12">
      <div className="lg:text-7xl text-6xl [&>*]:font-fontExtraBold mb-7 uppercase">
        <h1>A power that</h1>
        <h1>runs you</h1>
      </div>

      <p className="text-lg leading-7 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        maxime cupiditate asperiores!
      </p>
    </header>
  );
}
