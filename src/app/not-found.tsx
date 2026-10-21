import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-wrap">
      <div className="container not-found">
        <p className="eyebrow">404 · Page not found</p>
        <h1>This page isn&apos;t available.</h1>
        <p>Check the address or return to the portfolio homepage.</p>
        <Link className="button button-primary" href="/">Back to homepage</Link>
      </div>
    </div>
  );
}
