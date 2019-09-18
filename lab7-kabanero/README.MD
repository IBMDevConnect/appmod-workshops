# Cloud Native Development Workshop

We will be using Appsody from Kabanero Project for this hands on.

## 1. Sign up on Docker
https://hub.docker.com/

## 2. Get the environment

https://www.katacoda.com/courses/ubuntu/playground1804

Sign in using your gmail id.


## 3. Check the OS

```
$ cat /etc/os-release
```

output should be

```
NAME="Ubuntu"
VERSION="18.04.2 LTS (Bionic Beaver)"
ID=ubuntu
ID_LIKE=debian
PRETTY_NAME="Ubuntu 18.04.2 LTS"
VERSION_ID="18.04"
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
VERSION_CODENAME=bionic
UBUNTU_CODENAME=bionic
```


## 4. Install Appsody

Get installable
```
$ wget https://github.com/appsody/appsody/releases/download/0.2.8/appsody_0.2.8_amd64.deb
```

Install Appsody
```
$ sudo apt install ./appsody_0.2.8_amd64.deb

```	

## 5. Login to IBM Cloud CLI

https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started

## 6. Connect to your Kubernetes cluster created on IBM Cloud.

Login to IBM Cloud UI. 
From the Dashboard, click on the Kubernetes cluster. Click on Connect via CLI. 
Follow the instructions in the pop up window.

## 7. Login to docker with your username/password. Sign up if you are a new user.

```
$ docker login
```

## 8. Create Projects Appsody


First, choose a development stack. To see all the available stacks, run:

```
$ appsody list

```

Create a new directory for your project and run appsody init <stack> to download the template project. 

The following example uses the nodejs-express stack to create a fully functional Appsody project:

```
$ mkdir illustration
$ cd illustration
$ appsody init nodejs-express
```

Build the container, push the image to docker hub and deploy the development container on to the Kubernetes cluster:

```
$ appsody deploy --tag <dockerhub-space>/<app-name>:<version> --push

```
In this case: 

```
$ appsody deploy --tag <mydocker-username>/illustration:1 --push
```

Output:
              :
              :
Attempting to get resource from Kubernetes ...
Running command: kubectl[get svc sampleapp -o jsonpath=http://{.status.loadBalancer.ingress[0].hostname}:{.spec.ports[0].nodePort} --namespace default]
Deployed project running at http://:31649

Note the port number that the project is deployed on. 

Fetch the external IP of your cluster with the command: 
```
$ <fetch command for external id>
```

## 9. Check your application is running

Open your web browser with http://<external-ip-cluster>:<port-no>

OR

Open New terminal
```
$ curl http://<external-ip-cluster>:<port-no>
```

You should see output as
```
"Hello from Appsody!"
```

## 10. Change the code

Now let's try changing the code. Edit the file app.js to output something other than "Hello from Appsody!". 

Save the file, and re-deploy with a new version tag:

```
$ appsody deploy --tag <dockerhub-space>/<app-name>:<version> --push

```

Run

```
$ curl http://<external-ip-cluster>:<port-no> to see the new message!
```
OR 

Open your web browser with http://<external-ip-cluster>:<port-no> to see the new message!


When you're all done, you can stop the environment.

