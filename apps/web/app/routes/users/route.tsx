import { gql } from '@apollo/client/core';
import { client } from "~/root"
import { useLoaderData } from '@remix-run/react';

const getUsers = gql`
  query GetTodos {
    users {
      id
      name
    }
  }
`;

export async function loader() {
    const { data } = await client.query({ query: getUsers });
    return { users: data.users };
}

type LoaderData = {
    users: {id:string,name:string}[]
}

export default function App() {
    const { users } = useLoaderData<LoaderData>();
    return (
        <div>            
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
}