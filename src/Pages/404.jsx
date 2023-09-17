import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Error Kaga Ada Boss</h1>
      <p>{error.statusText || error.message}</p>
    </>
  );
};

export default ErrorPage;
