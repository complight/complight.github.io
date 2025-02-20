# Creating a virtual environment for Python development

**Author:** [Kaan Akşit](https://kaanaksit.com)

**Date:** 20 February 2025

**Disclamer: This article is only tested under Ubuntu 24.10.**

Development often requires installing custom components in a system. It is helpful to consider having a virtual environment, which you can also carry over to the other computers as needed. To create your own virtual environment, please use the following syntax in your favorite terminal program:

```bash
python3 -m venv PATH
```

Here, `PATH` should be replaced with the directory location where you want to install your virtual envorinment. Once you created your virtual environment, you can activate the environment by typing the following syntax in your terminal:

```bash
source PATH/bin/activate
```

If you need this working envorinment to be default, you can add the above line at the end of your  `~/bash.rc` in your home directory. This way, it will automatically be activated when you start a new terminal session. Given you have successfully created your virtual environment, you can now install packages using `pip3` without breaking the system packages:

```
pip3 install PACKAGE
```

where, `PACKAGE` is the name of the package you want to install.
