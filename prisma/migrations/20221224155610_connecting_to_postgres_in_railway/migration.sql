-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL,
    "client_name" TEXT NOT NULL,
    "client_number" TEXT NOT NULL,
    "next_procediment_date" TEXT,
    "observations" TEXT,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "procediments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "procediments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "procedimentos_clientes" (
    "clientId" TEXT NOT NULL,
    "procedimentId" TEXT NOT NULL,

    CONSTRAINT "procedimentos_clientes_pkey" PRIMARY KEY ("clientId","procedimentId")
);

-- AddForeignKey
ALTER TABLE "procedimentos_clientes" ADD CONSTRAINT "procedimentos_clientes_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "procedimentos_clientes" ADD CONSTRAINT "procedimentos_clientes_procedimentId_fkey" FOREIGN KEY ("procedimentId") REFERENCES "procediments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
