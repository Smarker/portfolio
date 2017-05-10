// src/server.js

import path from "path";
import express from "express";
import {createExpressServer} from "create-react-server";
import createRoutes from "./createRoutes";

/* 
To run on server:
npm run build-win
serve -s build 
*/

createExpressServer({
  createRoutes: () => (createRoutes()),
  outputPath: path.join(process.cwd(), 'build'),
  port: env.PORT || 8000
});