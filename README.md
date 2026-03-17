# iOS 26: Sharp corners on source screen during zoom transition pushback

Minimal reproduction for [react-native-screens#3768](https://github.com/software-mansion/react-native-screens/issues/3768).

## The Issue

On iOS 26, when using expo-router's zoom transition (`Link.AppleZoom` + `Link.AppleZoomTarget`), the source screen that pushes back during the transition has **sharp rectangular corners** instead of rounded corners.

In native iOS apps using `preferredTransition = .zoom()`, the source screen either:

- Doesn't push back at all (the destination zooms up with an opaque background behind it)
- Or pushes back with rounded corners matching the device screen radius

With react-native-screens, the source screen pushes back with sharp corners.

## Steps to Reproduce

1. `npm install`
2. `npx expo run:ios` (requires iOS 26 device/simulator)
3. Tap the card on the home screen
4. Observe: the home screen pushes back with **sharp corners**

## Expected Behavior

Source screen should have rounded corners during the pushback (or ideally no pushback at all, matching native zoom behavior).

## Environment

- expo: ~55.0.6
- expo-router: ~55.0.5
- react-native-screens: ~4.23.0
- react-native: 0.83.2
- iOS: 26.3
- Xcode: 26
