# How to copy or restore tmux settings

_Written by [**Kaan Akşit**](https://kaanaksit.com), 7 March 2025_

**Disclamer:** This article is only tested under Ubuntu 24.10.

`tmux` is a powerful terminal tool for keeping tabs in your terminal alive. Their source code and documentation is readily available in their [codebase](https://github.com/tmux/tmux). This document can help a person willing to restore or copy for various reasons (e.g., broken installation, cloning settings to a new computer or alike).

## Harvesting settings
In order to harvest settings from a computer that has `tmux` installed, please first start a `tmux` session by simply typing in your terminal:

```bash
tmux
```

As the new session start, you can copy the existing settings from that session to a file located in  `~/.tmux.conf` using the following syntax:
 
```bash
tmux show -g | sed 's/^/set -g /' > ~/.tmux.conf
```

Once complete, you can type `exit` in the same session you created to exit the session and copy `~/.tmux.conf` any location or computer you desire.

## Feeding settings to a computer
Assuming that you have copied the settings harvested from another computer to another and the settings file is now located at `~/.tmux.conf` on that new computer, first start a new session using `tmux` syntax in your terminal. Now you can simply pass the following syntax to load the settings file:

```bash
tmux source-file ~/.tmux.conf
```

This will load the configuration file for your  `tmux`.
