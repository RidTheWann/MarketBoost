import { Link, useLocation } from "wouter";
import { Layout, LayoutContent, LayoutHeader, LayoutSidebar } from "@/components/ui/layout";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Home, LayoutGrid, Users, DollarSign, Settings } from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Hero Section", href: "/admin/hero" },
  { icon: LayoutGrid, label: "Features", href: "/admin/features" },
  { icon: Users, label: "Testimonials", href: "/admin/testimonials" },
  { icon: DollarSign, label: "Pricing Plans", href: "/admin/pricing" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const currentPath = location || '/admin';

  return (
    <Layout>
      <LayoutSidebar className="border-r">
        <div className="flex h-full flex-col">
          <div className="p-6">
            <Link href="/admin" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Admin CMS
              </span>
            </Link>
          </div>
          <Separator />
          <ScrollArea className="flex-1 p-4">
            <nav className="grid gap-2">
              {sidebarItems.map((item) => {
                const isActive = currentPath.startsWith(item.href);
                return (
                  <Button
                    key={item.href}
                    variant={isActive ? "secondary" : "ghost"}
                    className="w-full justify-start gap-2"
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </Button>
                );
              })}
            </nav>
          </ScrollArea>
        </div>
      </LayoutSidebar>
      <LayoutContent>
        <LayoutHeader className="border-b">
          <div className="flex h-16 items-center px-6">
            <h1 className="text-lg font-semibold">
              {sidebarItems.find((item) => currentPath.startsWith(item.href))?.label || "Dashboard"}
            </h1>
          </div>
        </LayoutHeader>
        <main className="flex-1 p-6">{children}</main>
      </LayoutContent>
    </Layout>
  );
}