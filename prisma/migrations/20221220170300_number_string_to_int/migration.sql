/*
  Warnings:

  - You are about to alter the column `client_number` on the `clientes` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "client_name" TEXT NOT NULL,
    "client_number" INTEGER NOT NULL,
    "next_procediment_date" DATETIME,
    "observations" TEXT
);
INSERT INTO "new_clientes" ("client_name", "client_number", "id", "next_procediment_date", "observations") SELECT "client_name", "client_number", "id", "next_procediment_date", "observations" FROM "clientes";
DROP TABLE "clientes";
ALTER TABLE "new_clientes" RENAME TO "clientes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
