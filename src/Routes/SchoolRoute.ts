import express from "express";
import { AddSchoolDetails, CreateChatMessage, RequestTojoinSchool, SchoolVerificaion, showChatMessages } from "../controllers/SchoolService";

const router = express.Router();

router.post('/add', AddSchoolDetails);
router.post('/verificaion/:schoolId', SchoolVerificaion)
router.post('/addstudent/:schoolId', RequestTojoinSchool);
router.post('/createchat/:schoolId', CreateChatMessage);
router.post('/showchat/:schoolId', showChatMessages);


export default router;