import { redirect } from "next/navigation";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";

export const metadata = {
  title: "Nexuss | Fee Master | Signin"
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { auth } = createServerComponentSupabaseClient({
    headers,
    cookies,
  });
  const { data } = await auth.getSession();
  if (data.session !== null) redirect("/dashboard");
  return <>

    {children}</>;
}
