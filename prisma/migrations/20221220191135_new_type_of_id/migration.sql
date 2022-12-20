/*
  Warnings:

  - The primary key for the `procediments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `clientes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `procedimentos_clientes` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_procediments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_procediments" ("id", "name", "price") SELECT "id", "name", "price" FROM "procediments";
DROP TABLE "procediments";
ALTER TABLE "new_procediments" RENAME TO "procediments";
CREATE TABLE "new_clientes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "client_name" TEXT NOT NULL,
    "client_number" TEXT NOT NULL,
    "next_procediment_date" DATETIME,
    "observations" TEXT
);
INSERT INTO "new_clientes" ("client_name", "client_number", "id", "next_procediment_date", "observations") SELECT "client_name", "client_number", "id", "next_procediment_date", "observations" FROM "clientes";
DROP TABLE "clientes";
ALTER TABLE "new_clientes" RENAME TO "clientes";
CREATE TABLE "new_procedimentos_clientes" (
    "clientId" TEXT NOT NULL,
    "procedimentId" TEXT NOT NULL,

    PRIMARY KEY ("clientId", "procedimentId"),
    CONSTRAINT "procedimentos_clientes_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "procedimentos_clientes_procedimentId_fkey" FOREIGN KEY ("procedimentId") REFERENCES "procediments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_procedimentos_clientes" ("clientId", "procedimentId") SELECT "clientId", "procedimentId" FROM "procedimentos_clientes";
DROP TABLE "procedimentos_clientes";
ALTER TABLE "new_procedimentos_clientes" RENAME TO "procedimentos_clientes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
