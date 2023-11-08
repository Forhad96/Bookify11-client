import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import  { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="  dark:bg-gray-800 dark:text-gray-400">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={routes}></RouterProvider>

        </AuthProvider>
      </QueryClientProvider>
    </div>
    <Toaster/>
  </React.StrictMode>
);
