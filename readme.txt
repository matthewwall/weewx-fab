This is the skin fab for the weewx weather system.
Copyright 2017-2019 Matthew Wall

Installation instructions:

1) run the installer:

wee_extension --install weewx-fab.tgz

2) restart weewx:

sudo /etc/init.d/weewx stop
sudo /etc/init.d/weewx start

3) look at the result in the 'fab' subdirectory, nominally

public_html/fab


Configuration options:

This skin uses output from the forecast extension.  In particular, the
forecast variables search list extension must be enabled in the generator
like this in skin.conf:

[CheetahGenerator]
    search_list_extensions = user.forecast.ForecastVariables
