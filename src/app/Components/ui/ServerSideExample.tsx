import React from "react";
import { cookies } from "next/headers";

function ServerSideExample() {
  const cookieStore = cookies();
  console.log(cookieStore);

  return <div>ServerSideExample</div>;
}

export default ServerSideExample;
