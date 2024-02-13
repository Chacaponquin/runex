import { Section } from "@containers";

interface Props {
  params: { section: string };
  searchParams: {
    q: string | undefined;
  };
}

export default function Page(params: Props) {
  return <Section section={params.params.section} q={params.searchParams.q} />;
}
