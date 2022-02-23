import { Router }from 'express';
import authControler from '../app/controller/authControler';
import avatarcontroller from '../app/controller/avatarcontroller';
import categoryController from '../app/controller/categoryController';
import courseController from '../app/controller/courseController';
import levelController from '../app/controller/levelController';
import photoCourseController from '../app/controller/photoCourseController';
import userController from '../app/controller/userController';
import sessionCourseController from '../app/controller/sessionCourseController'
import clasePhotoController from '../app/controller/videoClaseController';
import claseController from '../app/controller/claseController';
import commentController from '../app/controller/commentController';
import middlewareAuth from '../middleware/auth';

import upload_image_course from '../multer/upload_image_course';
import avatarStorage from '../multer/upload_profile';
import upload_video from '../multer/upload_video';
import courseFilterController from '../app/controller/courseFilterController';
import claseDetailController from '../app/controller/claseDetailController';



const router = Router();

router.post('/lesson', claseController.store);
router.post('/session-course', sessionCourseController.store);
router.post('/authentication', authControler.store);
router.post('/usuario', userController.store);
router.post('/category', categoryController.store);
router.post('/level', levelController.store);
router.post('/payment');
router.post('/support');
router.post('/course', upload_image_course.upload, courseController.store);
router.post('/comment', commentController.store);

router.put('/course/:id', upload_image_course.upload, courseController.update);
router.put('/comement/:id', commentController.update);
router.put('/support/:id');
router.put('/payment/:id');
router.put('/usuario/:id', userController.update);
router.put('/category/:id', categoryController.update);
router.put('/level/:id', levelController.update);
router.put('/avatar/:id', avatarStorage.upload, avatarcontroller.update);
router.put('/photo-course/:id', upload_image_course.upload, photoCourseController.update)
router.put('/session-course/:id', sessionCourseController.update);
router.put('/upload-video-clase/:id', upload_video.upload, clasePhotoController.update);

router.get('/clase/:id', middlewareAuth, claseController.show);
router.get('/clases/:id', middlewareAuth, claseController.index);
router.get('/session-courses/:id', middlewareAuth, sessionCourseController.index);
router.get('/session-course/:id', middlewareAuth, sessionCourseController.show);
router.get('/usuario/:id', middlewareAuth, userController.show);
router.get('/usuarios', middlewareAuth, userController.index);
router.get('/categories', middlewareAuth, categoryController.index);
router.get('/category/:id', middlewareAuth, categoryController.show);
router.get('/level/:id', middlewareAuth, levelController.show);
router.get('/level', middlewareAuth, levelController.index);
router.get('/courses', middlewareAuth, courseController.index);
router.get('/course/:id', middlewareAuth, courseController.show);
router.get('/comments/:id', middlewareAuth, commentController.index);
router.get('/comment/:id', middlewareAuth, commentController.show);
router.get('/list-course', courseFilterController.index);
router.get('/list-course/:id', courseFilterController.show);
router.get('/course-detail-clase', claseDetailController.index);

router.get('/support');
router.get('/payments');
router.get('/payment/:id');

router.delete('/course/:id', courseController.delete);
router.delete('/comment/:id', commentController.delete);
router.delete('/support/:id');
router.delete('/payment/:id');
router.delete('/usuario/:id', userController.delete);
router.delete('/category/:id', categoryController.delete);
router.delete('/level/:id', levelController.delete);
router.delete('/session-course/:id', sessionCourseController.delete);
router.delete('/upload-video-clase/:id', clasePhotoController.delete);

export default router;
