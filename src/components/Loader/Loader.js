import { RotatingLines } from "react-loader-spinner";
export const Loader = () => {
  return (
      <RotatingLines
        height="60"
        width="60"
        radius="9"
        strokeColor="white"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
  );
};
