import { describe, it, expect, vi, beforeEach } from "vitest";
import { action } from "./route"; 
import { client } from "~/root";
import { Mock } from "vitest";

vi.mock("~/root", () => ({
  client: {
    mutate: vi.fn(),
  },
}));

describe("create", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("mutationが呼ばれることと、/usersにリダイレクトされることをテスト", async () => {
    // モックデータ
    const mockUser = { id: "123", name: "Test User" };
    (client.mutate as Mock).mockResolvedValue({ data: { createUser: mockUser } });

    // フェイクのリクエストを作成
    const formData = new FormData();
    formData.append("name", "Test User");

    const request = new Request("http://localhost:3000", {
      method: "POST",
      body: formData,
    });

    // action を実行
    const response = await action({ request });

    // Mutation が正しく呼ばれたことを確認
    expect(client.mutate).toHaveBeenCalledTimes(1);
    expect(client.mutate).toHaveBeenCalledWith({
      mutation: expect.any(Object),
      variables: { name: "Test User" },
    });

    // リダイレクトが正しく実行されたことを確認
    expect(response.status).toBe(302);
    expect(response.headers.get("Location")).toBe("/users");
  });
});
