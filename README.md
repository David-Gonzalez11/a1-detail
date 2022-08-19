# final-project

A full stack solo project.

A web application for car detailers who want to become mobile. :car:

I wanted to build this project because I like to wash cars as a hobby. I know some car detailers who wash cars and they want to become mobile because it bring them more clients. 

# Live Demo :point_down:
- https://a1-detail.herokuapp.com/

# Technologies used :man_technologist:
![image](https://user-images.githubusercontent.com/24907191/185554033-0f9abc4c-e95b-425c-a71b-33d870700447.png) ![image](https://user-images.githubusercontent.com/24907191/185554071-c18ec4fc-a810-4a75-801d-06374215ed6a.png) ![image](https://user-images.githubusercontent.com/24907191/185554109-951f5123-39a7-44e4-88a1-edf36e9294ef.png) ![image](https://user-images.githubusercontent.com/24907191/185554121-cf4e1b40-0e23-4de5-bf85-ea67d6b3e62d.png) ![image](https://user-images.githubusercontent.com/24907191/185554137-399b904e-f1b1-40ec-986f-e7964dac6618.png) ![image](https://user-images.githubusercontent.com/24907191/185554156-6f95e452-adc2-4508-a4a4-e28e39542c33.png) ![image](https://user-images.githubusercontent.com/24907191/185554170-0ff43da3-8d65-4a6a-9c9b-ce4bca6fec6c.png) ![image](https://user-images.githubusercontent.com/24907191/185554186-ccd724a2-bfaa-415f-bb30-2ddb91f56cbf.png) ![image](https://user-images.githubusercontent.com/24907191/185554196-43d1e9d3-a605-4479-b326-7379d64a1caa.png) ![image](https://user-images.githubusercontent.com/24907191/185554200-53e2e76d-5977-441f-ae2e-d2a6973f46da.png) ![image](https://user-images.githubusercontent.com/24907191/185554212-c9d15f29-3a2d-4f9a-92ca-0f1a547d0740.png) ![image](https://user-images.githubusercontent.com/24907191/185554226-e64d2ea8-94f9-446b-b4df-337996870c3f.png) ![image](https://user-images.githubusercontent.com/24907191/185554234-efe38e89-dad5-46c0-b7b5-7252d00f3236.png) ![image](https://user-images.githubusercontent.com/24907191/185554247-99fae778-eda5-443b-ae76-5679f620585e.png) ![image](https://user-images.githubusercontent.com/24907191/185554257-22145a2a-97c4-4ee4-a53e-39ea7805a41a.png) ![image](https://user-images.githubusercontent.com/24907191/185554275-11028394-6655-444a-9e6a-4777f1f541aa.png) ![image](https://user-images.githubusercontent.com/24907191/185554291-f2370ff7-5641-4f40-9dfb-01b4d445a165.png)

-Google Maps API https://www.npmjs.com/package/@react-google-maps/api :earth_americas: :round_pushpin:
# Features
- User can create an account
- User can sign into an account
- User can sign out of an account
- User can view different types of detail services by clicking on icon
- User can schedule a service
- User can view their service/services
- User can cancel a service

# Demo of application

![readMeFInal-1](https://user-images.githubusercontent.com/24907191/185554729-45b198f0-11e3-4cdf-8e71-a383d9ee886a.gif)


![readeMeFinal-2](https://user-images.githubusercontent.com/24907191/185554830-5e7dffa4-201a-485e-b826-e294a642dd80.gif)

# Stretch features :thought_balloon:
- User can filter service by car or truck
- User can subscribe for monthly service
- User can track location of mobile detailer

# System Requirements :desktop_computer:
- Node.js 10 or higher
- NPM 6 or higher
- PostgreSQL 12.9 or higher

# Getting Started
 1. Clone the repository.
  ```
  git clone name-of-repo
  ```
2. Install all dependencies with NPM.
  ```
  npm install
  ```
3. Make a copy of the .env.example file and name it .env
  ```
  cp .env.example .env
  ```
4. Create database
  ```
  createdb nameOfDatabase
  ```
5. Import the example database.
  ```
  npm run db:import
  ```
6. Start the postgreSQL database server
  ```
  sudo service postgresql start
  ```
7. Launch pgweb postgreSQL database in the separate terminal
  ```
  pgweb --db=myDatabase
  ```
  You can view database by opening http://localhost:8081 on your default browser.
  
8. Start the project
  ```
  npm run dev
  ```
9. Once started server, you can view the application by opening http://localhost:3000 in your browser











