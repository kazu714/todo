import { gql } from '@apollo/client/core';
import { client } from "~/root"
import { Form, redirect, useActionData, useLoaderData } from '@remix-run/react';

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
    users: { id: string, name: string }[]
}

const createUser = gql`
    mutation CreateUser($name: String!) {
        createUser(name: $name){
            id
            name
        }
    }
`
export const action = async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const name = formData.get('name');

    // Apollo Client を使って Mutation を呼び出す
    const { data } = await client.mutate({
        mutation: createUser,
        variables: { name },
    });

    return data.createUser;
};

type ActionData = {
    id: string, name: string
}

export default function App() {
    // createdUserだけは再レンダリングされるが
    // usersは再レンダリングされない
    const { users } = useLoaderData<LoaderData>();
    const createdUser = useActionData<typeof action>();
    return (
        <div>
            {createdUser && `${createdUser.name}が作成されました` }
            <Form method="post">
                <input type="text" name="name" required />
                <button type="submit">userを登録する</button>
            </Form>
            <hr />
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
}