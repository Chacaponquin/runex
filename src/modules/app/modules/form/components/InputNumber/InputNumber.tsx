"use client";

import { useMemo, useState, useRef } from "react";
import { ArrowDown, ArrowUp } from "@modules/app/modules/icon/components";
import clsx from "clsx";
import { Button } from "./components";
import { Sizes } from "../../interfaces/dimension";

interface Props {
  min?: number;
  max?: number;
  id?: string;
  value: number;
  step: number;
  name: string;
  onChange(v: number): void;
  size: Sizes;
}

export default function InputNumber({
  min,
  max,
  step = 1,
  value,
  onChange,
  name,
  size,
  id,
}: Props) {
  const [isFocus, setIsFocus] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const upButton = useRef<HTMLButtonElement | null>(null);
  const downButton = useRef<HTMLButtonElement | null>(null);

  const height = useMemo(() => {
    switch (size) {
      case "sm":
        return 33;
      case "lg":
        return 38;
      case "xl":
        return 43;
      default:
        return 33;
    }
  }, [size]);

  function handleIncrease() {
    const nextValue = value ? Number(Number(value + step).toFixed(2)) : 1;
    const val = validateValue(nextValue, max);
    onChange(val);
  }

  function handleDecrease() {
    const nextValue = value ? Number(Number(value - step).toFixed(2)) : -1;

    onChange(validateValue(nextValue, min));
  }

  function handleChangeInputValue(value: string) {
    if (typeof Number(value) === "number") {
      onChange(validateValue(Number(value), wichIsCloser(Number(value))));
    }
  }

  function wichIsCloser(nextValue: number): number {
    if (!nextValue) return value;

    if (exists(max) && exists(min)) {
      const diferenceMin = (min as number) - nextValue;
      const diferenceMax = (min as number) - nextValue;

      if (diferenceMax !== diferenceMin) {
        if (diferenceMax < diferenceMin) {
          return max as number;
        } else {
          return min as number;
        }
      } else {
        return min as number;
      }
    } else if (!exists(min) && !exists(max)) {
      return nextValue;
    } else if (!exists(min) && exists(max)) {
      return max as number;
    } else if (exists(min) && !exists(max)) {
      return min as number;
    } else {
      return nextValue;
    }
  }

  function validateValue(
    value: number,
    returnDefaultValue: number | undefined = 0
  ): number {
    if (!exists(min) && !exists(max)) {
      return value;
    } else if (exists(min) && !exists(max)) {
      if (value >= (min as number)) {
        return value;
      } else {
        return returnDefaultValue;
      }
    } else if (!exists(min) && exists(max)) {
      if (value <= (max as number)) {
        return value;
      } else return returnDefaultValue;
    } else if (exists(min) && exists(max)) {
      if (value >= (min as number) && value <= (max as number)) {
        return value;
      } else {
        return returnDefaultValue;
      }
    } else {
      return returnDefaultValue;
    }
  }

  function exists(value: number | undefined): boolean {
    return !(value === undefined);
  }

  function handleInteractKey(key: KeyboardEvent) {
    if (key.key === "ArrowUp") {
      if (upButton.current) {
        upButton.current.click();
      }
    } else if (key.key === "ArrowDown") {
      if (downButton.current) {
        downButton.current.click();
      }
    }
  }

  function handleFocus() {
    setIsFocus(true);
    document.addEventListener("keydown", handleInteractKey);
  }

  function handleBlur() {
    setIsFocus(false);
    document.removeEventListener("keydown", handleInteractKey);
  }

  const CONTAINER_CLASS = clsx(
    "flex items-center",
    "border-2",
    "bg-white",
    "transition-all duration-300",
    "rounded-sm",

    {
      "shadow-input border-blue-500": isFocus || isHover,
      "border-gray-100": !isFocus && !isHover,
    }
  );

  const INPUT_CLASS = clsx(
    "h-full w-full",
    "bg-transparent",
    "py-1.5",
    "outline-none",

    {
      "text-sm": size === "sm",
      "text-base": size === "lg",
      "text-lg": size === "xl",
    },

    {
      "px-3": size === "sm",
      "px-4": size === "lg",
      "px-5": size === "xl",
    }
  );

  function handleHover() {
    setIsHover(true);
  }

  function handleLeave() {
    setIsHover(false);
  }

  return (
    <div
      className={CONTAINER_CLASS}
      style={{ height: height, width: `100%` }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <input
        className={INPUT_CLASS}
        type="text"
        onChange={(e) => handleChangeInputValue(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        id={id}
        min={min}
        max={max}
        name={name}
      />

      <div className="grid grid-rows-2 h-full w-[25px] justify-center justify-items-center">
        <Button
          handleClick={handleIncrease}
          buttonRef={upButton}
          icon={ArrowUp}
        />

        <Button
          handleClick={handleDecrease}
          buttonRef={downButton}
          icon={ArrowDown}
        />
      </div>
    </div>
  );
}
