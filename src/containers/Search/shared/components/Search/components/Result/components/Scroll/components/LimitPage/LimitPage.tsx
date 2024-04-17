import { Fragment } from "react";
import Page from "../Page/Page";
import { Points } from "./components";

interface Props {
  handleClick(): void;
  page: number;
  reverse: boolean;
  selected: boolean;
}

export default function LimitPage({
  handleClick,
  page,
  reverse,
  selected,
}: Props) {
  return (
    <Fragment>
      {reverse ? (
        <Fragment>
          <Points />
          <Page handleClick={handleClick} selected={selected} page={page} />
        </Fragment>
      ) : (
        <Fragment>
          <Page handleClick={handleClick} selected={selected} page={page} />
          <Points />
        </Fragment>
      )}
    </Fragment>
  );
}
