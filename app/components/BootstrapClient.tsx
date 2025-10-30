"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import Bootstrap JavaScript
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}
