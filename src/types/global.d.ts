import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient; // Declare prisma as a global variable of type PrismaClient
}

export { };