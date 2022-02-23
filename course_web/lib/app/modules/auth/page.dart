import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../../global/baseButton.dart';
import '../../routes/app_routes.dart';

class Auth extends StatelessWidget {
  const Auth({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: MediaQuery.of(context).size.width,
        color: const Color(0xff2E3136),
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          Form(
            child: Card(
              color: const Color(0xff202225),
              elevation: 2,
              child: Container(
                  margin: const EdgeInsets.only(left: 40, right: 40),
                  width: 500,
                  height: MediaQuery.of(context).size.height / 1.5,
                  child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        Column(
                          children: [
                            TextFormField(
                              style: const TextStyle(color: Colors.white),
                              decoration: InputDecoration(
                                  enabledBorder: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(25.0),
                                    borderSide: const BorderSide(
                                      color: Colors.white,
                                      width: 1.0,
                                    ),
                                  ),
                                  focusedBorder: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(25.0),
                                    borderSide: const BorderSide(
                                      color: Colors.blue,
                                    ),
                                  ),
                                  labelStyle: TextStyle(color: Colors.white),
                                  label: Text('E-mail')),
                            ),
                            const SizedBox(
                              height: 25,
                            ),
                            TextFormField(
                              obscureText: true,
                              style: const TextStyle(color: Colors.white),
                              decoration: InputDecoration(
                                  enabledBorder: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(25.0),
                                    borderSide: const BorderSide(
                                      color: Colors.white,
                                      width: 1.0,
                                    ),
                                  ),
                                  focusedBorder: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(25.0),
                                    borderSide: const BorderSide(
                                      color: Colors.blue,
                                    ),
                                  ),
                                  labelStyle:
                                      const TextStyle(color: Colors.white),
                                  label: const Text('Senha')),
                            ),
                            const SizedBox(
                              height: 30,
                            ),
                            SizedBox(
                              height: 45,
                              width: double.infinity,
                              child: BaseButton(
                                text: "Entrar",
                                onPress: () {
                                  Get.toNamed(Routes.home);
                                },
                              ),
                            ),
                            const SizedBox(
                              height: 22,
                            ),
                            TextButton(
                                onPressed: () {
                                  Get.toNamed(Routes.recoveryPassword);
                                },
                                child: const Text(
                                  'Esqueceu sua senha? Clique aqui',
                                  style: TextStyle(color: Colors.white),
                                )),
                          ],
                        ),
                        Column(
                          children: [
                            const SizedBox(
                              height: 25,
                            ),
                            const Text(
                              'Nos acompanhe em nossas redes sociais',
                              style: TextStyle(
                                  color: Colors.white, fontSize: 12.0),
                            ),
                            const SizedBox(
                              height: 10,
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: const [
                                Icon(
                                  Icons.facebook,
                                  color: Colors.white,
                                ),
                              ],
                            )
                          ],
                        )
                      ])),
            ),
          )
        ]),
      ),
    );
  }
}
