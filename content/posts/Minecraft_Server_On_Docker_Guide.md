---
title: "Minecraft Server on Docker guide"
date: 2021-08-28T12:16:21-04:00
tags: ["Minecraft", "Not for Beginners", "Docker", "Misc"]
---
This guide NOT for beginners. You might need to read <a href="https://www.freecodecamp.org/news/docker-simplified-96639a35ff36/">freeCodeCamp.org's</a> Docker for dummies

## Step 1: Install Docker

This will depend on platform/os but most people (e.g running some form of linux on an x64 cpu) should be able to run the code below. (Note you do need to )

<code>
curl -fsSL https://get.docker.com -o get-docker.sh
<br>
&nbsp; sh get-docker.sh
</code>

## Step 2: Run hello-world on docker to see if Docker is functional

Now that we have Docker installed, we need to see if its functional so that it can succsessfully run our minecraft server. Execute

<code>
docker pull hello-world
docker run hello-world
</code>

It should print hello world with some additional content. Then execute

<code>
docker rm hello-world
</code>

## Step 3: Run the Minecraft Server

To run the minecraft server, execute

<code>
docker pull itzg/minecraft-server
docker run -d -v /path/on/host:/data \
    -e TYPE=PAPER \
    -p 25565:25565 -e EULA=TRUE --name mc itzg/minecraft-server
</code>

Your Minecraft server should be availible at the ip address of your Docker server
