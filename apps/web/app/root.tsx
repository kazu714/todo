import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import { ApolloClient } from '@apollo/client/core';
import { InMemoryCache } from '@apollo/client/cache';

import styles from "./index.css?url"

export const client = new ApolloClient({
  // GraphQLサーバーのURLを指定
  uri: 'http://localhost:4000/graphql',
  // クエリ結果をキャッシュする時に使うキャッシュ方法
  cache: new InMemoryCache(),
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];



export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
