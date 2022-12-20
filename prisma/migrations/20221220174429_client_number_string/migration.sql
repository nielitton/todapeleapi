-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "client_name" TEXT NOT NULL,
    "client_number" TEXT NOT NULL,
    "next_procediment_date" DATETIME,
    "observations" TEXT
);
INSERT INTO "new_clientes" ("client_name", "client_number", "id", "next_procediment_date", "observations") SELECT "client_name", "client_number", "id", "next_procediment_date", "observations" FROM "clientes";
DROP TABLE "clientes";
ALTER TABLE "new_clientes" RENAME TO "clientes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
