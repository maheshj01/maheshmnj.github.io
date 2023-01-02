---
Author: "Mahesh Jamdade"
layout: post
title: "Implementing push notifications in Flutter"
Date: "2022-12-25"
Categories: "Flutter"
description: "T"

# permalink: "/my-first-blog-post/" # This is permalink for your blog post. You can change it to anything you want.
permalink: "/:title.html"
---

## Implementing push notifications in Flutter

This is my first blog post. I am going to explain how to implement push notification in Flutter. I am going to use Firebase Cloud Messaging (FCM) for this. FCM is a cross-platform messaging solution that lets you reliably deliver messages at no cost. FCM is a free service that lets you send messages to your users. You can send messages to iOS, Android, and web apps. You can also send messages to users who are not currently using your app. FCM is a free service that lets you send messages to your users. You can send messages to iOS, Android, and web apps. You can also send messages to users who are not currently using your app.

## How to implement push notification in Flutter


1. Create a new Flutter project.
2. Add firebase_messaging: ^10.0.7 to pubspec.yaml file.
3. Run flutter pub get.
4. Add the following code to your main.dart file.

```dart
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePage State extends State<MyHomePage> {
  final FirebaseMessaging _firebaseMessaging = FirebaseMessaging.instance;

  @override
  void initState() {
    super.initState();
    _firebaseMessaging.getToken().then((token) {
      print(token);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}
```

5. Run the app and you will see the token in the console.

## How to send push notification to Flutter app

1. Go to Firebase console and click on the project.
2. Click on the Cloud Messaging tab.
3. Click on the New message button.
4. Enter the title and body of the message.
5. Click on the Send button.

## Conclusion

In this blog post, I have explained how to implement push notification in Flutter. I have also explained how to send push notification to Flutter app. I hope you have enjoyed this blog post. If you have any questions, please feel free to ask in the comments section below.

## References

1. [https://pub.dev/packages/firebase_messaging](https://pub.dev/packages/firebase_messaging)
2. [https://firebase.google.com/docs/cloud-messaging](https://firebase.google.com/docs/cloud-messaging)

## About the Author

Mahesh Jamdade is a software engineer at [https://www.zealousys.com](https://www.zealousys.com). He is a passionate programmer and loves to learn new technologies. He is also a blogger and has written many articles on Flutter and other technologies. You can follow him on [https://twitter.com/maheshj_](https://twitter.com/maheshj_).

## About Zealousys

Zealousys is a software development company based in India. We provide software development services to startups and enterprises. We have a team of experienced software engineers who have expertise in various technologies. We have worked with many startups and enterprises and have delivered many successful projects. If you are looking for a software development company, please feel free to contact us at [https://www.zealousys.com/contact-us](https://www.zealousys.com/contact-us).

## About Zealousys Blog

Zealousys Blog is a blog where we write articles on various technologies. We write articles on Flutter, React Native, Node.js, and other technologies. We also write articles on software development, software testing, and other topics. If you are interested in reading our articles, please visit [https://www.zealousys.com/blog](https://www.zealousys.com/blog).




