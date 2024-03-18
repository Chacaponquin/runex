import React from "react";
import { Body, Head, Header } from "./components";
import { TableData } from "./interfaces";

interface Props {
  header: string;
  data: TableData;
  actions: React.ReactNode;
}

export default function Table({ header, data, actions }: Props) {
  return (
    <div className="bg-white px-8 py-5 rounded-xl">
      <Header header={header} actions={actions} />

      <table className="table-auto w-full">
        <Head columns={data.columns} />
        <Body data={data.body} />
      </table>
    </div>
  );
}
