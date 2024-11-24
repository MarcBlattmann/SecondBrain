import { Button } from "@/components/ui/button"
import Link from "next/link";

export default async function Index() {
  return (
    <div className="mt-10">
      <Button asChild>
        <Link href="/sign-in">Login</Link>
      </Button>
      <Button variant="outline">Sing Up</Button>
    </div>
  );
}
