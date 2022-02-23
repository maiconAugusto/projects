import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../global/appBar.dart';
import '../../global/drawerCustom.dart';
import '../../routes/app_routes.dart';
import 'widget/courseItem.dart';

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: PreferredSize(
          child: const AppBarBase(),
          preferredSize: Size(Get.width, 50),
        ),
        body: SingleChildScrollView(
            child: Container(
          width: MediaQuery.of(context).size.width,
          height: MediaQuery.of(context).size.height,
          color: const Color(0xff2E3136),
          child: Column(children: [
            const SizedBox(
              height: 30,
            ),
            const Text(
              "Meus cursos",
              style:
                  TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
            ),
            const SizedBox(
              height: 30,
            ),
            Card(
              shadowColor: const Color(0xff2DBD9C),
              color: const Color(0xff202225),
              elevation: 1,
              child: Container(
                  padding: const EdgeInsets.only(left: 40, right: 40),
                  width: MediaQuery.of(context).size.width / 1.1,
                  child: GridView.count(
                    shrinkWrap: true,
                    primary: false,
                    crossAxisSpacing: 10,
                    padding: EdgeInsets.only(top: 15, bottom: 0),
                    mainAxisSpacing: 10,
                    crossAxisCount: 4,
                    children: <Widget>[
                      CourseItem(
                        onPress: () {
                          Get.toNamed(Routes.course,
                              parameters: {'courseName': 'NodeJs'});
                        },
                      ),
                      CourseItem(
                        onPress: () {
                          Get.toNamed(Routes.course,
                              parameters: {'courseName': 'NodeJs'});
                        },
                      ),
                      CourseItem(
                        onPress: () {
                          Get.toNamed(Routes.course,
                              parameters: {'courseName': 'NodeJs'});
                        },
                      ),
                      CourseItem(
                        onPress: () {
                          Get.toNamed(Routes.course,
                              parameters: {'courseName': 'NodeJs'});
                        },
                      ),
                    ],
                  )),
            ),
          ]),
        )),
        drawer: DrawerCustom());
  }
}
