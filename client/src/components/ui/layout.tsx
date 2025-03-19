import { cn } from "@/lib/utils";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Layout({ className, ...props }: LayoutProps) {
  return (
    <div className={cn("min-h-screen flex", className)} {...props} />
  );
}

export function LayoutHeader({ className, ...props }: LayoutProps) {
  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)} {...props} />
  );
}

export function LayoutSidebar({ className, ...props }: LayoutProps) {
  return (
    <aside className={cn("w-64 shrink-0 border-r bg-background", className)} {...props} />
  );
}

export function LayoutContent({ className, ...props }: LayoutProps) {
  return (
    <div className={cn("flex-1 flex flex-col", className)} {...props} />
  );
}
