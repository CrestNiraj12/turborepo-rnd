import Layout from "components/Layout";
import Image from "next/image";
import { VStack, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <VStack>
        <Image
          className="dark:invert"
          src="/GitHub-Mark-32px.png"
          width="32"
          height="32"
          alt="Github"
        />
        <Heading as="h1">Login using your Github username</Heading>
      </VStack>
    </Layout>
  );
}
