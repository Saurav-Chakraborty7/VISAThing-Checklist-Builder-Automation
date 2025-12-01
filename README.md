# VISAThing Checklist Builder

This project is a WebdriverIO based automation test suite for our Checklist Module. The tests are written using WebdriverIO.

## Prerequisites

- Node.js installed on your machine.

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/Saurav-Chakraborty7/VISAThing-Checklist-Builder-Automation.git
cd VISAThing-Checklist-Builder-Automation
```
### 2. Initialize the Project

To get started, initialize the project by running:

```bash
npm init -y
```

### 3. Install Node Modules

To get started, install the required node modules by running:

```bash
npm install
```

### 4. Install WebdriverIO

If you haven't already, install WebdriverIO via npm:

```bash
npm install @wdio/cli --save-dev
npx wdio config
```

### 5. Run Tests

- To run tests in parallel (spec-wise):

```bash
npm run test
```

- To run tests suite-wise (e.g., purchase suite):

```bash
npm run suits
```


## Project Structure

- **test/spec**: Contains the test specifications.
- **test/pages**: Contains the Page Object Model (POM) files for organizing locators and actions.

# Completed Testing Tasks

## Before Starting the Journey:
- **Click on Start and select Language:** Click the Start button and select the preferred language.
- **Select Country and Visa Category:**  
  - Country: Denmark  
  - Visa Category: Tourism  
  - Click Next to proceed.

## Task 2: Starting the Journey
- **Answer the Journey Questions:**  
  - *Are you a student?* → Select randomly between 1 or 2.  
  - *Purpose of your travel?* → Select randomly between 1–9.  
  - *What type of residency does your invitee have?* → Select randomly between 1–3.  
  - *Have you traveled to any country in the last 10 years?* → Select randomly between 1 or 2.  
  - *Do you currently have an active bank account?* → Select randomly between 1 or 2.  
  - *How have you heard about us?* → Select randomly between 1 or 2.  
- **Confirm Answers:** Click Confirm.  
- **Proceed to Submit:** Click Proceed.  
- **Login Step:**  
  - Enter Email: useyours 
  - Enter Password: useyours  
  - Click Login.  
- **Fill Personal Details:**  
  - Enter Tentative Date: 31-12-2025  
  - Click Submit twice  
  - Wait 5 seconds for processing.

## Task 3: After Completing the Journey
- **Complete the Payment:**  
  - Click Unlock → Click Success → Click Payment → Click Payment Success → Click Continue.  
- **Navigate through Premium Features:**  
  - Scroll to and click **Document Checklist**.  
  - Scroll to and click **Action Plan**.  
  - Scroll to and click **Cost Analytics**.  
  - Scroll to and click **Expert Tips**.  
  - Scroll to and click **Feedback**.  
  - Wait 10 seconds after navigation for full load.
