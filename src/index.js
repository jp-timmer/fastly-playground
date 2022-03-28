addEventListener("fetch", (event) => event.respondWith(handleRequest(event)));

async function handleRequest(event) {
  
  let response = new Response("Hello with CORS!");

  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Hello", "Worlds");
  response.headers.set("Test", "Tests");

  return response;

  // const dict = new Dictionary("redirects");

  // const url = new URL(event.request.url);

  // let next = dict.get(url.pathname);

  // if (next) {
  //   return new Response("Redirecting...", {
  //     status: 302,
  //     headers: {
  //       "Location": next
  //     }
  //   });
  // }

  // event.request.headers.set("Host", "www.ikea.com")

  // let upstream = await fetch(event.request, {
  //   backend: "origin"
  // });

  return upstream;
}
