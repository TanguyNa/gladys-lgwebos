lgwebos hook for gladysproject
=======================


What is Gladys project
-------------

**Website :** [https://gladysproject.com](http://gladysproject.com) <br>
**Community :** [https://community.gladysproject.com/](https://community.gladysproject.com/)


The Hook
-------------

This hook add the possibility to Gladys to shutdown, turnon, change volume of a Lg TV under WebOS 3.

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


#### Add sentences to the database

```
mysql -uroot -proot
```

```
use gladys;
```

```
insert into sentence(text, label, service, language, status) values('Gladys éteins la télé', 'tv-off', 'lgwebos', 'fr', 'approved');
insert into sentence(text, label, service, language, status) values('Gladys allume la télé', 'tv-on', 'lgwebos', 'fr', 'approved');
insert into sentence(text, label, service, language, status) values('Gladys augmente le son de la télé', 'tv-up', 'lgwebos', 'fr', 'approved');
insert into sentence(text, label, service, language, status) values('Gladys diminue le son de la télé', 'tv-down', 'lgwebos', 'fr', 'approved');
```

#### Install the hook on gladys

Nom : lgwebos 
Version : 0.0.1 
URL git : https://github.com/TanguyNa/gladys-lgwebos
slug : lgwebos


#### Restart Gladys

#### Train the Brain

#### On the first use watch your tv screen to allow the hook to connect to it.


####

Links
-------------

- [Twitter](https://twitter.com/TanguyNa)
