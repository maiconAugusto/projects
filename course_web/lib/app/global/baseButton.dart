import 'package:flutter/material.dart';

class BaseButton extends StatelessWidget {
  const BaseButton({Key? key, required this.onPress, required this.text})
      : super(key: key);
  final Function onPress;
  final String text;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 45,
      width: double.infinity,
      child: ElevatedButton(
          onPressed: () {
            onPress();
          },
          child: Text(text),
          style: ElevatedButton.styleFrom(primary: const Color(0xff2DBD9C))),
    );
  }
}
