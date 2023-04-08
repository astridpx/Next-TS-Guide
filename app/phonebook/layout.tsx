import PhoneBook from "./PhoneBook";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div>
        {/* @ts-ignore */}
        <PhoneBook />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
