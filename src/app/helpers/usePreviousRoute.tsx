import React from "react";
import { useRouter } from "next/navigation";

function usePreviousRoute() {
  const router = useRouter();

  const previousRoute = React.useRef(router.asPath);

  return <div>usePreviousRoute</div>;
}

export default usePreviousRoute;
