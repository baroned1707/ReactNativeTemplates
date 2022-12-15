Template Use UI Lib Component Native base ( https://docs.nativebase.io/ )

To change name project 

```

npx react-native-rename <newName> -b <new bundle id>

With custom Bundle Identifier (Android only. For iOS, please use Xcode)

```

To build anroid apk
```
cd android && ./gradlew assemblerelease 
```

To build anroid aap
```
cd android && ./gradlew bundleRelease
```

Custom Splash Screen
```
#With Android
Open Android Studio edit android/app/src/main/res/layout

#With IOS
Open Xcode and edit LaunchScreen in ios/MoblieTemplate/LaunchScreen.storyboard
```
