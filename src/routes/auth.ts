import {Router} from 'express';
const router: Router = Router();

import { signin, sigup, profile } from "../controllers/auth.controller";
import { TokenValidation } from "../libs/verifyToken";


router.post('/sigup', sigup);
router.post('/signin', signin);
router.get('/profile',TokenValidation, profile);

export default router;