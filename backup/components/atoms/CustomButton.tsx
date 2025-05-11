import Link from "next/link";
import { ReactNode, Ref, MouseEvent, FocusEvent } from "react";
import { getClasses } from "../../utils/classHelper";

type CustomButtonProps = {
  label: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void | (() => void);
  flowto?: string;
  children?: ReactNode;
  localLink?: string;
  link?: string;
  needsSpan?: boolean;
  role?: string;
  disabled?: boolean;
  anchorRef?: Ref<HTMLAnchorElement>;
  buttonRef?: Ref<HTMLButtonElement>;
  id?: string;
  className?: string;
  variant?: string;
  params?: string;
  style?: any;
  onFocus?: (e: FocusEvent<HTMLButtonElement>) => void | (() => void);
  imageSrc?: string;
  selected?: boolean;
};

const spanStyling = "px-0.5";

const CustomButton = ({
  label,
  onClick = () => {},
  children,
  localLink,
  flowto,
  link,
  role,
  disabled = false,
  className = "",
  anchorRef,
  buttonRef,
  variant = "Primary",
  style = {},
  needsSpan = true,
  onFocus = () => {},
  imageSrc,
  id,
  selected = false,
}: CustomButtonProps) => {
  return (
    <>
      {link && (
        <a
          aria-flowto={flowto}
          id={id ?? ""}
          ref={anchorRef ?? null}
          tabIndex={disabled ? -1 : 0}
          href={link}
          aria-label={label}
          aria-disabled={disabled}
          role={role}
          className={getClasses("link" + variant, needsSpan) + className}
        >
          {children}
        </a>
      )}
      {localLink && (
        <Link
          id={id ?? ""}
          ref={anchorRef ?? null}
          tabIndex={disabled ? -1 : 0}
          href={localLink}
          aria-label={label}
          aria-disabled={disabled}
          role={role}
          className={getClasses("link" + variant, needsSpan) + className}
          aria-flowto={flowto}
          style={style}
        >
          {!needsSpan ? (
            <>{children}</>
          ) : (
            <span className={spanStyling}>{children}</span>
          )}
        </Link>
      )}
      {!localLink && !link && (
        <button
          ref={buttonRef}
          id={id ?? ""}
          tabIndex={disabled ? -1 : 0}
          aria-label={label}
          role={role}
          aria-flowto={flowto}
          aria-disabled={disabled}
          aria-selected={selected}
          onFocus={onFocus}
          style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : style}
          className={
            className + " " + getClasses("button" + variant, needsSpan)
          }
          onClick={onClick}
        >
          {needsSpan ? (
            <span className={spanStyling}>{children}</span>
          ) : (
            children
          )}
        </button>
      )}
    </>
  );
};

export default CustomButton;
