import { Section } from "@containers";

interface Props {
  searchParams: {
    q: string | undefined;
  };
}

export default function Page(params: Props) {
  return <Section q={params.searchParams.q} />;
}
