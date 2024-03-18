"use client";

import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { Header, Option } from "./components";
import clsx from "clsx";

interface Props<T> {
  placeholder: string;
  options: Array<T>;
  id: string;
  render: React.FC<T>;
  handleSelect(index: number): void;
  handleDelete(indexx: number): void;
  selected: Array<string>;
  valueKey: keyof T;
}

export default function MultiSelect<T>({
  id,
  options,
  placeholder,
  render,
  handleDelete,
  handleSelect,
  valueKey,
  selected,
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
          selected={selected.includes(o[valueKey] as string)}
          handleDelete={() => handleDelete(index)}
          handleSelect={() => handleSelect(index)}
        />
      ))}
    </Dropdown>
  );
}
