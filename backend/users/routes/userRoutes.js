import express from "express";
import { handleUserSignup } from "../controllers/authController.js";
import { handleUserDashboard } from "../controllers/userDashboardController.js";
import { handleUserProfilePreview } from "../controllers/userProfileController.js";
import { handleUpdateUserProfile } from "../controllers/userUpdateController.js";
import { addUID } from "../middlewares/authMiddleware.js";
import { getLeaderboard } from "../controllers/leaderboardController.js";
import { generateSignature } from "../controllers/cloudinaryUploadController.js";
import { generateSVG } from "../controllers/generateSVG.js";
import { TriggerContestNotifToTopic, addSubscriber, addSubscriberToTopic, createTopic, removeSubscriberFromTopic, updateDeviceID } from "../controllers/notifsController.js";

const router = express.Router();

router.get("/leaderboard", getLeaderboard);

// POST route for user signup
router.post("/signup", addUID, handleUserSignup);

// router.get('/signout', checkAuth, handleUserSignout);

router.get("/dashboard", addUID, handleUserDashboard);

router.post("/dashboard", addUID, handleUpdateUserProfile);

// router.post("/notifs", addUID, updateDeviceID);
router.post("/notifs/subscribe", addUID, addSubscriber);

router.post("/notifs/addSubscriberToTopic", addUID, addSubscriberToTopic);
router.delete("/notifs/removeSubscriberFromTopic", addUID, removeSubscriberFromTopic);

router.post("/notifs/contest", TriggerContestNotifToTopic);

router.post("/createTopic", createTopic);

router.get("/signImageUpload", addUID, generateSignature);

router.get("/profile/:username", handleUserProfilePreview);

router.get("/ratings/:username", generateSVG);
// router.post('/profile/:username', addUID, checkUserOwnership, handleUpdateUserProfile);

// router.post('/isLoggedin', checkLoggedIn);

export default router;
