interface Props{
  price: string
}

export default function Price({price}: Props) {
  return <td className="text-center">{price}</td>;
}
