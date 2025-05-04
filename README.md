# V_Tube (Video Tube)

A functional web application that allows users to view and search through a list of video contributions. 

## Features of the project

- Display video contributions (Title, Description, Start and end time, Owner and Status)
- Search video by Title
- Filter videos based on Status and Date range (Contribution data dates changed for this filter)
- Pagination added (14 per page)
- Responsive (Mobile, Tablet, Computer screens)
- Unit Testing added
- Simple Design features added (Colors, Hover effects, Buttons)

## Setup & Installation

This repository includes: Backend provided by Merapar and the frontend added for the task. The setup involves steps to be followed for both server and UI. 

### 1. Clone the Project

- git clone https://github.com/Ashvini97/Arqiva_FE.git
- Use a code editor to proceed with the tasks

### 2. Start the backend server

(Steps given by Merapar. During the task a virtual environment for created for efficiency. The steps followed is as below.
- Go to the backend folder (cd server)
- python -m venv venv
- source venv/bin/activate
- pip install -r requirements.txt
- fastapi dev main.py

Make sure the server is started without any errors

### 3. Start the Frontend 

- Go to the frontend folder (cd ui)
- npm install 
  ( Note: if you face any dependency conflicts due to the date-fns, react-date-range, or jest, use below instead of npm install.
  npm install --legacy-peer-deps )
- npm start

The UI will run at: http://localhost:3000/

![image](https://github.com/user-attachments/assets/06766bbc-65c1-42eb-a562-4e7d254de6ad)

![image](https://github.com/user-attachments/assets/32330caf-6003-4f57-8823-b52cd13970bf)









