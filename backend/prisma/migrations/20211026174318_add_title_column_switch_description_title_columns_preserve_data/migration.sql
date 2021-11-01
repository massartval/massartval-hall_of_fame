/*
  Warnings:

  - Added the required column `title` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
ALTER TABLE "Link" RENAME COLUMN "description" TO "title";
CREATE TABLE "new_Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT NOT NULL,
    "postedById" INTEGER,
    "lastUpdatedAt" DATETIME,
    "lastUpdatedById" INTEGER,
    CONSTRAINT "Link_postedById_fkey" FOREIGN KEY ("postedById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Link_lastUpdatedById_fkey" FOREIGN KEY ("lastUpdatedById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Link" ("createdAt", "title", "id", "lastUpdatedAt", "lastUpdatedById", "postedById", "url") SELECT "createdAt", "title", "id", "lastUpdatedAt", "lastUpdatedById", "postedById", "url" FROM "Link";
DROP TABLE "Link";
ALTER TABLE "new_Link" RENAME TO "Link";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
