// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c6e954fce27ea9916661eb51eef7a43c@o4508349904453632.ingest.us.sentry.io/4508349979623424",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
