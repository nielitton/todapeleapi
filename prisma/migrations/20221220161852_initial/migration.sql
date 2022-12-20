-- CreateTable
CREATE TABLE "clientes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "client_name" TEXT NOT NULL,
    "client_number" TEXT NOT NULL,
    "next_procediment_date" DATETIME,
    "observations" TEXT
);

-- CreateTable
CREATE TABLE "procediments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "procedimentos_clientes" (
    "clientId" INTEGER NOT NULL,
    "procedimentId" INTEGER NOT NULL,

    PRIMARY KEY ("clientId", "procedimentId"),
    CONSTRAINT "procedimentos_clientes_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clientes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "procedimentos_clientes_procedimentId_fkey" FOREIGN KEY ("procedimentId") REFERENCES "procediments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
