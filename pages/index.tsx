import Head from "next/head";

import HomeComponent from "../components/Home";
import SpacesComponent from "../components/Spaces";
import Navbar from "../components/Navbar";
import TermsPopup from "../components/TermsPopup";

export default function Home() {
  return (
    <>
      <Head>
        <title>CardanoGovX - The DAO Enabler on CARDANO</title>
        <meta charSet="utf-8" />
      </Head>

      <Navbar />
      <TermsPopup />
      <SpacesComponent />
    </>
  );
}
