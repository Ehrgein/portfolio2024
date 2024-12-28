import React from "react";
import { useRouter } from "next/navigation";

function usePreviousRoute() {
  const router = useRouter();

  return <div>usePreviousRoute</div>;
}

export default usePreviousRoute;
