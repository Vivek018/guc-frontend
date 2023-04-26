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

export const DialogOverlay = forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "relative w-full h-full z-50 bg-dim backdrop-blur-sm grid place-items-center overflow-scroll",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const DialogClose = ({close, hideClose}) => {
  return !hideClose ? (
    <DialogPrimitive.Close
      onClick={close}
      className="absolute right-4 top-4 w-9 h-9 rounded-full bg-[#E6E6E6] grid place-content-center opacity-70 transition-all hover:opacity-100 disabled:pointer-events-none max-mobile:w-6 max-mobile:h-6 max-mobile:top-3 max-mobile:right-3"
    >
      <img
        className="max-mobile:w-2 max-mobile:h-2"
        src={cancel}
        alt="cancel"
      />
      <span className="sr-only">Close</span>
    </DialogPrimitive.Close>
  ) : null;
}

export const Modal = forwardRef(
  (
    {
      className,
      overlayClassName,
      children,
      isOpen,
      close,
      hideClose = false,
      ...props
    },
    ref
  ) => (
    <DialogRoot open={isOpen}>
      <DialogPortal>
        <DialogOverlay onClick={close} className={overlayClassName}>
          <DialogPrimitive.Content
            ref={ref}
            onClick={e => e.stopPropagation()}
            className={cn(
              "relative z-50 grid m-16 max-tablet:mx-4 px-4 max-small-mobile:px-1 rounded-pop-up bg-card",
              className
            )}
            {...props}
          >
            {children}
            <DialogClose close={close} hideClose={hideClose} />
          </DialogPrimitive.Content>
        </DialogOverlay>
      </DialogPortal>
    </DialogRoot>
  )
);