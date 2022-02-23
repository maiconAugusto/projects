import 'package:chewie/chewie.dart';
import 'package:course_web/app/modules/course/controller.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../global/appBar.dart';
import '../../global/drawerCustom.dart';
import '../../routes/app_routes.dart';

class Course extends GetView<CourseController> {
  const Course({Key? key}) : super(key: key);

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
            SizedBox(
              width: MediaQuery.of(context).size.width / 1.1,
              child: Row(children: [
                Expanded(
                    child: Container(
                        alignment: Alignment.topLeft,
                        child: IconButton(
                          onPressed: () {
                            Get.back();
                          },
                          icon: const Icon(
                            Icons.arrow_back_sharp,
                            color: Colors.white,
                          ),
                        ))),
                Expanded(
                  child: Text(
                    Get.parameters['courseName']!,
                    style: const TextStyle(
                        color: Colors.white, fontWeight: FontWeight.w600),
                  ),
                )
              ]),
            ),
            const SizedBox(
              height: 20,
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Card(
                  shadowColor: const Color(0xff2DBD9C),
                  color: const Color(0xff202225),
                  elevation: 1,
                  child: Container(
                      padding: const EdgeInsets.only(left: 20, right: 20),
                      width: MediaQuery.of(context).size.width / 1.1,
                      child: Column(
                        children: [
                          Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Expanded(
                                  flex: 5,
                                  child: Container(
                                      margin: const EdgeInsets.only(
                                          top: 20, bottom: 20),
                                      child: AspectRatio(
                                        aspectRatio: 16 / 9,
                                        child: Chewie(
                                          controller:
                                              controller.chewieController,
                                        ),
                                      ))),
                              Expanded(
                                  flex: 2,
                                  child: Container(
                                      margin:
                                          EdgeInsets.only(top: 20, left: 18),
                                      child: ListView.builder(
                                        shrinkWrap: true,
                                        primary: false,
                                        itemCount: 2,
                                        itemBuilder: (context, index) {
                                          return Column(
                                            crossAxisAlignment:
                                                CrossAxisAlignment.center,
                                            children: [
                                              ClipRRect(
                                                  borderRadius:
                                                      BorderRadius.circular(4),
                                                  child: Container(
                                                      padding: EdgeInsets.only(
                                                          top: 3, bottom: 3),
                                                      width: Get.width,
                                                      color: Colors.white,
                                                      child: Text(
                                                        controller.data[index]
                                                            ['_id'],
                                                        style: TextStyle(
                                                            color: Colors
                                                                .grey[800]),
                                                      )))
                                            ],
                                          );
                                        },
                                      )))
                            ],
                          ),
                        ],
                      )),
                ),
                const SizedBox(
                  height: 10,
                ),
                SizedBox(
                    width: MediaQuery.of(context).size.width / 1.1,
                    child: Row(
                      children: const [
                        Text(
                          '  Introdução ao NodeJs',
                          style: TextStyle(
                              color: Colors.white, fontWeight: FontWeight.bold),
                        ),
                        SizedBox(
                          width: 10,
                        ),
                        Icon(
                          Icons.check_circle,
                          color: Color(0xff2DBD9C),
                        )
                      ],
                    ))
              ],
            )
          ]),
        )),
        drawer: DrawerCustom());
  }
}
