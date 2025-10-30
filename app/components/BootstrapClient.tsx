"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Ensure jQuery is available globally before loading Bootstrap (v4 requires jQuery)
    (async () => {
      const { default: jQuery } = await import("jquery");
      (window as any).$ = jQuery;
      (window as any).jQuery = jQuery;
      await import("bootstrap/dist/js/bootstrap.bundle.min.js");
    })();
  }, []);

  return null;
}
