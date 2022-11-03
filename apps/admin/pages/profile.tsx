import React from "react";
import Layout from "components/Layout";
import useUser from "lib/useUser";
import useEvents from "lib/useEvents";
import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function SgProfile() {
  const { user } = useUser({
    redirectTo: "/login",
  });
  const { events } = useEvents(user);

  return (
    <Layout>
      <Heading as="h1" className="mb-5">
        Your GitHub profile
      </Heading>
      <Heading as="h2" size="md">
        This page uses{" "}
        <Link href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended">
          Static Site Generation (SSG)
        </Link>{" "}
        and the <a href="/api/user">/api/user</a> route (using{" "}
        <Link href="https://github.com/vercel/swr">vercel/SWR</Link>)
      </Heading>
      {user && (
        <Box className="my-10">
          <Text className="italic ">
            Public data, from{" "}
            <a href={`https://github.com/${user.login}`}>
              https://github.com/{user.login}
            </a>
            , reduced to `login` and `avatar_url`.
          </Text>

          <pre>{JSON.stringify(user, null, 2)}</pre>
        </Box>
      )}

      {events !== undefined && (
        <p>
          Number of GitHub events for user: <b>{events.length}</b>.{" "}
          {events.length > 0 && (
            <>
              Last event type: <b>{events[0].type}</b>
            </>
          )}
        </p>
      )}
    </Layout>
  );
}
