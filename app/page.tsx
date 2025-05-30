import ProfilePage from "@/profile-page"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>🐝 Belinke</title>
      </Head>
      <main className="w-screen h-screen bg-gray-100 overflow-hidden">
        <ProfilePage />
      </main>
    </>
  );
}
