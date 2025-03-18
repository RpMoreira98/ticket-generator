'use client';

import Layout from './components/layout-page';
import { PageRegister } from './components/pageRegister';

export default function Home() {
  return (
    <div className="items-center justify-items-center bg-[url('/background-desktop.png')] min-h-screen bg-cover bg-center">
      <Layout>
        <PageRegister />
      </Layout>
    </div>
  );
}
