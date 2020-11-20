# i-rate description
This is a hybrid app used to manage restaurant's ratings from the users. It is developed based on the Cordova flatform as well as integrating with ReactJS and NodeJS. In briefly, I use ReactJS to build the app front-end, NodeJS to develop the back-end, and the Cordova flatform to make it become a hybrid app.

## Prerequisite
Here are some technical requirments that you must have to run the app successfully.
1. Package mananger (npm v7.0.12)
2. Nodejs  v14.15.1
3. Command line interface (Git v2.29.2)
4. Java SE Development Kit 8u271
5. Android Studio flatform
6. Genymotion emulation flatform or a real android phone.
## Installation
To sure that everything is clear, I give you some tips to prepare all prerequistes as good as possible.
1. NPM package manager and Nodejs:
  - To set up both, you only need to download NodeJS installer at [NodeJS Website](https://nodejs.org/en/) and install it normally.
2. Git CLI:
  - To install Git CLI, you will visit [Git Pages](https://git-scm.com/downloads). Then, you download with suitable operating system and install it.
3. Java jdk 8:
  - Here is which website you need to visit and download a suitable installer to install it. [Java JDK Website](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)
4. Android Studio:
  - Before anything, you must sure that you have installed Java SE Development Kit successfully.
  - Here is the download page of this software [Android Studio Website](https://developer.android.com/studio). 
5. Genymotion (optional):
  - This is an option because you can use a real device or a device supported by Android Studio. I only give you the main page of [The Genymotion](https://www.genymotion.com/).
 ## How to run
 After preparing prerequisites completely, I show you steps to run my app on your workplace. 
  - Firstly, you need to clone my project by downloading file zip or run this statement in Git CLI.
```
git clone https://github.com/thonguyen291000/i-rate.git
```
  - Secondly, you open the cloned folder, open the Git CLI in it, and type those statements:
  ```
  cd app
  npm install
  ```
  - After that, you need to prepare a device that can be a real device sush as your phone or a vitural device supported by Android Studio or Genymotion.
  - Finally, in the opend Git CLI, running two statements:
  ```
  cd ../
  ./build.sh
  ```
