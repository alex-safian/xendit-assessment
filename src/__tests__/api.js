import axios from "axios";
import { subscribe } from "@api/index";
import { SERVER_API_URL } from "@constants/index";

jest.mock("axios");

describe("Subscribe API", () => {
  it("call Subscribe API", async () => {
    axios.post.mockImplementationOnce(() => Promise.resolve());
    await subscribe("email@example.com");
    expect(axios.post).toHaveBeenCalledWith(`${SERVER_API_URL}`, {
      email: "email@example.com",
    });
  });
});
