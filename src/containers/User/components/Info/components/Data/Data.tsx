interface Props{
    title: string
    value: number
}

export default function Data({title, value}: Props) {
  return (
    <div className="flex flex-col">
        <h1>{value}</h1>
        <h2>{title}</h2>
    </div>
  )
}
