import { PostgreSqlContainer, GenericContainer } from "testcontainers";
import { Client } from "ts-postgres"

describe("MySqlContai, connener", () => {
  jest.setTimeout(240_000);

  it("should work", async () => {
    const container = await new PostgreSqlContainer().
    withCmd(["sleep", "infinity"]).
    start();

  });

  it("should work", async () => {
    const container = await new GenericContainer("postgres")
    .start();
  
    await container.stop({
        timeout: 10000
    });
  });

});