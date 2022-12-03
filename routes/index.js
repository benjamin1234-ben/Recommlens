import { Router } from "express";
import {
    authentication, 
    authorization, 
    create, refresh, 
    searchProfiles, 
    searchPublications, 
    sign 
} from "../controllers/index.js";

const router = Router();

// GET - Routes
router.get("/search_pro/:query", searchProfiles);
router.get("/search_pub/:query", searchPublications);
router.get("/authorization", authorization);
router.get("/sign", sign);
router.get("/refresh", refresh);

// POST - Routes
router.post("/create", create);
router.post("/authentication", authentication);


export default router;