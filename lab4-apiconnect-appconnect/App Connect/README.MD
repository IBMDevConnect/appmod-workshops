# APP-Connect-handson

## Overview

In this lab, you will create a simple application flow using IBM App Connect. You will create a basic application flow for both event driven flows and flows for API.

## [Steps to register for IBM Cloud](https://github.com/rachana5198/APP-Connect-handson#steps-to-register-for-ibm-cloud)

Go to [IBM Cloud](https://cloud.ibm.com/login)
If you are an existing user, login using your credentials. If you are new user, register for IBM cloud and login.
![](img/cloudlogin.png)

## [Setup an APP Connect service](https://github.com/rachana5198/APP-Connect-handson#setup-an-app-connect-service)
1. Let's go to [IBM Cloud Catalog](https://cloud.ibm.com/catalog) and search for App Connect.

![](img/catalogsearch.png)

2. Click on the service App Connect to instantiate it on IBM cloud.

3. Click on ```create```

![](img/instancecreation.png)

4. Launch the service by clicking ```Launch App Connect```

![](img/launch.png)

## [Creating event driven flows](https://github.com/rachana5198/APP-Connect-handson#creating-event-driven-flows)

1. After launching the dashboard, click on New. (Rename your flow, if needed)
To create a new event driven flow, ```New -> Event-driven flow```

![](img/newflow.png)

2. To add applications to your flow, Click on '+' and select applications that you want to add to your flow. Here, we are creating a simple flow to send emails at some interval of time.

![](img/picture7.png)

3. To be able to schedule events, there is a tool called scheduler in the toolbox. To add this to your flow, ```+ -> Toolbox -> Scheduler```

![](img/scheduler.png)

4. Configure the scheduler component according to your preferences. Here I am creating a flow that sends slack message for every one minute.

![](img/plus.png)

5. To add the next node to the flow, click on '+'. Here, we are adding email component so that we will be able to send message at scheduled time. To do this, ```+ -> Applications -> Slack -> Create message```

![](img/slack.png)

6. Connect the account using which you want to automate this task(preferably your gmail account).
To connect your account, ```Click on Slack node -> Connect```. This will redirect you to gmail login page, finish the login and permissions and refresh the IBM App connect page, then you should be able to see your account in the drop down.

![](img/connect.png)

7. Configure the slack node with your workspace url. If you don't have a [Slack workspace](https://slack.com/create), create a workspace for testing purposes.

![](img/slack1.png)

  Click allow

![](img/slackallow.png)

  Enter details in the slack nodes

![](img/configure.png)

8. To start the flow, click start from the right corner of the screen.

![](img/starteflow.png)

9. Once the flow starts and the dashboard shows the status 'Running' that means the event flow has started. To cross check, go to your Slack and see if there is a new message.

![](img/outputeflow.png)

This is how event driven flows work, scroll down to see some sample flows in Sample flows section.

## [Creating flows for API](https://github.com/rachana5198/APP-Connect-handson#creating-flows-for-api)

1. To create flows for API, launch the App Connect dashboard and click on new then select flows for API. ``` Launch dashboard -> New -> Flows for API ```

![](img/newaflow.png)

2. On creating, it will take you to the service page. Rename the flow(if needed). Give a name to the flow and click on Create model. ```Enter a model name -> create model```

![](img/mname.png)

3. Add the properties that you want to add to the model that you are creating. Here, I am creating a simple flow that sends emails on sending a API request.

![](img/props.png)

4. After defining the properties, operations have to be added. Click on operations and select the operation that you want to perform. Here, I am selecting Create demo as operation. ``` Operations -> (scroll down) Create Demo```

![](img/operations.png)

5. Wait for the model to load and then start adding nodes to your flow. I have added a POST method which automatically generated Request and Response nodes. Make sure that the request node has sample data configured in it which is auto-generated. Refresh the page if you are not able to see the changes. Click on `Implement Flow`.

![](img/implementflow.png)

6. To add nodes to your flow, click on '+' which is in between request and response nodes. Then, add nodes to your flow. Here, I am adding a Slack node to the flow. ``` + -> Applications -> Slack -> Create message ```

![](img/plusslack.png)

7. Configure the slack node. If it's not connected, click on connect and give access to your account/default account that you want to set up. Check if your node is connected to your account. Refresh the page to see changes and make sure you see your account details when you click on the node.
You can auto match the node fields or add them manually. Here, I am adding auto matched fields which are the node properties that we have added to the flow in the beginning.

![](img/slackconfigure.png)

8. Now configure the response node as well. We can either auto match the node details or give them manually. Here we have given them manually, based on requirement we can auto-match.

![](img/response.png)

9. Once when all the nodes of the flow are configured, click ```Done``` on the right corner of the screen. This will take you to the previous screen and you can see properties and operations on the screen.

![](img/response.png)

10. Now that the flow creation is done, we have to create an API to call the flow. To do this go to manage section of the dashboard.

![](img/picture24.png)

11. ``` Manage -> Scroll```

![](img/manage.png)

12. On the end of screen, click on create API under Sharing outside of cloud foundry organization. ```Manage -> Sharing Outside Cloud Foundry organization -> Create API```

![](img/scroll.png)

13. Give the details required for API creation in the pop-up generated on clicking Create API. ```Create API -> Fill details -> Done```

![](img/createapi.png)

14. Refresh the page. Start the flow by clicking Start from right corner of the screen.```Manage -> Start API``` and then click on the API link from ```Manage -> Sharing Outside Cloud Foundry organization -> Click API link```. This will redirect you to the API page.

![](img/link.png)

15. Click on ```Try it``` from the right corner which will generate automatic data.

![](img/tryit.png)

16. To test the API call, click on ```Call Operation```.

![](img/calloperation.png)

17. To check if the API is working, go to the Slack channel that you have set in the configuration flow. It will look something like this:

![](img/aoutput.png)

Congratulations, You have completed the lab. You have learnt <to be filled by Rachana>

You can try out the below **Next steps** to explore further on App Connect.

# Next Steps

## [Integration servers with APP connect](https://github.com/rachana5198/APP-Connect-handson#integration-servers-with-app-connect)

1. Click New > Import a BAR file.

![](img/is1.png)

2. Either click the “Import a BAR file” dialog box to select a BAR file from your file system, or drag a BAR file from your file system to the dialog box.

![](img/is2.png)

3. Click Import. An integration server is created, and a tile is added to the dashboard to represent it. Initially, you’ll see the status as “Preparing”, which means that the contents of the BAR file are being unpacked onto the integration server. When preparation has finished, the status will show as “Stopped”, indicating that the integration server is ready to be configured and started. If you see a message saying that preparation failed, click Try again in the message to start preparation again. You can see a summary of the contents of the integration server by clicking the arrow. The arrow icon that allows you to see a summary of the contents of an integration server on the tile.

4. Open the integration server by clicking the tile, or expanding the tile menu (⋮) and then clicking Open.

5. Configure the integration server and start it.

6. When you’ve completed configuration, return to the App Connect on IBM Cloud dashboard and start the integration server by opening the tile menu and then clicking Start.

![](img/startis.png)

7. You can also use the tile menu to delete or update the BAR file. The “update” option allows you to upload a new version of a BAR file. On clicking the integration server that you have uploaded, it looks something like this:

![](img/viewlogs.png)

8. When your integration server is running, you can view logs by opening the integration server and then clicking View logs. ```Server page -> View logs```

![](img/viewlogs.png)

![](img/isoutput.png)

## [Import and export flows](https://github.com/rachana5198/APP-Connect-handson#import-and-export-flows)

#### EXPORT FLOWS

1. To export a flow, go to App Connect dashboard and click on the flow that you want to export. On clicking, select the option export flow. ```App Connect Dashboard -> Flow -> Export Flow```

![](img/ef1.png)

2. Once you click on that, a yaml file is downloaded with the flow name. In this case, it is ```simple-scheduler.yaml```

![](img/exportflow.png)

#### IMPORT FLOWS

1. To import a flow, click on New from the right corner of App Connect Dashboard and select import flow. ```App Connect Dashboard -> New -> Import flow```

![](img/if1.png)

2. Drag and drop the .yaml file of the flow that you want to import onto the dashboard of App Connect. ```drag and drop simple-scheduler.yaml -> Import flow```

![](img/if2.png)

3. On finishing the import, you will be able to see a new flow on your App Connect dashboard. Start it to run the flow.

![](img/final.png)


### [Sample flows](https://github.com/rachana5198/APP-Connect-handson#sample-flows)

1. Use the For Each node and JSONata to process high-priority issues.
![](img/sf1.png)
2. Create new leads in ```Marketo``` by capturing lead names and details in ```Slack```
![](img/sf2.png)
3. For large ```Salesforce``` opportunities, send an email and create an ```Asana``` task
![](img/sf3.png)
4. At regular intervals, extract ```Salesforce lead details``` and upload ```Box files``` with CSV output.
![](img/sf4.png)
5. Create ```NetSuite ERP``` and Stripe products from ```Asana tasks``` to launch a ```Salesforce Pardot campaign```.
![](img/sf5.png)
6. Build an API to create or update leads in ```Salesforce``` based on a ```Google Sheets spreadsheet```.
![](img/sf6.png)