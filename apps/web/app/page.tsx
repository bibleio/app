import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-bg-1 mt-72 min-h-screen p-32">
      <h1 className="text-h1">Welcome</h1>
      <div className="grid grid-cols-4 gap-12">
        <Card link="/bible">
          <h3 className="text-h3">Bible</h3>
          <p className="text-body leading-none">Read the Bible.</p>
        </Card>
        <Card link="/pray">
          <h3 className="text-h3">Pray</h3>
          <p className="text-body leading-none">View your prayer list.</p>
        </Card>
        <Card link="/testimonies">
          <h3 className="text-h3">Testimonies</h3>
          <p className="text-body leading-none">
            Look at other people's testimonies.
          </p>
        </Card>
        <Card link="/settings/account">
          <h3 className="text-h3">Account</h3>
          <p className="text-body leading-none">See your account data.</p>
        </Card>
      </div>
    </main>
  );
}

function Card({ children, link }: { children: React.ReactNode; link: string }) {
  return (
    <Link
      href={link}
      className="border-stroke bg-fg-1 hover:shadow-popup rounded-16 border p-32 duration-150 ease-out hover:-translate-y-4"
    >
      {children}
    </Link>
  );
}
