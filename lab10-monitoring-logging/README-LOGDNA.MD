# Log Analysis with LogDNA

IBM® Log Analysis with LogDNA is a service that you can include as part of your IBM Cloud architecture to add log management capabilities. IBM Log Analysis with LogDNA is operated by LogDNA in partnership with IBM.

You can use IBM Log Analysis with LogDNA to manage system and application logs in the IBM Cloud.IBM Log Analysis with LogDNA offers administrators, DevOps teams, and developers advanced features to filter, search, and tail log data, define alerts, and design custom views to monitor application and system logs.

## Pre-requisites

1. IBM Cloud Account

2. Kubernetes Cluster

## Steps

1. Provide required access to user

	a. Go to Manage->Access(IAM)
    
	b. select Users from left side menu
    
	c. select your user name 
    
	d. Click on Access policies
    
	e. Click on `Assign Access` and select `Assign Access within a resource group`
    
	f. Select `default` as Resource Group and provide `Viewer` Access. Services let it be default and click assign
    
	g. Click on `Access policies` again
    
	h. Click on `Assign Access` and select `Assign Access to resource` 
    
	i. Select `Kubernetes Cluster` as service , Select `All Region` in Regions and `All Instance`  in Cluster
    
	j. Provide `Editor and Administrator` role and click assign
    
	k. Click on`Access policies` again
    
	l. Click on `Assign Access` and select `Assign Access to resource `
    
	m. Select `IBM Log Analysis with logDNA`  service for All Regions , All Instance 
    
	n. Provide `Editor , Viewer and Manager` roles and click `Assign Service`
    
2. Create a logDNA service

	a. Go to Navigation Menu on Left and select Observability
    
	b. Select Logging and click on Create Logging instance
    
	c. Choose location same as your cluster location and resource group as default
    
	d. Use Lite plan and click on Create. You will see service created
    
3. Get ingestion key to be used by agent

	a. click on `View LogDNA`, to open LogDNA Dashboard, click on `settings ->Oraganisation->APIkeys` and copy the Ingestion key present there

4. Configure Kubernetes cluster to send logs 

	a. Go to Dashboard->Cluster->Mycluster
    
	b. open web terminal(beta)
    
	c. execute  `kubectl create secret generic logdna-agent-key --from-literal=logdna-agent-key=replace_with_logDNA_ingestion_key_copied_at_step_3a`
    
	d. execute `kubectl create -f https://assets.us-south.logging.cloud.ibm.com/clients/logdna-agent-ds.yaml`
    
	e. execute `kubectl get pods`

5. Launch LogDNA Dashboard

	a. Go to Navigation Menu->Observability->Logging
    
	b. Click on View LogDNA to launch the dashboard
    
Congratulations, you have completed the lab! You have learnt how to stream logs with LogDNA from the IBM Cloud Kubernetes Cluster.