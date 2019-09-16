# Running Your First Container

In this lab, you will run your first Docker container!

Containers are just a process (or a group of processes) running in isolation. Isolation is achieved via linux namespaces and control groups. One thing to note, is that linux namespaces and control groups are features that are built into the linux kernel! Other than the linux kernel itself, there is nothing special about containers.

What makes containers useful is the tooling that surrounds it. For these labs, we will be using Docker, which has been the de facto standard tool for using containers to build applications. Docker provides developers and operators with a friendly interface to build, ship and run containers on any environment.

The first part of this lab, we will run our first container, and learn how to inspect it. We will be able to witness the namespace isolation that we acquire from the linux kernel.

## Pre-requisites:

1. Install Docker

  1.1 [Docker for Windows](https://docs.docker.com/v17.09/docker-for-windows/install/)
  
  1.2 [Docker for Mac](https://docs.docker.com/v17.09/docker-for-mac/install/)
  

## **Optional:** Use play-with-docker
If you don't want to install Docker, an alternative is to use [Play-With-Docker](http://play-with-docker.com). Play-With-Docker is a website where you can run terminals directly from your browser that have Docker installed. All of the labs for this course can be run on Play-With-Docker, though we recommend installing docker locally on your host, so that you can continue your docker journey when this course has completed. To use Play-With-Docker, navigate to http://play-with-docker.com in your browser.

## Steps:

We will start a container using verified images from the Docker Store: nginx web server.

1. Run an Nginx server

Let's run a container using the [official Nginx image](https://store.docker.com/images/nginx) from the Docker Store.

```sh
$ docker container run --detach --publish 8080:80 --name nginx nginx
Unable to find image 'nginx:latest' locally
latest: Pulling from library/nginx
36a46ebd5019: Pull complete 
57168433389f: Pull complete 
332ec8285c50: Pull complete 
Digest: sha256:c15f1fb8fd55c60c72f940a76da76a5fccce2fefa0dd9b17967b9e40b0355316
Status: Downloaded newer image for nginx:latest
5e1bf0e6b926bd73a66f98b3cbe23d04189c16a43d55dd46b8486359f6fdf048
```

We are using a couple of new flags here. The `--detach` flag will run this container in the background. The `publish` flag publishes port 80 in the container (the default port for nginx), via port 8080 on our host. Remember that the NET namespace gives processes of the container their own network stack. The `--publish` flag is a feature that allows us to expose networking through the container onto the host. 

How do you know port 80 is the default port for nginx? Because it is listed in the [documentation](https://store.docker.com/images/nginx) on the Docker Store. In general, the documentation for the verified images is very good, and you will want to refer to them when running containers using those images. 

We are also specifying the `--name` flag, which names the container. Every container has a name, if you don't specify one, Docker will randomly assign one for you. Specifying your own name makes it easier to run subsequent commands on your container since you can reference the name instead of the id of the container. For example: `docker container inspect nginx` instead of `docker container inspect 5e1`.

Since this is the first time you are running the nginx container, it will pull down the nginx image from the Docker Store. Subsequent containers created from the Nginx image will use the existing image located on your host.

Nginx is a lightweight web server. You can access it on port 8080 on your localhost.

2. Check your running containers with `docker container ls`

```sh
$ docker container ls
CONTAINER ID        IMAGE               COMMAND                  CREATED                  STATUS              PORTS                     NAMES
d6777df89fea        nginx               "nginx -g 'daemon ..."   Less than a second ago   Up 2 seconds        0.0.0.0:8080->80/tcp      nginx
```


3. Access the nginx server on http://localhost:8080. If you are using play-with-docker, look for the `8080` link near the top of the page.


Congratulations, you should now see your Nginx web server container running on your host!
