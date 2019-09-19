# Cloud Native Development Workshop

We will be using Appsody from Kabanero Project for this hands on.

### 1. Sign up on Docker
https://hub.docker.com/

### 2. Get the environment

https://www.katacoda.com/courses/ubuntu/playground1804

Sign in using your gmail id.


### 3. Check the OS

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


### 4. Install Appsody

Get installable

```
$ wget https://github.com/appsody/appsody/releases/download/0.2.8/appsody_0.2.8_amd64.deb
$ sudo apt install ./appsody_0.2.8_amd64.deb
```	


### 5. Login to IBM Cloud CLI

For Mac or Linux:

-> To install latest version of the IBM Cloud CLI, run the command:

`$ curl -sL https://ibm.biz/idt-installer | bash `

-> To verify that the CLI and Developer tools were installed successfully, run the help command:

`$ ibmcloud dev help` 

Output lists the usage instructions, the current version, and the supported commands.

-> Now configure your environment, log in to IBM Cloud with your IBMid. 

   `$ ibmcloud login`

-> To access Cloud Foundry services, you must specify a Cloud Foundry org and space. You can run the following command to interactively identify the org and space:

   `$ ibmcloud target --cf`

   Or, if you know which org and space that the service belongs to, you can use the following command:
   
   `$ ibmcloud target -o <value> -s <value>`

The above commands are also available in the web page: 
https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started

### 6. Connect to your Kubernetes cluster created on IBM Cloud.

Go to browser and login to IBM Cloud UI. 

https://cloud.ibm.com/login

From the Dashboard, click on the Kubernetes cluster. 
![GitHub Logo](/images/cluster.png)

Click on Connect via CLI. 
![GitHub Logo](/images/connectcli.png)

A pop-up window will appear.
![GitHub Logo](/images/popup.png)

Execute the commands from your pop-up window on the command prompt.

### 7. Create Projects Appsody

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

### 8. Start the development container:

``` $ appsody run ```

### 9. Check your application is running

Now the project is running in a docker container, and the container is linked to the project source code on your local system.
Great! 

Open New terminal
```
$ curl http://localhost:3000
```
OR open in browser: http://localhost:3000

You should see out put as
```
"Hello from Appsody!"
```

### 10. Change the code

Now let's try changing the code. Edit the file app.js to output something other than "Hello from Appsody!". 

When you save the file, Appsody picks up the change and automatically updates the container. 

Run

```
$ curl http://localhost:3000 
```
OR open in browser: http://localhost:3000 to see the new message!

### 11. Now, let's tag and push the container onto docker hub and deploy the image to your IBM Kubernetes cluster.

In the command prompt, login to docker with your username/password. Sign up if you are a new user.

```
$ docker login
```
-> Build the container

``` 
$ appsody build 
```

-> Tag and push the image to docker hub

```
$ docker tag <my-project> <docker_user>/<my-project> 
$ docker push <docker_user>/<my-project> 
```

-> Deploy. 

``` $ appsody deploy ```


One step command to build, tag, push and deploy the development container on to the Kubernetes cluster:

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

### 12. Check your application is running

Open your web browser with http://[external-ip-cluster]:[port-no]

OR

Open New terminal
```
$ curl http://[external-ip-cluster]:[port-no]
```

You should see output as
```
"Hello from Appsody!"
```


When you're all done, you can stop the environment.

