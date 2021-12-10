/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[login]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[node_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `login` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `node_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "username",
ADD COLUMN     "events_url" TEXT,
ADD COLUMN     "followers_url" TEXT,
ADD COLUMN     "following_url" TEXT,
ADD COLUMN     "gists_url" TEXT,
ADD COLUMN     "gravatar_id" TEXT,
ADD COLUMN     "login" TEXT NOT NULL,
ADD COLUMN     "node_id" TEXT NOT NULL,
ADD COLUMN     "organizations_url" TEXT,
ADD COLUMN     "received_events_url" TEXT,
ADD COLUMN     "repos_url" TEXT,
ADD COLUMN     "site_admin" BOOLEAN,
ADD COLUMN     "starred_url" TEXT,
ADD COLUMN     "subscriptions_url" TEXT,
ADD COLUMN     "type" TEXT,
ADD COLUMN     "url" TEXT,
ALTER COLUMN "html_url" DROP NOT NULL,
ALTER COLUMN "public_repos" DROP NOT NULL,
ALTER COLUMN "public_gists" DROP NOT NULL,
ALTER COLUMN "followers" DROP NOT NULL,
ALTER COLUMN "following" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateIndex
CREATE UNIQUE INDEX "User_node_id_key" ON "User"("node_id");
