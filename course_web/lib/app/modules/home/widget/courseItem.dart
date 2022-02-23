import 'package:course_web/app/routes/app_routes.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get/instance_manager.dart';

class CourseItem extends StatelessWidget {
  const CourseItem({Key? key, required this.onPress}) : super(key: key);
  final Function onPress;

  @override
  Widget build(BuildContext context) {
    return InkWell(
        onTap: () {
          onPress();
        },
        child: Column(
          children: [
            Expanded(
                flex: 5,
                child: ClipRRect(
                    borderRadius: BorderRadius.circular(4.0),
                    child: Image.network(
                      'https://picsum.photos/250?image=9',
                      fit: BoxFit.contain,
                    ))),
            const SizedBox(
              height: 10,
            ),
            Expanded(
              flex: 1,
              child: Container(
                  alignment: Alignment.center,
                  child: const Text(
                    'Introdução Express/Node',
                    style: TextStyle(color: Colors.white),
                  )),
            )
          ],
        ));
  }
}
