import postgres from "https://deno.land/x/postgresjs@v3.3.3/mod.js";

let sql;
if (Deno.env.get("DATABASE_URL")) {
  sql = postgres(Deno.env.get("DATABASE_URL"));
} else {
  sql = postgres({
    host: "snuffleupagus.db.elephantsql.com",
    database: "uatsamjz",
    username: "uatsamjz",
    password: "4PE9NVh4a8zHaaqx1SBgg3kUxzBQjvuw",
    port: 5432,
    max: 2, 
  });
}

export { sql };