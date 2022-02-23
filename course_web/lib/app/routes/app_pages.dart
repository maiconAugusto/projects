import 'package:course_web/app/modules/auth/binding.dart';
import 'package:course_web/app/modules/auth/page.dart';
import 'package:course_web/app/modules/course/binding.dart';
import 'package:course_web/app/modules/course/page.dart';
import 'package:course_web/app/modules/home/bindings.dart';
import 'package:course_web/app/modules/home/page.dart';
import 'package:course_web/app/modules/recoveryPassword/binding.dart';
import 'package:course_web/app/modules/recoveryPassword/page.dart';
import 'package:get/get.dart';

import 'app_routes.dart';

abstract class AppPages {
  static final pages = [
    GetPage(
      name: Routes.auth,
      page: () => const Auth(),
      binding: AuthBinding(),
    ),
    GetPage(
      name: Routes.recoveryPassword,
      page: () => const RecoveryPassword(),
      binding: RecoveryPassordBindings(),
    ),
    GetPage(
      name: Routes.home,
      page: () => const Home(),
      binding: HomeBinings(),
    ),
    GetPage(
      name: Routes.course,
      page: () => Course(),
      binding: CourseBinding(),
    ),
  ];
}
