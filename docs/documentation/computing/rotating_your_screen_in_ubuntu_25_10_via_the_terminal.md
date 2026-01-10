# Rotating Your Screen in Ubuntu 25.10 via the Terminal

_Written by [**Kaan Akşit**](https://kaanaksit.com), 10 January 2026_

**Disclamer:** This article is only tested under Ubuntu 25.10.

This tutorial guides you through rotating your screen using the terminal in Ubuntu 25.10. Modern Ubuntu systems have moved away from the traditional X Window System, making simple xrandr commands unreliable. This solution leverages `gnome-randr.py` to achieve the desired result.

## Understanding the Challenge:
Older methods for screen rotation using xrandr often don't work reliably in Ubuntu 25.10 due to the transition away from the X Window System. This tutorial provides a workaround for terminal-based rotation.

## Step 1: Installing Required Components
First, you need to install the necessary dependencies. Open a terminal (Ctrl+Alt+T) and execute the following commands:

```
sudo apt update  # Update package lists
sudo apt install dbus  # Install the D-Bus library
wget https://raw.githubusercontent.com/fraz0815/gnome-randr/refs/heads/master/gnome-randr.py  
```

### Download the gnome-randr.py script

```
sudo mv gnome-randr.py /usr/bin/gnome-randr  # Move the script to a standard executable directory
sudo chmod +x /usr/bin/gnome-randr  # Make the script executable
```

## Step 2: Creating an Installation Script (Optional, for Scalability)

For ease of deployment to multiple machines, you can create a script to automate the installation process.

Open a terminal (Ctrl+Alt+T) and use your preferred text editor. We'll use vim in this example:

    vim install_gnome_randr.sh

Paste the following lines into the install_gnome_randr.sh file:

```
sudo apt install dbus
wget https://raw.githubusercontent.com/fraz0815/gnome-randr/refs/heads/master/gnome-randr.py
sudo mv gnome-randr.py /usr/bin/gnome-randr
sudo chmod +x /usr/bin/gnome-randr
```

Save the file and exit the editor. Make the script executable and run it with root privileges:

```
chmod +x install_gnome_randr.sh
./install_gnome_randr.sh
```

## Step 3: Identifying Your Display Output
Once gnome-randr.py is installed, run the following command in your terminal:
```
gnome-randr
```

This will list the connected displays and their names (e.g., DP-0, HDMI-0, DP-2). Note the name of the display you want to rotate. This is crucial for the next step.

## Step 4: Rotating the Screen
Now that you know your display name, rotate the screen using the following command:
```
gnome-randr --output <DISPLAY_NAME> --rotate <ROTATION>
```
Replace <DISPLAY_NAME> with the name of your display (e.g., DP-0, HDMI-0) and <ROTATION> with one of the following values:

    normal: Returns to the normal orientation (0 degrees).
    left: Rotates 90 degrees clockwise.
    right: Rotates 90 degrees counter-clockwise.
    inverted: Rotates 180 degrees.

### Example:

To rotate display DP-0 90 degrees to the left:
```
gnome-randr --output DP-0 --rotate left
```

## Alternative:

If you prefer a graphical approach, simply point and click within the GNOME Settings application to configure your display settings.

**Importante Note:** This recipe is particularly useful when you need to perform this configuration on a large number of computers. You can deploy the installation script via SSH or other means to standardize the setup.

