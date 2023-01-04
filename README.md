# Panasonic Comfort Cloud Alternative

This is an alternative unofficial [Homey](https://homey.app) app for controlling air conditioning and heat pump devices via the [Panasonic Comfort Cloud](https://www.panasonic.com/global/hvac/air-conditioning/connectivity/comfort-cloud.html) service.

# Why?

There's already an unofficial [Homey app for PCC](https://homey.app/en-us/app/com.panasonic.PCC/Panasonic-Comfort-Cloud/), but it's closed source, with no official forum, maintained by a single, hard-to-reach developer.  
An ad-hoc community thread has gathered [here](https://community.homey.app/t/error-panasonic-comfort-cloud-app/65935).

Panasonic recently imposed rate-limiting on their authentication service.  The above app stopped working - showing "internal server error" or "ServerError" in Homey.  (It probably authenticates on every service request, ignoring the auth token.)

The alternative app presented here is virtually identical in behaviour, except that authentication occurs only once, and the auth token is reused until it expires.

# Usage

This repo is in early development, so not published to Homey store yet.

Adventurous souls can install by cloning/downloading this repo, setting up the [Homey CLI](https://apps.developer.homey.app/the-basics/getting-started/homey-cli), and running e.g. ```homey app install```.
*I'm not recommending this - all usage is at your own risk!*

The credentials must be provided in the app settings.  It is recommended that you create distinct credentials for Homey.  Credentials are created with the official PCC app (Android/iPhone), and must be granted permission to control your device(s).  

You should disable the original app, if you've been using it (otherwise it's likely to keep causing your credentials to be blocked).  If your credentials are currently blocked, they won't work any better in my app.  You might have to wait up to 24 hours before the block lifts, or you can create new credentials.

If/when the original app is fixed, you should make sure only one of the apps is enabled at any one time.  Otherwise they will compete to apply settings to your devices, resulting in much more traffic to the servers.

# Credits

  * Vegard Svendsen for [the original Homey app](https://homey.app/en-us/app/com.panasonic.PCC/Panasonic-Comfort-Cloud/).
  * The app relies heavily on [panasonic-comfort-cloud-client](https://github.com/marc2016/panasonic-comfort-cloud-client).  The main reason I got the app working within a couple of hours!
  * Athom provides an easy to use [CLI, SDK and app template](https://apps.developer.homey.app/the-basics/getting-started/homey-cli).  The combined quality ensured I hit the ground running.
  * Icon downloaded from [SVG Repo](https://www.svgrepo.com/svg/288102/air-conditioning-air-conditioner).