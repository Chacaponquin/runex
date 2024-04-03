interface Props {
  product: string;
}

export default function Title({ product }: Props) {
  return (
    <div className="mb-5 esm:px-4">
      <h1 className="font-fontBold text-7xl text-center esm:text-6xl">
        Lets found you a{" "}
        <b className="font-normal text-blue-500 font-fontBold">{product}</b>
      </h1>
    </div>
  );
}
