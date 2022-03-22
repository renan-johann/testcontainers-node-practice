import { GenericContainer, MySqlContainer } from "testcontainers";

describe("MySqlContai, connener", () => {
  jest.setTimeout(240_000);

  it("should work", async () => {
    const container = await new MySqlContainer().
    withCmd(["sleep", "infinity"]).
    start();
  });

  it("should work 02", async () => {
    const container = await new GenericContainer("mysql:8.0.28")
    .withCmd(["sleep", "infinity"])
    .withBindMount("/local/file.txt", "/remote/file.txt")
    .withBindMount("/local/dir", "/remote/dir", "ro")
    .start();
    container.stop()
  });
});