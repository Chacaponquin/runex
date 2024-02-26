import clsx from "clsx";
import {
  ReactElement,
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";

interface Props {
  header: ReactElement;
  children: React.ReactNode;
  className?: string;
  id?: string;
  height?: number;
  size?: "full" | "auto" | number;
}

export default function Dropdown({
  children,
  header,
  className: inputClassName,
  id,
  height,
  size = "auto",
}: Props) {
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const LIST_CLASS = clsx(
    "absolute",
    "z-50",
    "overflow-auto",
    "mt-1.5",
    inputClassName
  );

  const onClickOutside = useCallback(() => {
    setOpen(false);
  }, []);

  function handleOpen() {
    setOpen((prev) => !prev);
  }

  function handleClickList() {
    setOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClickOutside]);

  const SIZE = useMemo(() => {
    if (size === "auto") {
      return "auto";
    } else if (size === "full") {
      return "100%";
    } else {
      return `${size}px`;
    }
  }, [size]);

  return (
    <div id={id} ref={wrapperRef} style={{ width: SIZE }}>
      <div
        className="flex items-center"
        onClick={handleOpen}
        ref={headerRef}
        style={{ width: SIZE }}
      >
        {header}
      </div>

      {open && (
        <ul
          onClick={handleClickList}
          style={{
            minWidth: `${headerRef.current?.clientWidth}px`,
            maxHeight: height ? `${height}px` : undefined,
          }}
          className={LIST_CLASS}
        >
          {children}
        </ul>
      )}
    </div>
  );
}
