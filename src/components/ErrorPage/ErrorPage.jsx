import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  if (!error) return null;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, What you are looking for isnt here</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      
    </div>
  );
}