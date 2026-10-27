// @ts-check
import { module } from "@prisma/composer";
import qatalogService from "./service.mjs";

export default module("qatalog", ({ provision }) => {
  provision(qatalogService);
});
