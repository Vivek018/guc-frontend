import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/utils/cn";
import { forwardRef } from "react";
import cancel from "@/assets/icons/cancel.svg";

const DialogRoot = DialogPrimitive.Root;

const DialogPortal = ({
  className,
  children,
  ...props
}) => (
  <DialogPrimitive.Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {children}
    </div>
  </DialogPrimitive.Portal>
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-dim backdrop-blur-sm",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogClose = ({close, hideClose}) => {
  return (
    !hideClose ? <DialogPrimitive.Close onClick={close} className="absolute right-5 top-4 w-9 h-9 rounded-full bg-[#E6E6E6] grid place-content-center opacity-70 transition-all hover:opacity-100 disabled:pointer-events-none">
          <img className="" src={cancel} alt="cancel" />
        <span className="sr-only">Close</span>
    </DialogPrimitive.Close>
    : null
  );
}

export const Modal = forwardRef(({ className, children, isOpen, close, hideClose = false, ...props }, ref) => (
  <DialogRoot open={isOpen}>
  <DialogPortal>
    <DialogOverlay onClick={close} />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 grid px-16 rounded-pop-up bg-white",
        className
      )}
      {...props}
    >
      {children}
      <DialogClose close={close} hideClose={hideClose} />
    </DialogPrimitive.Content>
  </DialogPortal>
  </DialogRoot>
));