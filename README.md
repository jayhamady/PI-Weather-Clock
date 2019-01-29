# PI-Weather-Clock
Pi Weather Clock for old monitors

This project turns your monitor and Raspberry Pi Zero into a simple, skinnable time and weather dashboard.

+ [Items Needed](#itemsNeeded)
+ [Instructions](#instructions)
    - [Cloning](#cloning)
    - [Update System](#updatingSystem)
    <!-- - [Fulfilling requirements](#fulfillingRequirements) -->
    - [Setting your location](#settingYourLocation)
    - [Configuring your Pi](#configuringYourPi)
        * [Disallowing screen sleep](#disallowingScreenSleep)
        * [Installing Unclutter](#hidingCursor)
        * [Installing Chromium](#installingChromium)
        * [Auto-starting Unclutter and Chromium](#autoStartingChromium)
        * [Auto-starting GitHub Pull Request for latest updates](#autoStartingGitHubPull)
        
    <!-- - [Scheduling screen sleep](#scheduling) -->
+ [Changing the skin](#changingTheSkin)
+ [Credit](#credit) 

* * *

## <a name="itemsNeeded"></a>Items needed

+ Raspberry Pi Zero
+ Monitor
+ Adapter to hook said Raspberry Pi to said monitor
+ Internet connection

## <a name="instructions"></a>Instructions

### <a name="cloning"></a>Cloning

Clone this repository with `git clone https://github.com/jayhamady/PI-Weather-Clock.git`.
OR
Specific Branch to clone example `git clone --single-branch --branch <branchname> host:/dir.git`

If your Pi does not currently have git, you will need to install it first with `sudo apt-get install git`.

### <a name="updatingSystem"></a>Update System

 `sudo apt-get update && sudo apt-get upgrade` - Update your system


<!--### <a name="fulfillingRequirements"></a>Fulfilling requirements

This project is not distributed with its dependencies; however, [Bower](http://bower.io/) will automatically pull them in.

 1. `sudo apt-get update && sudo apt-get upgrade` - Update your system
2. Install Node Package Manager (required for Bower) 

  ##### Raspberry Pi Zero

  ```
  wget https://nodejs.org/dist/v4.0.0/node-v4.0.0-linux-armv6l.tar.gz 
  tar -xvf node-v4.0.0-linux-armv6l.tar.gz 
  cd node-v4.0.0-linux-armv6l
  sudo cp -R * /usr/local/
  ```

  <a href="http://blog.wia.io/installing-node-js-v4-0-0-on-a-raspberry-pi/">Node install instructions</a> by <a href="http://blog.wia.io/author/conall/">Conall Laverty</a>
    

3. `sudo npm install -g bower` - Install Bower
4. `cd ~/PI-Weather-Clock` - cd into the directory of the cloned project
5. `bower install` - Install the project's dependencies -->

### <a name="settingYourLocation"></a>Setting your location

go to the cloned dir `cd ~/PI-Weather-Clock`

Open `nano config.js` and find the following section at the top:

```javascript
    var longitude = 42.9634;
    var latitude = -85.6681;
    //Sign up for a darksky account https://darksky.net/dev/register
    var darkSkyID = 'YourCODE';
    //City to display 
    var cityName = "CityName";
    //Image for Day
    var imgDay = 'img/day.png';
    //Image for night
    var imgNight = 'img/night.png';
    //Short Day names
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    //Full day names
    var fullDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //Time to offset clock time in minutes
    var timeOffsetminutes = 15;
    //Time to refresh weather info in minutes - note free account gets 1000 a day
    var weatherRefreshMinutes = 60;
    //Forecast number of hour to skip on each hour forecast
    var forecastNumberHoursSkip = 2;
```

Change these variables to match your location, unit measurement, and desired update interval, and your part of the coding is done!

### <a name="configuringYourPi"></a>Configuring your Pi

You will need a Raspberry Pi zero (although you could use anything else) with Raspbian (again, or anything else) and an internet connection. To complete the dashboard, your Pi will need disallow screen sleep and automatically start kiosk mode.

#### <a name="disallowingScreenSleep"></a>Disallowing screen sleep

Unless screen sleep is prevented, the dashboard screen will go black after a few minutes and require a mouse movement or keypress to wake up. Scheduled times for the display to turn off are covered in a [later section](#scheduling).

`sudo nano /etc/lightdm/lightdm.conf`

Add the following lines to the [SeatDefaults] section:

If you dont see a `[SeatDefaults]` make one
```bash
[SeatDefaults]
xserver-command=X -s 0 -dpms
```
#### <a name="hideCursor"></a>Installing Unclutter

Unclutter causes the mouse cursor to disappear when the mouse isn't being moved. This prevents the dash from having a cursor over the middle unless you plug in a mouse and move it elsewhere.

`sudo apt-get install unclutter`

#### <a name="installingChromium"></a>Installing Chromium

Chromium is used for the display.

```
sudo apt-get update
sudo apt-get install chromium-browser --yes
```

#### <a name="autoStartingChromium"></a>Auto-starting Unclutter and Chromium

1. Create a new directory at `~/.config/autostart` if it does not exist - `mkdir ~/.config/autostart`
2. `cd ~/.config/autostart` - cd into this directory
3. `nano unclutterAuto.desktop` - Create a new .desktop file
4. Add the following lines and save. Customize the file path to where this project's index.html lives on your Pi.

	```
	[Desktop Entry]
	Type=Application
	Exec=unclutter -idle 0.1
	```
5. `nano chromiumAuto.desktop` - Create a new .desktop file

	```
	[Desktop Entry]
	Type=Application
	Exec=chromium-browser --full-screen --disable-infobars --disable-translate file:///home/pi/PI-Weather-Clock/index.html
	```
Your Pi should now atomatically start fullscreen mode and show the dashboard full screen once your desktop loads.  Kiosk mode ignores any pop up windows like 'Restore last pages'.

#### <a name="autoStartingGitHubPull"></a>Auto-starting Github pull for new updates

You can add your script executable command to the bottom of .bashrc that will run your script every time you log in.

Make sure you are in the pi folder:

`$ cd ~/`
Create a file and write a script to run in the file:

`$ sudo nano superscript`

add the following line 
```
    cd ~/PI-Weather-Clock
    cp config.js ~/config.js
    git pull https://github.com/jayhamady/PI-Weather-Clock.git
    cp ~/config.js ~/PI-Weather-Clock/config.js
    sleep 5
    startx
```

No mod the file to execute

```
sudo chmod +x superscript
```

Note: The sleep command is just to pause and see if there were updates before launching the OS UI

Open up .bashrc for configuration:

`$ sudo nano .bashrc`
Scroll down to the bottom and add the line: `
```
./superscript
```




#### <a name="TimeConfig"></a>Time Configuration

Check your computers time `date` NOTE: This will be the actual time and not include the time offset from the config file.

If your time or date are incorrect, use `sudo raspi-config` to set your locale and timezone.

<!-- ### <a name="scheduling"></a>Scheduling screen sleep

If you don't want your display to run 24/7, you can use cron jobs to fire a pair of included bash scripts: screenOff.sh and screenOn.sh. Please ensure you've completed the [Disallowing screen sleep](#disallowingScreenSleep) step above in order to keep the display always on during the times it's scheduled to be on.

1. `cd` into your Pi-Kitchen-Dashboard directory and set both scripts to executable
	
	```bash
	chmod +x screenOff.sh
	chmod +x screenOn.sh
	```

2. Run `crontab -e` and add cronjobs to the end using the provided scripts. If you're not comfortable writing cronjobs manually, you can use a <a href="http://cron.nmonitoring.com/cron-generator.html">crontab generator</a>. The following lines, for example, shut off the display at 11:00PM each night and turn it back on at 6:00AM. Be sure to edit the file paths if necessary.
	
	```
	0 23 * * * /home/pi/Pi-Kitchen-Dashboard/screenOff.sh
	0 6 * * * /home/pi/Pi-Kitchen-Dashboard/screenOn.sh
	``` -->

## <a name="changingTheSkin"></a>Changing the skin

Future no skins made yet.

## <a name="credit"></a>Credit

Project was fully inspired by https://github.com/userexec/Pi-Kitchen-Dashboard#pi-kitchen-dashboard - Once Yahoo weather switched to oAuth I made this project.

Weather icons by Lukas Bischoff and Erik Flowers https://github.com/erikflowers/weather-icons. Icons licensed under [SIL OFL 1.1](http://scripts.sil.org/OFL).  

Weather data retrieved using DarkSky.com  

Project is under [MIT license](http://choosealicense.com/licenses/mit/).  
