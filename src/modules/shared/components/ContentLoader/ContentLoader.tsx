import "./style.css";

interface Props {
  height: number;
  marginRight?: number;
}

export default function ContentLoader({ height, marginRight = 0 }: Props) {
  return (
    <div
      className="rounded"
      style={{
        animation: "loader 2s infinite ease-in-out",
        height: `${height}px`,
        width: `calc(100% - ${marginRight}px)`,
      }}
    ></div>
  );
}
