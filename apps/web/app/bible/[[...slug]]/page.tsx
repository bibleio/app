import BibleSelect from '@/components/BibleSelect';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-24 bg-light-bg-1 px-24 py-64">
      <div className="flex w-[512px] flex-col gap-24">
        <div className="flex items-center justify-between">
          <h3 className="text-h3 font-medium">Genesis 1</h3>
          <BibleSelect />
        </div>
      </div>
    </main>
  );
}
