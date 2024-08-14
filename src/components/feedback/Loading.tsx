import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
};

const Loading = ({ error, isLoading, children }: TProps) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    if ("status" in error) {
      return <p>Error: {JSON.stringify(error.data)}</p>;
    } else {
      return <p>Error: {error.message}</p>;
    }
  }

  return children;
};

export default Loading;
