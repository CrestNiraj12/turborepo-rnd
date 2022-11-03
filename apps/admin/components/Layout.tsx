import Head from "next/head";
import Header from "components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Admin Page</title>
      </Head>

      <Header />

      <main>
        <div className="flex flex-col w-full h-[80vh] justify-center items-center">
          {children}
        </div>
      </main>
    </>
  );
}
