import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  isLoading: boolean;
  error:string | null
};

const Loading = ({ error, isLoading, children }: TProps) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
      return <p>Error: {error}</p>;
  }

  return children;
};

export default Loading;
