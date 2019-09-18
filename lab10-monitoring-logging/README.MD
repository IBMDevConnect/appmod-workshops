# Monitoring of Kubernetes using Sysdig Dashboard. 

IBM® Cloud Monitoring with Sysdig is a cloud-native, and container-intelligence management system that you can include as part of your IBM Cloud architecture. Use it to gain operational visibility into the performance and health of your applications, services, and platforms. It offers administrators, DevOps teams, and developers full stack telemetry with advanced features to monitor and troubleshoot, define alerts, and design custom dashboards. IBM Cloud Monitoring with Sysdig is operated by Sysdig in partnership with IBM.

## Prerequisites

1. IBM Cloud login

2. Kubernetes Cluster

## Steps:

1. Login to IBM Cloud

2. Provide access to your user for sysdig monitoring 

    1.From the menu bar, click Manage > Access (IAM).

    2. Create an access group: sysdig-admins

	   2.1. Select Access Groups.
    
	   2.2. Click Create.
    
	   2.3 Enter the name of the access group: sysdig-admins.
    
	   2.4 [Optional] Enter a description.
    
	   2.5 Click create.
    
	   2.6 Click Add User.
    
	   2.7 Select the your user and click on add to group.

3. Add access policy to the user, which is going to use Sysdig for monitoring

	3.1. In Access IAM , go to user , and select your user 
    
	3.2. Click Access Policies tab
    
	3.3. Click Assign Access.
    
	3.4. Select `Assign Access within a Resource Group`.
    
  	3.5. Select the name of the resource group. Choose `Default`.
    
    `Note: You can use any other resource group where you have permissions in the account.`
    
	3.6. Select the role. Choose Administrator.
    
	3.7. Click Assign

	3.8 Add another access policy by clicking `Assign Access`
    
	3.9 Select `Assign Access to Resources`
    
	3.10 Select `IBM Cloud Monitoring with Sysdig`
    
	3.11 Select `All instance` in Service Instance
    
	3.12 Provide `Administrator` access and click `save`

4. Add Sysdig monitoring Instance 

	4.1. from IBM Cloud Navigation menu (Hamburger menu), go to [Observability](https://cloud.ibm.com/observe)
    
	4.2. Click on `Monitoring`
    
	4.3. Click on `Create a Monitoring instance`
    
	4.4. Provide a service name 
    
	4.5. Please make sure the region is same as your Kubernetes cluster region
    
	4.6. Select Trial version and Click create

5. Create a key in Sysdig monitoring instance and get command to run agent:

	5.1 click on 3 dots at right hand side of monitoring instance created and select on add key.
    
	5.2 click on edit sources and copy the command availabe at step 2 in notepad for later steps.

6. Login to IBM Cloud to install sysdig agent

	6.1. Open [https://katacoda.com/embed/terminal](https://katacoda.com/embed/terminal) 
    
	6.2 execute following command on terminal 
    
	   `curl -sL https://ibm.biz/idt-installer | bash`
       
	6.3 Go to dashboard ->cluster->mycluster(clustername)
    
	6.4 Click on mycluster(clustername)
    
	6.5 From the access tabs execute the command specified in Kataconda terminal
    
		```
        ibmcloud login -a cloud.ibm.com -r us-south -g default (change the region based on the cluster region)
        
		ibmcloud ks cluster config --cluster replace_with_your_cluster_name
        
		(below command will come as output of executing above command)
        
        export KUBECONFIG=%HOMEPATH%\.bluemix\plugins\container-service\clusters\blqt6b8d062qlkfhap0g\kube-config-hou02-mycluster.yml
		
        Copy paste the command to your prompt and execute it.
		```
        
	6.6. Execute command `ibmcloud target --cf` to select space
    
	6.7 execute the command copied at step 5.2 
    
	6.8 verify `kubectl --namespace=ibm-observe get pods` to view the pods
    
7. View Sysdig dashboard

	7.1 Go to Navigation menu->Observability > Monitoring.
    
	7.2 Click View Sysdig
    
	7.3 Click Next and select `Kubernetes|GKE|Openshift` option, Copy the 

	7.4 Once node is connected ,click on go to next step(visible in the same window)
    
Congratulations, you have completed the lab. In this lab, you have learned how to get deep container visibility, service-oriented views and comprehensive metrics.