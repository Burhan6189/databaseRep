import React from "react";

const page = () => {
  return (
    <>
     <html>
    <head>
      <title>FH CHATBOT</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

    </head>
    <body>
      <div>
        <p style={{ textAlign: 'center' }}>Botpress Chatbot in a {'<div>'}</p>
        <div className="absolute inset-4">
          <div className="center-div relative h-full w-full overflow-clip rounded-md border border-zinc-200 bg-white p-2 px-0 py-0">
            <iframe
              style={{ border: '0' }}
              srcDoc={
                "<body><script src='https://cdn.botpress.cloud/webchat/v0/inject.js'></script>" +
                "<script>" +
                "window.botpressWebChat.init({" +
                "'composerPlaceholder': 'TALK TO US!'," +
                "'botConversationDescription': 'Welcome to FHGROUPOC'," +
                "'botName': 'FHGROUPOC'," +
                "'botId': '80cc5bcd-7fb4-4d95-bd53-a27938ec1fb0'," +
                "'hostUrl': 'https://cdn.botpress.cloud/webchat/v0'," +
                "'messagingUrl': 'https://messaging.botpress.cloud'," +
                "'clientId': '80cc5bcd-7fb4-4d95-bd53-a27938ec1fb0'," +
                "'enableConversationDeletion': true," +
                "'showPoweredBy': false," +
                "'className': 'webchatIframe'," +
                "'containerWidth': '100%25'," +
                "'layoutWidth': '100%25'," +
                "'hideWidget': true," +
                "'showCloseButton': false," +
                "'disableAnimations': false," +
                "'closeOnEscape': false," +
                "'showConversationsButton': false," +
                "'enableTranscriptDownload': false," +
                "'stylesheet':'https://webchat-styler-css.botpress.app/prod/c900adf0-4d97-42de-ae19-ee24a30e4c45/v35395/style.css'" +
                "});" +
                "window.botpressWebChat.onEvent(function () { window.botpressWebChat.sendEvent({ type: 'show' }) }, ['LIFECYCLE.LOADED']);" +
                "</script></body>"
              }
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      </div>
    </body>
  </html>
    </>
   
  );
};

export default page;
