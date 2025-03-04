import { gql } from '@apollo/client/core';
import { client } from "~/root"
import { Form, redirect, useActionData, useLoaderData } from '@remix-run/react';
import TextField from '~/features/common/text-field';

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

    return redirect("/users");
};

type ActionData = {
    id: string, name: string
}

export default function App() {
    return (
        <div>
            <Form method="post">
                <TextField name="name" required />
                <button type="submit">userを登録する</button>
            </Form>
        </div>
    );
}