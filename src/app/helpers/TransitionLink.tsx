import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    await sleep(1500);

    console.log("log me!");

    router.push(href);
  };

  return (
    <Link {...props} href={"1"} onClick={handleTransition}>
      <motion.span></motion.span>
      {children}
    </Link>
  );
};
