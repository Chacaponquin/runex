import Td from "../Td/Td";

interface Props {
  value: string | number;
}

export default function Value({ value }: Props) {
  return <Td first={true}>{value}</Td>;
}
