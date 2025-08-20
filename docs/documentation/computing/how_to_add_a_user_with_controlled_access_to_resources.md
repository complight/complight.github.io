# How to add a user with controlled access to resources

_Written by [**Kaan Akşit**](https://kaanaksit.com), 18 August 2025_

**Disclamer:** This article is only tested under Ubuntu 24.10.

We use Linux based servers on our computers dedicated to computational tasks. In a dynamic setting like our research laboratory, there are many students that join and leave the group as they complete their studies. The access to these computational resources is cruical for the students and they needed to be provided an isolated session, where they do not interfere with other users' resources. This guide delves into the user management of students in our servers.

## Setting important variables
There are two things important in this exercise as variables. These are the username and user directory location:

```bash
export USERNAMEGOESHERE="test"
export USERDIRECTORY="/YOURDIRECTORY/$USERNAMEGOESHERE"
```

## Creating a user
We can create a new user using the syntax below:

```bash
sudo adduser $USERNAMEGOESHERE
```

To see which groups this newly created user belongs to, we can use the following syntax at our command line:

```bash
group $USERNAMEGOESHERE
```

Some cases demand that the user is restricted in terms of access to certain resources. This could be established by considering various aspects, but one simple aspect is related to user rights. In other terms, it is important to carefully determine which user groups that the user belongs to. In order to add this new user to a specific group, we user the following syntax at our command line:

```bash
sudo usermod -aG GROUPNAME $USERNAMEGOESHERE
```

## Deleting or locking a user
As a student leaves or a certain resource has to be removed from a certain user, deleting or locking a user account becomes a topic to consider. Let's dive deep into how we can do that in these subsections.

### Deletion
The created user could be deleted at any time using the following commands:

```bash
sudo deluser $USERNAMEGOESHERE
```

In order to remove the home directory of the user, the following commands should be used instead:

```bash
sudo deluser --remove-home $USERNAMEGOESHERE
sudo rm -Rf $USERDIRECTORY
sudo rm -Rf /home/$USERNAMEGOESHERE
```


### Locking and unlocking
We can lock a user's password to prevent that user from authenticating. Therefore, the user will not be able to reach their account through graphical user interface or terminal or ssh. To lock a user, the following syntax must be used in a linux shell:

```bash
sudo passwd -l $USERNAMEGOESHERE
```

To unlock the user account at any given time, the following syntax must be used:

```bash
sudo passwd -u $USERNAMEGOESHERE
sudo usermod --expiredate "" $USERNAMEGOESHERE
```

## Restricting access to home directory only
By default, a new user can only access their own home directory and some system directories (like /tmp). To further restrict access, you can set their shell to a restricted shell or use chmod to limit directory permissions.

### Restricting a user's shelll

```bash
sudo usermod -s /bin/rbash $USERNAMEGOESHERE
```

Above commands will restrict the user to their home directory and prevent them from using cd to navigate outside of it. To remove this restriction:

```bash
sudo usermod -s /bin/bash $USERNAMEGOESHERE
```

### Creating a custom environment

Firstly, create directories for the user in their home directory:

```bash
sudo mkdir -p $USERDIRECTORY/$USERNAMEGOESHERE/{bin,lib,lib/python3,lib/python3/dist-packages/,lib/x86_64-linux-gnu,lib64,dev,etc,usr,usr/bin,usr/lib,usr/lib/python3.*,usr/lib/x86_64-linux-gnu,usr/local/cuda-12.8/targets/x86_64-linux/lib/stubs/,usr/lib/x86_64-linux-gnu/stubs,home,home/%USERNAME}
```

Collect information on required libraries for your shell:

```bash
ldd /bin/bash
```

At the time of this writing, I have identified the following:

```bash
sudo cp -v /lib/x86_64-linux-gnu/libc.so.6 $USERDIRECTORY/$USERNAMEGOESHERE/lib/x86_64-linux-gnu/
sudo cp -v /lib64/ld-linux-x86-64.so.2 $USERDIRECTORY/$USERNAMEGOESHERE/lib64/

sudo cp -v /usr/lib/x86_64-linux-gnu/libcuda.* $USERDIRECTORY/$USERNAMEGOESHERE/usr/lib/x86_64-linux-gnu/
sudo cp -v /usr/lib/x86_64-linux-gnu/libnvidia-* $USERDIRECTORY/$USERNAMEGOESHERE/usr/lib/x86_64-linux-gnu/
sudo cp -v /lib64/ld-linux-x86-64.so.2 $USERDIRECTORY/$USERNAMEGOESHERE/lib64/

sudo cp -v /usr/lib/x86_64-linux-gnu/{libc.so.6,libpcre2-8.so.0,libselinux.so.1,libtinfo.so.6,libnvidia-ml.so.1,libnvidia-ml.so.560.35.05,librt.so.1,libexpat.so.1,libz.so.1,libpthread.so.0,libdl.so.2,libnvidia-ml.so.1} $USERDIRECTORY/$USERNAMEGOESHERE/usr/lib/x86_64-linux-gnu

sudo cp -rv /usr/lib/python3.* $USERDIRECTORY/$USERNAMEGOESHERE/usr/lib/

sudo cp -v /usr/lib/x86_64-linux-gnu/stubs/libnvidia-ml.so $USERDIRECTORY/$USERNAMEGOESHERE/usr/lib/x86_64-linux-gnu/stubs/

sudo cp -Rv /usr/lib/python3.12 $USERDIRECTORY/$USERNAMEGOESHERE/usr/lib
sudo cp -Rv /usr/lib/python3 $USERDIRECTORY/$USERNAMEGOESHERE/usr/lib
sudo cp -rv /usr/lib/python3.* $USERDIRECTORY/$USERNAMEGOESHERE/usr/lib/

sudo cp -v /usr/local/cuda-12.8/targets/x86_64-linux/lib/stubs/libnvidia-ml.so $USERDIRECTORY/$USERNAMEGOESHERE/usr/local/cuda-12.8/targets/x86_64-linux/lib/stubs/
```

We also need the nodes:

```bash
sudo mknod -m 666 $USERDIRECTORY/$USERNAMEGOESHERE/dev/null c 1 3
sudo mknod -m 666 $USERDIRECTORY/$USERNAMEGOESHERE/dev/zero c 1 5
sudo mknod -m 666 $USERDIRECTORY/$USERNAMEGOESHERE/dev/random c 1 8
sudo mknod -m 666 $USERDIRECTORY/$USERNAMEGOESHERE/dev/urandom c 1 9

sudo cp -a /dev/nvidia* $USERDIRECTORY/$USERNAMEGOESHERE/dev/
```

Make sure that the user has the access to the right set of tools:

```bash
sudo cp -v /bin/{bash,rbash,nano,vim,ls,mv,clear_console,cp,python3,pip3,nvidia-smi} $USERDIRECTORY/$USERNAMEGOESHERE/bin

sudo cp -v /usr/bin/{pip3,pip,python3} $USERDIRECTORY/$USERNAMEGOESHERE/usr/bin
sudo cp -vf /etc/{passwd,group} $USERDIRECTORY/$USERNAMEGOESHERE/etc/

sudo grep root /etc/passwd | sudo tee $USERDIRECTORY/$USERNAMEGOESHERE/etc/passwd
sudo grep root /etc/group | sudo tee $USERDIRECTORY/$USERNAMEGOESHERE/etc/group
echo "$USERNAMEGOESHERE:x:$(id -u $USERNAMEGOESHERE):$(id -g $USERNAMEGOESHERE):User:$USERDIRECTORY/$USERNAMEGOESHERE:/bin/bash" | sudo tee -a $USERDIRECTORY/$USERNAMEGOESHERE/etc/passwd
```

Make sure that the rights are also correct for the user directories:

```bash
sudo chown -R $USERNAMEGOESHERE:$USERNAMEGOESHERE $USERDIRECTORY/$USERNAMEGOESHERE
sudo chmod 700 $USERDIRECTORY/$USERNAMEGOESHERE
sudo chmod 700 $USERDIRECTORY/$USERNAMEGOESHERE/.ssh
sudo chmod 600 $USERDIRECTORY/$USERNAMEGOESHERE/.ssh/authorized_keys
sudo chown root:root $USERDIRECTORY/$USERNAMEGOESHERE
sudo chmod 755 $USERDIRECTORY/$USERNAMEGOESHERE
```

Given your user will connect via ssh, you would also need to make sure that ssh is configured correctly, for that modify `/etc/ssh/sshd_config` file and append the following at the end of the file:

```
Match User $USERNAMEGOESHERE
    ChrootDirectory $USERDIRECTORY/$USERNAMEGOESHERE
    AllowTcpForwarding no
    X11Forwarding no
```

You may also want to make sure that this user is allowed or denied at any time by using the following lines in the `/etc/ssh/sshd_config`:

```
DenyUsers USER0 USER1
AllowUsers USER2, $USERNAMEGOESHERE
```

Once modified and saved, simply restart the SSH server:

```
sudo systemctl restart ssh
```

## An automated script to create a user
In the light of the above findings and exploration, I have created the following script to create users with GPU access on our computational resources:

```bash
#!/bin/bash

USERNAMEGOESHERE="test"
SYMDIRECTORY="/NAMEOFYOURDIRECTORY/$USERNAMEGOESHERE"

sudo adduser $USERNAMEGOESHERE
USERDIRECTORY="/home/$USERNAMEGOESHERE/"
sudo rm -Rf $USERDIRECTORY
sudo mkdir $SYMDIRECTORY
sudo ln -s $SYMDIRECTORY /home

SSH_KEY0="ssh-ed25519 YOURKEY0 COMPUTER0"
SSH_KEY1="ssh-ed25519 YOURKEY1 COMPUTER1"


sudo mkdir -p $USERDIRECTORY/{bin,lib,lib/python3,lib/python3/dist-packages/,lib/x86_64-linux-gnu,lib64,dev,etc,etc/ca-certificates,etc/default,etc/ssl,etc/ssl/certs,usr,usr/bin,usr/lib,usr/lib/locale,usr/lib/openssh,usr/lib/python3.*,usr/lib/x86_64-linux-gnu,usr/local/cuda-12.8/targets/x86_64-linux/lib/stubs/,usr/lib/x86_64-linux-gnu/stubs,usr/share/terminfo/x/,usr/share/ca-certificates,usr/sbin,tmp,sys,run,var,var/run}
sudo mkdir -p $USERDIRECTORY/home
sudo mkdir -p $USERDIRECTORY/home/$USERNAMEGOESHERE
sudo mkdir -p $USERDIRECTORY/home/$USERNAMEGOESHERE/.ssh

sudo cp -v /usr/sbin/update-ca-certificates $USERDIRECTORY/usr/sbin/
sudo cp -r /usr/share/ca-certificates/* $USERDIRECTORY/usr/share/ca-certificates
sudo cp -r /etc/ca-certificates/* $USERDIRECTORY/etc/ca-certificates/
sudo cp /etc/ssl/certs/ca-certificates.crt $USERDIRECTORY/etc/ssl/certs/

sudo cp -r /etc/ssl/certs/* $USERDIRECTORY/etc/ssl/certs/

sudo cp -v /usr/lib/locale/locale-archive $USERDIRECTORY/usr/lib/locale/locale-archive
sudo cp -v /etc/default/locale $USERDIRECTORY/etc/default/

sudo cp -v /lib/x86_64-linux-gnu/libc.so.6 $USERDIRECTORY/lib/x86_64-linux-gnu/
sudo cp -v /lib64/ld-linux-x86-64.so.2 $USERDIRECTORY/lib64/

sudo cp -v /usr/lib/x86_64-linux-gnu/libcuda.* $USERDIRECTORY/usr/lib/x86_64-linux-gnu/
sudo cp -v /usr/lib/x86_64-linux-gnu/libnvidia-* $USERDIRECTORY/usr/lib/x86_64-linux-gnu/
sudo cp -v /lib64/ld-linux-x86-64.so.2 $USERDIRECTORY/lib64/

sudo cp -v /usr/lib/x86_64-linux-gnu/{libm.so.6,libc.so.6,libpcre2-8.so.0,libselinux.so.1,libfuse3.so.3,libglib-2.0.so.0,libatomic.so.1,libtinfo.so.6,libnvidia-ml.so.1,libnvidia-ml.so.560.35.05,librt.so.1,libexpat.so.1,libz.so.1,libpthread.so.0,libdl.so.2,libnvidia-ml.so.1,libacl.so.1,libattr.so.1,libgpm.so.2,libpython3.12.so.1.0,libsodium.so.23,libncursesw.so.6,libsystemd.so.0,libutempter.so.0,libevent_core-2.1.so.7u,libresolv.so.2,libcap.so.2,libproc2.so.0,libpopt.so.0,libzstd.so.1,libxxhash.so.0,libcrypto.so.3,liblz4.so.1,libmount.so.1,libblkid.so.1,libuuid.so.1,libidn2.so.0,libssl.so.3,libpsl.so.5,libunistring.so.5,libsigsegv.so.2,libreadline.so.8,libmpfr.so.6,libgmp.so.10} $USERDIRECTORY/usr/lib/x86_64-linux-gnu

sudo cp -Rv /usr/share/terminfo $USERDIRECTORY/usr/share/terminfo
sudo cp -v /usr/share/terminfo/x/xterm-256color $USERDIRECTORY/usr/share/terminfo/x/

sudo cp -Rv /usr/lib/python3.* $USERDIRECTORY/usr/lib/
sudo cp -v /usr/lib/openssh/sftp-server $USERDIRECTORY/usr/lib/openssh

sudo cp -v /usr/lib/x86_64-linux-gnu/stubs/libnvidia-ml.so $USERDIRECTORY/usr/lib/x86_64-linux-gnu/stubs/

sudo cp -Rv /usr/lib/python3.12 $USERDIRECTORY/usr/lib
sudo cp -Rv /usr/lib/python3 $USERDIRECTORY/usr/lib
sudo cp -rv /usr/lib/python3.* $USERDIRECTORY/usr/lib/

sudo cp -v /usr/local/cuda-12.8/targets/x86_64-linux/lib/stubs/libnvidia-ml.so $USERDIRECTORY/usr/local/cuda-12.8/targets/x86_64-linux/lib/stubs/

sudo mount -t devtmpfs devtmpfs $USERDIRECTORY/dev
sudo mount -t devpts devpts $USERDIRECTORY/dev/pts
sudo mount -t proc proc $USERDIRECTORY/proc
sudo mount -t sysfs sysfs $USERDIRECTORY/sys

sudo mknod -m 666 $USERDIRECTORY/dev/null c 1 3
sudo mknod -m 666 $USERDIRECTORY/dev/zero c 1 5
sudo mknod -m 666 $USERDIRECTORY/dev/random c 1 8
sudo mknod -m 666 $USERDIRECTORY/dev/urandom c 1 9

sudo cp -a /dev/nvidia* $USERDIRECTORY/dev/

sudo cp -v /bin/{bash,rbash,ls,clear_console,du,ps,cp,python3,pip3,nvidia-smi,mv,vim,nano,rsync,mount,mkdir,grep,rm,cat,touch} $USERDIRECTORY/bin

sudo cp -v /usr/bin/{pip3,pip,python3,tmux,wget,dirname,basename,sh,uname,tr,tail,awk,df,sed,head,wc,md5sum,fusermount3,sftp} $USERDIRECTORY/usr/bin
sudo cp -vf /etc/{passwd,group} $USERDIRECTORY/etc/

sudo grep root /etc/passwd | sudo tee $USERDIRECTORY/etc/passwd
sudo grep root /etc/group | sudo tee $USERDIRECTORY/etc/group
echo "$USERNAMEGOESHERE:x:$(id -u $USERNAMEGOESHERE):$(id -g $USERNAMEGOESHERE):User:$USERDIRECTORY/$USERNAMEGOESHERE:/bin/bash" | sudo tee -a $USERDIRECTORY/etc/passwd

sudo cp -v /etc/mtab $USERDIRECTORY/etc

sudo chown -R $USERNAMEGOESHERE:$USERNAMEGOESHERE $USERDIRECTORY
sudo mkdir -p /home/$USERNAMEGOESHERE/.ssh
sudo touch /home/$USERNAMEGOESHERE/.ssh/authorized_keys
sudo echo "$SSH_KEY0" | sudo tee -a /home/$USERNAMEGOESHERE/.ssh/authorized_keys
sudo echo "$SSH_KEY1" | sudo tee -a /home/$USERNAMEGOESHERE/.ssh/authorized_keys

sudo chown -R $USERNAMEGOESHERE:$USERNAMEGOESHERE /home/$USERNAMEGOESHERE/
sudo chown root:root /home/$USERNAMEGOESHERE/
sudo chmod 700 /home/$USERNAMEGOESHERE/.ssh
sudo chmod 600 /home/$USERNAMEGOESHERE/.ssh/authorized_keys
sudo chmod 700 /home/$USERNAMEGOESHERE/
sudo chown -R $USERNAMEGOESHERE:$USERNAMEGOESHERE $USERDIRECTORY
sudo chmod 700 $USERDIRECTORY
sudo chmod 1777 $USERDIRECTORY/tmp
sudo chown root:root $USERDIRECTORY
sudo chmod 755 $USERDIRECTORY

sudo echo " " | sudo tee -a /etc/ssh/sshd_config
sudo echo "Match User $USERNAMEGOESHERE" | sudo tee -a /etc/ssh/sshd_config
sudo echo "    ChrootDirectory $USERDIRECTORY" | sudo tee -a /etc/ssh/sshd_config
sudo echo "    Subsystem   sftp    /usr/lib/openssh/sftp-server" | sudo tee -a /etc/ssh/sshd_config
sudo echo "    AllowTcpForwarding no" | sudo tee -a /etc/ssh/sshd_config
sudo echo "    X11Forwarding no" | sudo tee -a /etc/ssh/sshd_config
sudo service ssh restart
```


You may also need to have a separate script to mount required folders at each reboot for a complete setup:

```bash
#!/bin/bash

USERDIRECTORY="/users/chroot/directory/goes/here"
sudo mount -t devtmpfs devtmpfs $USERDIRECTORY/dev
sudo mount -t devpts devpts $USERDIRECTORY/dev/pts
sudo mount -t proc proc $USERDIRECTORY/proc
sudo mount -t sysfs sysfs $USERDIRECTORY/sys
```

You can run the above setup at each boot using `crontab`.
