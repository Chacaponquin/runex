import { Section } from "@containers";

interface Props {
  searchParams: {
    q: string | undefined;
    page: string | undefined;
    min: string | undefined;
    max: string | undefined;
  };
}

export default function Page(params: Props) {


  return <Section {...params.searchParams} />;
}
