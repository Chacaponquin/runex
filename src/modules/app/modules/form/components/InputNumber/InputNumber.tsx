import { useMemo, useState, useRef, useId } from "react";
import { FormProps } from "../../interfaces/form";
import { Size } from "../../interfaces/dimension";
import { ArrowDown, ArrowUp } from "@modules/app/modules/icon/components";
import clsx from "clsx";
import { Button } from "./components";

interface Props extends FormProps<number> {
  min?: number;
  max?: number;
  step?: number;
  size?: Size;
  name?: string;
}

export default function InputNumber({
  min,
  max,
  step = 1,
  size = "full",
  dimension = "normal",
  value,
  onChange,
  id,
  name,
}: Props) {
  const [isFocus, setIsFocus] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const upButton = useRef<HTMLButtonElement | null>(null);
  const downButton = useRef<HTMLButtonElement | null>(null);

  const height = useMemo(() => {
    switch (dimension) {
      case "small":
        return 33;
      case "normal":
        return 38;
      case "large":
        return 43;
      default:
        return 30;
    }
  }, [dimension]);

  function handleIncrease() {
    const nextValue = value ? Number(Number(value + step).toFixed(2)) : 1;

    if (onChange) {
      onChange(validateValue(nextValue, max));
    }
  }

  function handleDecrease() {
    const nextValue = value ? Number(Number(value - step).toFixed(2)) : -1;

    if (onChange) {
      onChange(validateValue(nextValue, min));
    }
  }

  function handleChangeInputValue(value: string) {
    if (typeof Number(value) === "number") {
      if (onChange) {
        onChange(validateValue(Number(value), wichIsCloser(Number(value))));
      }
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
    "flex items-center rounded-sm transition-all duration-300",
    "border-2",
    "bg-white dark:bg-scale-5",
    {
      "border-purple-6": isFocus || isHover,
      "border-scale-11": !isFocus && !isHover,
    }
  );

  const INPUT_CLASS = clsx(
    "h-full w-full outline-none text-sm bg-transparent",
    "py-1.5 px-2",
    {
      "text-base": dimension === "small",
      "text-lg": dimension === "normal",
      "text-xl": dimension === "large",
    },
    {
      "px-3": dimension === "small",
      "px-4": dimension === "normal",
      "px-5": dimension === "large",
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
      style={{ height: height, width: size === "full" ? `100%` : `${size}px` }}
    >
      <input
        className={INPUT_CLASS}
        type="text"
        onChange={(e) => handleChangeInputValue(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        value={value === undefined ? 0 : value}
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
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        />

        <Button
          handleClick={handleDecrease}
          buttonRef={downButton}
          icon={ArrowDown}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        />
      </div>
    </div>
  );
}
