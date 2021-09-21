import { Router } from "express";
import VideoController from "../../../modules/videos/repositories/implamentation/VideoController";

const router = Router();

const videoController = new VideoController();

router.get("", videoController.show);
router.post("/video", videoController.store);

export default router;
