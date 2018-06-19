lgwebos hook for gladysproject
=======================


What is Gladys project
-------------

**Website :** [https://gladysproject.com](http://gladysproject.com) <br>
**Community :** [https://community.gladysproject.com/](https://community.gladysproject.com/)


The Hook
-------------

This hook add the possibility to Gladys to shutdown, turnon, change volume, change channel, mute/unmute, make notification, start netflix and plex app on a Lg TV under WebOS 3.

Prerequisites
-------------

- [Gladys](http://gladysproject.com) ( tested with v3.7.1 )

To support Wake on Lan to turn on the tv 
```
sudo apt-get install etherwake
```

You may also set the mobile tv mode on tv parameters.

Getting Started
---------------
#### Gladys parameters

Add followings parameters in gladys :

The name of your tv on your network
```
LGTV_NAME=lgwebostv
```

The mac adress to allow wake on lan
```
LGTV_MAC_ADRESS=00:00:00:00:00:00
```

This optional parameter is in minute to update device on Gladys
```
LGWEBOS_INTERVAL_UPDATE=10
```
In this case Gladys check TV each 10 minutes to update the device on Gladys
If this parameter is not set Gladys check each 30 minutes by default


#### Install the hook on gladys

Nom : lgwebos 
Version : 0.0.3 
URL git : https://github.com/TanguyNa/gladys-lgwebos
slug : lgwebos


#### Restart Gladys

#### Train the Brain

In french language, sentences are :
- Eteins la télé
- Allume la télé
- Augmente le son de la télé
- Diminue le son de la télé
- Coupe le son de la télé
- Remet le son de la télé
- Mets la télé en pause
- Relance la lecture de la télé
- Retour rapide sur la télé
- Avance rapide sur la télé
- Lance l'application %app%*
For other language :
- Turn off TV
- Turn on TV
- Increase the sound of the TV
- Decrease the sound of the TV
- Mute TV
- Unmute TV
- Send pause to the TV
- Send play to the TV
- Send forward to the TV
- Send rewind to the TV
- Launch %app% application*

*For the moment, only Plex and Netflix are integrate

#### On the first use watch your tv screen to allow the hook to connect to it.


####

Links
-------------

- [Twitter](https://twitter.com/TanguyNa)
