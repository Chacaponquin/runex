"use client";

import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { Header, Option } from "./components";
import clsx from "clsx";

interface Props<T> {
  placeholder: string;
  options: Array<T & { selected: boolean }>;
  id: string;
  render: React.FC<T>;
  handleSelect(index: number): void;
  handleDelete(indexx: number): void;
}

export default function MultiSelect<T>({
  id,
  options,
  placeholder,
  render,
  handleDelete,
  handleSelect,
}: Props<T>) {
  const [openOptions, setOpenOptions] = useState(false);

  function handleChangeOpenOptions() {
    setOpenOptions((prev) => !prev);
  }

  const CLASS = clsx("bg-white shadow-lg");

  return (
    <Dropdown
      id={id}
      header={
        <Header
          text={placeholder}
          openOptions={openOptions}
          onClick={handleChangeOpenOptions}
        />
      }
      className={CLASS}
      height={300}
      enableHideList={false}
    >
      {options.map((o, index) => (
        <Option
          key={index}
          render={render}
          option={o}
          selected={o.selected}
          handleDelete={() => handleDelete(index)}
          handleSelect={() => handleSelect(index)}
        />
      ))}
    </Dropdown>
  );
}
