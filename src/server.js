// src/server.js

import path from "path";
import express from "express";
import {createExpressServer} from "create-react-server";
import createRoutes from "./createRoutes";

/* 

//http://stackoverflow.com/questions/41772411/react-routing-works-in-local-machine-but-not-heroku

To run on server:
npm run build-win
serve -s build 
*/

createExpressServer({
  createRoutes: () => (createRoutes()),
  outputPath: path.join(process.cwd(), 'build'),
  port: env.PORT || 8000
});