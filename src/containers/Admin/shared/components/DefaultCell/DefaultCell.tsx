interface Props {
  children: React.ReactNode;
}

export default function DefaultCell({ children }: Props) {
  return <div className="text-base">{children}</div>;
}
