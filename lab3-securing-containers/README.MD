# Secure your container images with Vulnerability Advisor

Vulnerability Advisor checks the security status of container images that are provided by IBM®, third parties, or added to your organization's registry namespace.When you add an image to a namespace, the image is automatically scanned by Vulnerability Advisor to detect security issues and potential vulnerabilities. If security issues are found, instructions are provided to help fix the reported vulnerability.

In this lab, you will learn how to secure your images and fix the vulnerabilites using Vulnerability Advisor.

## Pre-requisites

1. IBM Cloud Account

## Steps

<p align="center">
    <a href="https://cloud.ibm.com/developer/appservice/create-app?starterKit=ab2263e9-c787-32e6-a9d7-298c20557bbb">
    <img src="https://cloud.ibm.com/devops/setup/deploy/button_x2.png" alt="Deploy to IBM Cloud">
    </a>
</p>

Use the button above to deploy this same application to IBM Cloud. This option will create a deployment pipeline, complete with a hosted Git lab project and DevOps toolchain. You will have the option of deploying to either Cloud Foundry or a Kubernetes cluster.

Step 1: Click on `Create` button to create the app

Step 2: In the redirected page, Click on `Configure Continuous Delivery`.Enable continuous delivery to automate builds, tests, and deployments through Delivery Pipeline, GitLab, and more.

Step 3: In the popup, Select `Deploy to IBM Kubernetes Service` and select the region where cluster is deployed and select the cluster. Click `Next`

Step 4: In next step, Select the region in which cluster has been deployed and click on `Create`.

Step 5: A toolchain have been created now with the starter application. Click on `View toolchain`. This will redirect you to Toolchain page.

### Security using Vulnerability Advisor

1. Click the Delivery Pipeline tile within the toolchain.

2.  Follow the steps shown in below video:

![Video](/img/video_1.gif)

**Please note: Container Registry namespace should be same as the one mentioned in Build Stage of this toolchain.**

You will see that Validate stage fails.

### Let’s fix the vulnerabilities.

1. Open the cloned repository in an IDE or select Eclipse Orion web IDE tile, open Dockerfile and add the below command after EXPOSE 3000
    
    ```
    RUN apt-get update && apt-get install -y \
    libc6 \
    systemd \
    sensible-utils \
    isc-dhcp-client
    ```

2. Commit and Push the changes. This should trigger the toolchain and fix the Validate Stage.

Congratulations, you have completed the lab. In this lab, you have learnt how to use Vulnerability Advisor and how to fix the vulnerabilities.
