import 'package:course_web/app/modules/course/controller.dart';
import 'package:get/get.dart';

class CourseBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<CourseController>(() => CourseController());
  }
}
