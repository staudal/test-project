import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default async function Page() {
  const response = await fetch("https://reqres.in/api/users");
  const users = await response.json();
  return (
    <Accordion type="single" collapsible>
      {users.data.map((user: any) => (
        <AccordionItem key={user.id} value={user.id}>
          <AccordionTrigger>
            {user.first_name} {user.last_name}
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-4 items-center">
              <img src={user.avatar} alt={user.first_name} />
              <div>
                <p>
                  <strong>Firstname:</strong>{" "}
                  <Link
                    href={`/profile/${user.id}`}
                    className="underline text-blue-500"
                  >
                    {user.first_name}
                  </Link>
                </p>
                <p>
                  <strong>Lastname:</strong> {user.last_name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
