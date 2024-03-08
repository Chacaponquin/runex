export default function Header() {
  return (
    <header className="flex flex-col mb-12 text-center items-center">
      <div className="lg:text-8xl text-7xl esm:text-6xl [&>*]:font-fontExtraBold mb-7 esm:mb-4 uppercase">
        <h1>A power that</h1>
        <h1>runs you</h1>
      </div>

      <p className="lg:text-lg leading-7 text-base text-gray-500 max-w-[500px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        maxime cupiditate asperiores!
      </p>
    </header>
  );
}
