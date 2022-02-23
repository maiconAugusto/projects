import 'package:course_web/app/global/baseButton.dart';
import 'package:flutter/material.dart';

class RecoveryPassword extends StatelessWidget {
  const RecoveryPassword({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
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
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      const Text(
                        'Enviaremos ao seu E-mail sua recuperação de senha.',
                        style: TextStyle(color: Colors.white, fontSize: 14.0),
                      ),
                      Column(
                        children: [
                          const SizedBox(
                            height: 15,
                          ),
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
                                label: Text('Informe seu E-mail')),
                          ),
                          const SizedBox(
                            height: 30,
                          ),
                          Container(
                              height: 45,
                              width: double.infinity,
                              child: BaseButton(
                                text: "Recuperar acesso",
                                onPress: () {},
                              ))
                        ],
                      ),
                    ])),
          ),
        )
      ]),
    );
  }
}
