"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";
import { FormProps } from "../../interfaces/form";
import { Option, Select as Header } from "./components";
import { Dropdown } from "..";

interface Props<T> extends FormProps<any> {
  placeholder: string;
  options: Array<T>;
  labelKey: keyof T;
  valueKey: keyof T;
}

interface SelectOptions {
  label: string;
  value: string;
}

export default function Select<T>({
  valueKey,
  labelKey,
  onChange,
  options,
  placeholder,
  value,
  id,
}: Props<T>) {
  const [openOptions, setOpenOptions] = useState(false);

  const [selectIndex, setSelectIndex] = useState<null | number>(null);
  const [selectOptions, setSelectOptions] = useState<Array<SelectOptions>>([]);

  useEffect(() => {
    setSelectOptions([]);

    options.forEach((o) => {
      setSelectOptions((prev) => [
        ...prev,
        { label: o[labelKey] as string, value: o[valueKey] as string },
      ]);
    });
  }, [options, labelKey, valueKey]);

  useEffect(() => {
    selectOptions.forEach((o, index) => {
      if (o.value === value) {
        setSelectIndex(index);
      }
    });
  }, [value, selectOptions]);

  function handleSelectOption(index: number) {
    setSelectIndex(index);

    if (onChange) {
      onChange(selectOptions[index].value);
    }
  }

  function handleChangeOpenOptions() {
    setOpenOptions((prev) => !prev);
  }

  const SELECTED_CLASS = clsx("bg-white shadow-lg");

  return (
    <Dropdown
      id={id}
      header={
        <Header
          text={
            selectIndex !== null
              ? selectOptions[selectIndex].label
              : placeholder
          }
          openOptions={openOptions}
          onClick={handleChangeOpenOptions}
        />
      }
      className={SELECTED_CLASS}
      height={300}
      enableHideList={true}
    >
      {options.map((_, index) => (
        <Option
          key={index}
          text={selectOptions[index]?.label}
          onClick={() => handleSelectOption(index)}
          selected={index === selectIndex}
        />
      ))}
    </Dropdown>
  );
}
