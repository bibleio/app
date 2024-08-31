import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-light-bg-1 p-32">
      <h1 className="text-h1 font-semibold">Welcome</h1>
      <div className="grid grid-cols-4 gap-12">
        <Card link="/bible">
          <h3 className="text-h3 font-medium">Bible</h3>
          <p className="text-body leading-none">Read the Bible.</p>
        </Card>
        <Card link="/pray">
          <h3 className="text-h3 font-medium">Pray</h3>
          <p className="text-body leading-none">View your prayer list.</p>
        </Card>
        <Card link="/testimonies">
          <h3 className="text-h3 font-medium">Testimonies</h3>
          <p className="text-body leading-none">
            Look at other people's testimonies.
          </p>
        </Card>
        <Card link="/settings/account">
          <h3 className="text-h3 font-medium">Account</h3>
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
      className="rounded-16 border border-light-stroke bg-light-fg-1 p-32 duration-150 ease-out hover:-translate-y-4 hover:drop-shadow-md"
    >
      {children}
    </Link>
  );
}
