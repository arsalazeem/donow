npx react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res
cd android
./gradlew assembleRelease
open /home/arsal/donow/android/app/build/outputs/apk/debug