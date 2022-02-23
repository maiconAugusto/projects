import 'package:course_web/app/modules/recoveryPassword/controller.dart';
import 'package:get/get.dart';

class RecoveryPassordBindings extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<RecoveryPasswordController>(() => RecoveryPasswordController());
  }
}
