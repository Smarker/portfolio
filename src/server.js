// src/server.js

import path from "path";
import express from "express";
import {createExpressServer} from "create-react-server";
import createRoutes from "./createRoutes";

createExpressServer({
  createRoutes: () => (createRoutes()),
  outputPath: path.join(process.cwd(), 'build'),
  port: process.env.PORT || 3000
});