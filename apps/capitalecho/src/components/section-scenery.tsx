import type { ReactNode } from "react";

export function Eyebrow({
  children,
  centered = false,
}: {
  children: ReactNode;
  centered?: boolean;
}) {
  if (centered) {
    return (
      <div className="flex flex-col items-center gap-3">
        <span aria-hidden="true" className="h-[3px] w-10 bg-capitalecho" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70">
          {children}
        </p>
      </div>
    );
  }

  return (
    <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70">
      <span aria-hidden="true" className="h-[3px] w-8 shrink-0 bg-capitalecho" />
      {children}
    </p>
  );
}
