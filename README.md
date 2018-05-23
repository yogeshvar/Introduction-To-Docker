# Introduction-To-Docker
Getting started with Docker; basic essentials things you need to know about docker: images,containers,volumes,creating docker image. And running an VM instance in GCloud.

# Introduction to Docker

**What is Docker?**
Ans: Docker is a software container platform.

**Docker Image?**
Ans: As easy to put it: Application software(Databases{mongo ,sql..} Python,Ruby,Nodejs,Angular...) or OS(Ubuntu,Windows...)  

**Docker Container?**
Ans: Containers are nothing but VM's but the difference why is it called Containers because they contains only application dependencies alone.
  
**Docker Volumes?**
Ans: The user data/application which you wanted to run in the docker environment.

### Getting Started 
 - [Install Docker](https://docs.docker.com/install/) 
 - [Create an VM-instance in GCloud.](https://codelabs.developers.google.com/codelabs/cloud-create-a-vm/index.html?index=..%2F..%2Fio2017#4)

**Why VM-instance?**
For the people who all are wondering why VM-instance? Because you can understand the use of remote management of your docker.

##### 1. Connect to VM-instance using SSH.

You can find the external ip in the GCloud Dashboard.

```sh
$ ssh username@externalip
```
##### 2. Use docker images
Use the docker images available.
```sh
$ docker run hello-world
```
if you want to replace it use --name tag
```sh
$ docker run --name yournewname hello-world
```
##### 3. Build docker Images
- create an file named DockerFile
- type the instructions or command
```sh
$ docker build yournewimagename . 
```
**NOTE**: The .(dot) is very important because the it is used to indicate the DockerFile is present.

### Basic Commands

| Commands |What's the meaning?|
| ------ | ------ |
| docker --version |to ensure docker is installed|
| docker ps -a | List all the docker containers active status  |
| docker rm | docker remove container/image |
| docker run |to run the container|
| docker build |build the image|

**Quick Tip**: Switch ON Preemptibility in GCloud; so that the price may reduce by 60%. Only if you are using GCloud for learning purpose.
