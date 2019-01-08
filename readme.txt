This is the skin fab for the weewx weather system.
Copyright 2017-2019 Matthew Wall

Installation instructions:

1) download the skin:

wget -O weewx-fab.zip https://github.com/matthewwall/weewx-fab/archive/master.zip

2) run the installer:

wee_extension --install weewx-fab.zip

3) restart weewx:

sudo /etc/init.d/weewx stop
sudo /etc/init.d/weewx start

4) look at the result in the 'fab' subdirectory, nominally

public_html/fab


Configuration options:

This skin uses output from the forecast extension.  In particular, the
forecast variables search list extension must be enabled in the generator
like this in skin.conf:

[CheetahGenerator]
    search_list_extensions = user.forecast.ForecastVariables

Instructions for installing and using the forecast extension:

    https://github.com/weewx/weewx/wiki/forecasting
