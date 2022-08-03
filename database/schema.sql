set client_min_messages to warning;
-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
create schema "public";

CREATE TABLE "public"."users" (
    "userId" serial NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "name" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "public"."appointments" (
  "appointmentId" serial NOT NULL,
  "name" TEXT NOT NULL,
  "address" TEXT NOT NULL,
  "city" TEXT NOT NULL,
  "userId" integer NOT NULL,
  "service" text not null,
  "appointmentScheduled" TIMESTAMPTZ NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL default now(),
  CONSTRAINT "appointments_pk" PRIMARY KEY ("appointmentId")
) WITH (
  OIDS=FALSE
);
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
