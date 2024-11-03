export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const response = await fetch(
    `https://reqres.in/api/users/${(await params).id}`
  );
  const user = await response.json();
  console.log(user);
  return (
    <div className="grid grid-cols-2 gap-4 items-center">
      <img src={user.data.avatar} alt={user.data.first_name} />
      <div>
        <p>
          <strong>Firstname:</strong> {user.data.first_name}
        </p>
        <p>
          <strong>Lastname:</strong> {user.data.last_name}
        </p>
        <p>
          <strong>Email:</strong> {user.data.email}
        </p>
      </div>
    </div>
  );
}
