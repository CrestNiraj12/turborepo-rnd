import Link from "next/link";
import useUser from "lib/useUser";
import { useRouter } from "next/router";
import Image from "next/image";
import fetchJson from "lib/fetchJson";
import { HStack } from "@chakra-ui/react";
import { ThemeToggler } from "ui";

export default function Header() {
  const { user, mutateUser } = useUser();
  const router = useRouter();

  return (
    <header className="bg-blue-900 py-5 px-24">
      <nav className="flex justify-start items-center ">
        <HStack spacing={12} className="w-full list-none ml-0 pl-0">
          <li className="flex-1">
            <Link href="/" legacyBehavior>
              <a className="font-bold text-white">Home</a>
            </Link>
          </li>
          {user?.isLoggedIn === false && (
            <li>
              <Link href="/login" legacyBehavior>
                <a className="font-bold text-white">Login</a>
              </Link>
            </li>
          )}
          {user?.isLoggedIn === true && (
            <>
              <li>
                <Link
                  className="hover:cursor-pointer text-white"
                  href="/profile"
                  legacyBehavior
                >
                  <div className="flex items-center font-bold">
                    <span className="mr-[.3rem] align-middle rounded-full overflow-hidden">
                      <Image
                        src={user.avatarUrl}
                        width={32}
                        height={32}
                        alt=""
                      />
                    </span>
                    Profile
                  </div>
                </Link>
              </li>
              <li>
                <a
                  className="font-bold text-red-500"
                  href="/api/logout"
                  onClick={async (e) => {
                    e.preventDefault();
                    mutateUser(
                      await fetchJson("/api/logout", { method: "POST" }),
                      false
                    );
                    router.push("/login");
                  }}
                >
                  Logout
                </a>
              </li>
            </>
          )}
          <li>
            <ThemeToggler className="" />
          </li>
        </HStack>
      </nav>
    </header>
  );
}
