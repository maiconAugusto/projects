import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:chewie/chewie.dart';
import 'package:video_player/video_player.dart';

class CourseController extends GetxController {
  late ChewieController chewieController;
  RxList data = [
    {
      "_id": "MongoDB",
      "clases": [
        {"clase": "Let, Const e Var"},
        {"clase": "Introdução a JAVASCRIPT"}
      ]
    },
    {
      "_id": "JavaFX",
      "clases": [
        {"clase": "Let, Const e Var"},
        {"clase": "Introdução a JAVASCRIPT"}
      ]
    }
  ].obs;

  @override
  void onInit() {
    super.onInit();
    chewieController = ChewieController(
      videoPlayerController: VideoPlayerController.network(
          'https://flutter.github.io/assets-for-api-docs/assets/videos/bee.mp4'),
      aspectRatio: 16 / 9,
      autoInitialize: true,
      autoPlay: false,
      looping: false,
      errorBuilder: (context, errorMessage) {
        return const Center(
          child: Text(
            'Erro ao reproduzir o video',
            style: TextStyle(color: Colors.white),
          ),
        );
      },
    );
  }

  @override
  void dispose() {
    super.dispose();
    chewieController.dispose();
  }
}
