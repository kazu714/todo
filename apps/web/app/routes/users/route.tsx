import { gql } from '@apollo/client/core';
import { client } from "~/root"
import { useRevalidator, Link, useLoaderData, } from '@remix-run/react';

const getUsers = gql`
  query GetTodos {
    users {
      id
      name
    }
  }
`;
export async function loader() {
  const { data } = await client.query({
    query: getUsers,
    // 毎回fetchするようになる。これがないとuser作成後にusersが更新されない
    fetchPolicy: "network-only", 
  });
  return { users: data.users };
}
type LoaderData = {
  users: { id: string, name: string }[]
}

export default function App() {
  const { users } = useLoaderData<LoaderData>();
  return (
    <div>
      <Link to={"/users/create"}>新規作成画面へ</Link>
      <hr />
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}