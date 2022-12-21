-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_procedimentos_clientes" (
    "clientId" TEXT NOT NULL,
    "procedimentId" TEXT NOT NULL,

    PRIMARY KEY ("clientId", "procedimentId"),
    CONSTRAINT "procedimentos_clientes_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "procedimentos_clientes_procedimentId_fkey" FOREIGN KEY ("procedimentId") REFERENCES "procediments" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_procedimentos_clientes" ("clientId", "procedimentId") SELECT "clientId", "procedimentId" FROM "procedimentos_clientes";
DROP TABLE "procedimentos_clientes";
ALTER TABLE "new_procedimentos_clientes" RENAME TO "procedimentos_clientes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
