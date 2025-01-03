import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.set("from", "home");

    await sleep(1500);

    router.push(`${href}?${params.toString()}`);
  };

  return (
    <Link
      tabIndex={1}
      onClick={handleTransition}
      {...props}
      href={{ pathname: "/1" }}
    >
      <motion.span></motion.span>
      {children}
    </Link>
  );
};
