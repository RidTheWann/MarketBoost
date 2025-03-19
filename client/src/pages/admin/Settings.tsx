import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>
          Manage your website settings and preferences.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Settings page is coming soon.</p>
      </CardContent>
    </Card>
  );
}
