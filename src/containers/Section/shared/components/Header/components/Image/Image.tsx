interface Props {
  image: { src: string; alt: string };
}

export default function Image({ image }: Props) {
  return (
    <div
      className="flex w-full h-[370px]"
      style={{
        backgroundImage: `url("${image.src}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
}
