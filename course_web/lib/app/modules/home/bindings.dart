import 'package:course_web/app/modules/home/controller.dart';
import 'package:get/get.dart';

class HomeBinings extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<HomeController>(() => HomeController());
  }
}
