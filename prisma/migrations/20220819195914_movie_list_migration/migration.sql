-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birth" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" TEXT,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" VARCHAR(2) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "titles" (
    "id" SERIAL NOT NULL,
    "tconst" TEXT NOT NULL,
    "titleType" TEXT NOT NULL,
    "primaryTitle" TEXT NOT NULL,
    "originalTitle" TEXT NOT NULL,
    "isAdult" BOOLEAN NOT NULL,
    "startYear" INTEGER NOT NULL,
    "endYear" INTEGER NOT NULL,
    "runtimeMinutes" INTEGER NOT NULL,
    "genres" TEXT NOT NULL,
    "rating_id" TEXT NOT NULL,

    CONSTRAINT "titles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ratings" (
    "id" TEXT NOT NULL,
    "tconst" TEXT NOT NULL,
    "averageRating" DOUBLE PRECISION NOT NULL,
    "numVotes" INTEGER NOT NULL,

    CONSTRAINT "ratings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "titles" ADD CONSTRAINT "titles_rating_id_fkey" FOREIGN KEY ("rating_id") REFERENCES "ratings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
