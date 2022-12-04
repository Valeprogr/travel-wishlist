import { Router } from "express";
import CountryControllers from "../controllers/CountryControllers.js";

const router= new Router();

router.post("/countries", CountryControllers.create)
router.get("/countries",CountryControllers.getAll)

export default router;