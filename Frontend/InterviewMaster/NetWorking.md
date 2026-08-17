# Computer Networking Master Interview Questions

## 24-Hour Interview Revision | Fresher Software Engineer

> **Focus:** Software Engineer / SDE Fresher
>
> **Not the focus:** Advanced network administration, CCNA-style configuration, enterprise routing, deep Cisco commands, BGP engineering, or network-operations topics.
>
> For every important question, practice:
>
> **What? → Why? → How? → When? → Example? → Trade-off?**

---

# 1. Networking Fundamentals

* [ ] What is a computer network?
* [ ] Why do software engineers need networking?
* [ ] What happens when one computer communicates with another?
* [ ] What are the main components of a network?
* [ ] What is a host?
* [ ] What is a client?
* [ ] What is a server?
* [ ] What is a network protocol?
* [ ] Why do we need protocols?
* [ ] What is a packet?
* [ ] What is a frame?
* [ ] What is a segment?
* [ ] What is a message?
* [ ] What is the difference between packet, segment, datagram, and frame?
* [ ] What is bandwidth?
* [ ] What is latency?
* [ ] What is throughput?
* [ ] What is jitter?
* [ ] What is packet loss?
* [ ] What is network congestion?
* [ ] What is network reliability?
* [ ] What is full-duplex communication?
* [ ] What is half-duplex communication?
* [ ] What is simplex communication?
* [ ] What is unicast?
* [ ] What is multicast?
* [ ] What is broadcast?
* [ ] What is anycast?
* [ ] What is a socket?

---

# 2. OSI Model

* [ ] What is the OSI model?
* [ ] Why was the OSI model created?
* [ ] What are the seven OSI layers?
* [ ] What does each OSI layer do?
* [ ] What protocols operate at each layer?
* [ ] What is the Physical layer?
* [ ] What is the Data Link layer?
* [ ] What is the Network layer?
* [ ] What is the Transport layer?
* [ ] What is the Session layer?
* [ ] What is the Presentation layer?
* [ ] What is the Application layer?
* [ ] What is encapsulation?
* [ ] What is decapsulation?
* [ ] What happens when data moves down the OSI layers?
* [ ] What happens when data moves up the OSI layers?
* [ ] What is the difference between OSI and TCP/IP models?
* [ ] Why is OSI important for a software engineer?
* [ ] Do real applications literally implement seven separate OSI layers?

---

# 3. TCP/IP Model

* [ ] What is the TCP/IP model?
* [ ] What are the layers of the TCP/IP model?
* [ ] How does TCP/IP differ from OSI?
* [ ] Which model is used in real-world Internet communication?
* [ ] Where does HTTP belong?
* [ ] Where does TCP belong?
* [ ] Where does IP belong?
* [ ] Where does Ethernet belong?
* [ ] What is encapsulation in TCP/IP?
* [ ] How does an HTTP request travel through the TCP/IP stack?

---

# 4. Application Layer

* [ ] What is the Application layer?
* [ ] What is HTTP?
* [ ] What is HTTPS?
* [ ] What is DNS?
* [ ] What is FTP?
* [ ] What is SMTP?
* [ ] What is SSH?
* [ ] What is WebSocket?
* [ ] What is DHCP?
* [ ] Which application-layer protocols are most important for software engineers?
* [ ] How does an application communicate with the transport layer?

---

# 5. IP Addressing

* [ ] What is an IP address?
* [ ] Why does every networked device need an IP address?
* [ ] What is IPv4?
* [ ] What is IPv6?
* [ ] Why was IPv6 introduced?
* [ ] What is the difference between IPv4 and IPv6?
* [ ] What does an IPv4 address look like?
* [ ] What does an IPv6 address look like?
* [ ] What is a public IP?
* [ ] What is a private IP?
* [ ] What is localhost?
* [ ] What is `127.0.0.1`?
* [ ] What is `0.0.0.0`?
* [ ] What is `::1`?
* [ ] What is `::`?
* [ ] What is loopback?
* [ ] What is a static IP?
* [ ] What is a dynamic IP?
* [ ] What is IP addressing used for?
* [ ] Can two devices have the same public IP?
* [ ] Can two devices have the same private IP?
* [ ] Why can multiple devices access the Internet using one public IP?

---

# 6. Subnetting Essentials

> **Fresher SWE focus:** Understand the concept. Do not spend your 24 hours becoming a subnetting wizard.

* [ ] What is a subnet?
* [ ] Why do we use subnets?
* [ ] What is a subnet mask?
* [ ] What is CIDR?
* [ ] What does `/24` mean?
* [ ] What does `/16` mean?
* [ ] What does `/8` mean?
* [ ] What is a network address?
* [ ] What is a broadcast address?
* [ ] What is a host address?
* [ ] Why is subnetting useful in backend/cloud systems?
* [ ] Can you identify whether two IP addresses are in the same subnet?
* [ ] What is the relationship between CIDR and number of available addresses?

---

# 7. MAC Address

* [ ] What is a MAC address?
* [ ] Why is a MAC address needed?
* [ ] What is the difference between MAC address and IP address?
* [ ] Is a MAC address Layer 2 or Layer 3?
* [ ] Can a device have multiple MAC addresses?
* [ ] Can a MAC address change?
* [ ] How does a device find the MAC address associated with an IP?
* [ ] What is ARP?
* [ ] Why is ARP required?

---

# 8. ARP

* [ ] What is ARP?
* [ ] Why does ARP exist?
* [ ] How does ARP work?
* [ ] What happens when a device wants to send data to another device on the local network?
* [ ] What is an ARP request?
* [ ] What is an ARP response?
* [ ] What is the ARP cache?
* [ ] What happens if an ARP entry is missing?
* [ ] Is ARP used for communication across the Internet?
* [ ] How does ARP relate to IP and MAC addresses?

---

# 9. DNS

## ⭐ Extremely Important for SWE Interviews

* [ ] What is DNS?
* [ ] Why do we need DNS?
* [ ] Why don't applications directly use domain names to communicate?
* [ ] How does DNS resolve a domain name?
* [ ] What happens when you type `google.com` into a browser?
* [ ] What is a DNS resolver?
* [ ] What is a recursive DNS server?
* [ ] What is a root DNS server?
* [ ] What is a TLD DNS server?
* [ ] What is an authoritative DNS server?
* [ ] What is DNS caching?
* [ ] Where can DNS responses be cached?
* [ ] What is TTL in DNS?
* [ ] What happens when DNS cache expires?
* [ ] What is an A record?
* [ ] What is an AAAA record?
* [ ] What is a CNAME record?
* [ ] What is an MX record?
* [ ] What is an NS record?
* [ ] What is a TXT record?
* [ ] What is reverse DNS?
* [ ] What happens if DNS fails?
* [ ] How would you troubleshoot a DNS problem?
* [ ] Why can DNS make an application appear slow?
* [ ] What is DNS over HTTPS?
* [ ] What is DNS over TLS?
* [ ] Why might a browser cache DNS information?

---

# 10. Routing

* [ ] What is routing?
* [ ] What is a router?
* [ ] Why do we need routers?
* [ ] How does a router decide where to send a packet?
* [ ] What is a routing table?
* [ ] What is a default route?
* [ ] What is a default gateway?
* [ ] What happens when a destination is outside the local network?
* [ ] What is hop count?
* [ ] What is a hop?
* [ ] What is traceroute?
* [ ] How does traceroute help troubleshoot networking?
* [ ] What is static routing?
* [ ] What is dynamic routing?
* [ ] What is the difference between routing and switching?
* [ ] What is a routing loop?
* [ ] Why is routing important for backend engineers?

---

# 11. NAT

* [ ] What is NAT?
* [ ] Why was NAT introduced?
* [ ] What is private-to-public IP translation?
* [ ] What is source NAT?
* [ ] What is destination NAT?
* [ ] What is PAT?
* [ ] How can multiple devices share one public IP?
* [ ] What happens to source ports during NAT?
* [ ] What problems can NAT create?
* [ ] Why is NAT important when developing backend applications?
* [ ] How does NAT affect inbound connections?

---

# 12. Ports

## ⭐ Very Important

* [ ] What is a port?
* [ ] Why do we need ports?
* [ ] What is the relationship between IP address and port?
* [ ] What is a socket?
* [ ] What is a port number?
* [ ] What is a well-known port?
* [ ] What is an ephemeral port?
* [ ] What port does HTTP normally use?
* [ ] What port does HTTPS normally use?
* [ ] What port does SSH normally use?
* [ ] What port does DNS normally use?
* [ ] Can multiple applications use the same port?
* [ ] Can multiple clients connect to the same server port?
* [ ] How does a server distinguish multiple client connections?
* [ ] What does `localhost:3000` mean?
* [ ] What does `0.0.0.0:8080` mean?
* [ ] What is port binding?
* [ ] What happens if two applications try to bind to the same port?

---

# 13. TCP

## ⭐⭐⭐ Highest Priority

* [ ] What is TCP?
* [ ] Why does TCP exist?
* [ ] What are the main features of TCP?
* [ ] Is TCP connection-oriented?
* [ ] What does connection-oriented mean?
* [ ] Is TCP reliable?
* [ ] How does TCP provide reliability?
* [ ] What is TCP sequencing?
* [ ] What is an acknowledgment?
* [ ] What is retransmission?
* [ ] What is flow control?
* [ ] What is congestion control?
* [ ] What is TCP segmentation?
* [ ] What is a TCP segment?
* [ ] What is a TCP sequence number?
* [ ] What is an acknowledgment number?
* [ ] What are TCP flags?
* [ ] What are SYN, ACK, FIN, and RST?
* [ ] What is the TCP three-way handshake?
* [ ] Why does TCP need three-way handshake?
* [ ] What happens during TCP connection establishment?
* [ ] What happens if the SYN packet is lost?
* [ ] What happens if the SYN-ACK is lost?
* [ ] What happens if the final ACK is lost?
* [ ] What is TCP connection termination?
* [ ] Why does TCP termination normally require multiple steps?
* [ ] What is TIME_WAIT?
* [ ] Why does TIME_WAIT exist?
* [ ] What is TCP retransmission?
* [ ] What causes TCP retransmission?
* [ ] What is a TCP timeout?
* [ ] What is TCP window size?
* [ ] What is the receive window?
* [ ] What is sliding window?
* [ ] What is flow control?
* [ ] What is congestion control?
* [ ] What is the difference between flow control and congestion control?
* [ ] What is slow start?
* [ ] What is congestion avoidance?
* [ ] What is TCP keep-alive?
* [ ] How does TCP handle packet loss?
* [ ] How does TCP preserve data order?
* [ ] Why can TCP be slower than UDP?

---

# 14. UDP

* [ ] What is UDP?
* [ ] Why does UDP exist?
* [ ] Is UDP connection-oriented?
* [ ] Is UDP reliable?
* [ ] Does UDP guarantee packet ordering?
* [ ] Does UDP guarantee delivery?
* [ ] Does UDP perform retransmission?
* [ ] Does UDP perform congestion control?
* [ ] What is a UDP datagram?
* [ ] TCP vs UDP?
* [ ] When should UDP be used?
* [ ] When should TCP be used?
* [ ] Why is UDP useful for real-time applications?
* [ ] Why might video/audio applications prefer UDP?
* [ ] What are examples of protocols that use UDP?
* [ ] Can reliability be implemented on top of UDP?

---

# 15. TCP vs UDP

* [ ] What is the biggest difference between TCP and UDP?
* [ ] TCP vs UDP in reliability?
* [ ] TCP vs UDP in ordering?
* [ ] TCP vs UDP in connection establishment?
* [ ] TCP vs UDP in overhead?
* [ ] TCP vs UDP in latency?
* [ ] TCP vs UDP in congestion handling?
* [ ] When would you choose TCP for an application?
* [ ] When would you choose UDP?
* [ ] Why does HTTP traditionally use TCP?
* [ ] Why does modern HTTP/3 use QUIC instead?
* [ ] Can UDP be reliable?

---

# 16. HTTP

## ⭐⭐⭐ Highest Priority

* [ ] What is HTTP?
* [ ] Why was HTTP created?
* [ ] What is an HTTP request?
* [ ] What is an HTTP response?
* [ ] What are the components of an HTTP request?
* [ ] What are the components of an HTTP response?
* [ ] What is an HTTP method?
* [ ] What is GET?
* [ ] What is POST?
* [ ] What is PUT?
* [ ] What is PATCH?
* [ ] What is DELETE?
* [ ] What is HEAD?
* [ ] What is OPTIONS?
* [ ] What is the difference between PUT and PATCH?
* [ ] What is the difference between GET and POST?
* [ ] What is idempotency?
* [ ] Which HTTP methods are idempotent?
* [ ] What is a safe HTTP method?
* [ ] What is HTTP statelessness?
* [ ] Why is HTTP stateless?
* [ ] What is an HTTP header?
* [ ] What is a request body?
* [ ] What is a response body?
* [ ] What is Content-Type?
* [ ] What is Accept?
* [ ] What is Authorization?
* [ ] What is User-Agent?
* [ ] What is Cache-Control?
* [ ] What is Cookie?
* [ ] What is Set-Cookie?
* [ ] What is Content-Length?
* [ ] What is Transfer-Encoding?
* [ ] What is HTTP status code?
* [ ] What does 200 mean?
* [ ] What does 201 mean?
* [ ] What does 204 mean?
* [ ] What does 301 mean?
* [ ] What does 302 mean?
* [ ] What does 304 mean?
* [ ] What does 400 mean?
* [ ] What does 401 mean?
* [ ] What does 403 mean?
* [ ] What does 404 mean?
* [ ] What does 405 mean?
* [ ] What does 409 mean?
* [ ] What does 422 mean?
* [ ] What does 429 mean?
* [ ] What does 500 mean?
* [ ] What does 502 mean?
* [ ] What does 503 mean?
* [ ] What does 504 mean?

---

# 17. HTTPS

## ⭐⭐⭐ Highest Priority

* [ ] What is HTTPS?
* [ ] Why do we need HTTPS?
* [ ] What is the difference between HTTP and HTTPS?
* [ ] What is TLS?
* [ ] What is SSL?
* [ ] Why is SSL considered obsolete?
* [ ] What does TLS provide?
* [ ] What is encryption?
* [ ] What is authentication?
* [ ] What is integrity?
* [ ] What is confidentiality?
* [ ] What is a digital certificate?
* [ ] What is a Certificate Authority?
* [ ] What is a public key?
* [ ] What is a private key?
* [ ] What is asymmetric encryption?
* [ ] What is symmetric encryption?
* [ ] Why does TLS use both asymmetric and symmetric cryptography?
* [ ] What happens during a TLS handshake?
* [ ] How does a browser verify a server certificate?
* [ ] What happens if a certificate is invalid?
* [ ] What is certificate expiration?
* [ ] What is certificate chain validation?
* [ ] What is certificate pinning?
* [ ] Why is HTTPS important for APIs?
* [ ] Does HTTPS encrypt the URL?
* [ ] Does HTTPS hide the destination IP address?
* [ ] Does HTTPS protect against every type of attack?

---

# 18. HTTP Versions

* [ ] What is HTTP/1.0?
* [ ] What is HTTP/1.1?
* [ ] What is HTTP/2?
* [ ] What is HTTP/3?
* [ ] What improved from HTTP/1.1 to HTTP/2?
* [ ] What is persistent connection?
* [ ] What is HTTP keep-alive?
* [ ] What is HTTP pipelining?
* [ ] What is HTTP/2 multiplexing?
* [ ] What is HTTP/2 header compression?
* [ ] What is HPACK?
* [ ] What protocol does HTTP/3 use?
* [ ] What is QUIC?
* [ ] Why does HTTP/3 use QUIC?
* [ ] How does HTTP/3 handle packet loss differently from TCP-based HTTP?
* [ ] HTTP/1.1 vs HTTP/2?
* [ ] HTTP/2 vs HTTP/3?

---

# 19. REST APIs

## ⭐⭐⭐ Highest Priority

* [ ] What is REST?
* [ ] What is a REST API?
* [ ] What are REST principles?
* [ ] What does statelessness mean in REST?
* [ ] What is a resource?
* [ ] How should REST URLs be designed?
* [ ] What makes an API RESTful?
* [ ] What is CRUD?
* [ ] How do HTTP methods map to CRUD?
* [ ] What is resource-oriented API design?
* [ ] What is API versioning?
* [ ] How can APIs be versioned?
* [ ] What is pagination?
* [ ] What is filtering?
* [ ] What is sorting?
* [ ] What is API rate limiting?
* [ ] What is idempotency in APIs?
* [ ] How do you design an idempotent API?
* [ ] What is an API timeout?
* [ ] What is retry?
* [ ] What is exponential backoff?
* [ ] Why shouldn't every API error be retried?
* [ ] What is API caching?
* [ ] What is ETag?
* [ ] What is conditional request?
* [ ] What is optimistic concurrency?
* [ ] How would you design a reliable API?

---

# 20. WebSockets

* [ ] What is WebSocket?
* [ ] Why do we need WebSockets?
* [ ] How is WebSocket different from HTTP?
* [ ] Is WebSocket built on TCP?
* [ ] How is a WebSocket connection established?
* [ ] What is the WebSocket handshake?
* [ ] What is full-duplex communication?
* [ ] When should WebSockets be used?
* [ ] When should WebSockets NOT be used?
* [ ] What are real-world WebSocket use cases?
* [ ] How would you build real-time chat using WebSockets?
* [ ] How would you handle WebSocket reconnection?
* [ ] How would you scale WebSockets across multiple servers?

---

# 21. Long Polling and SSE

* [ ] What is polling?
* [ ] What is long polling?
* [ ] What is Server-Sent Events?
* [ ] What is SSE?
* [ ] WebSocket vs SSE?
* [ ] WebSocket vs long polling?
* [ ] When should polling be used?
* [ ] When should long polling be used?
* [ ] When should SSE be used?
* [ ] When should WebSocket be used?
* [ ] Which approach is suitable for one-way server updates?
* [ ] Which approach is suitable for bidirectional communication?

---

# 22. Cookies and Sessions

* [ ] What is a cookie?
* [ ] Why do websites use cookies?
* [ ] What is a session cookie?
* [ ] What is a persistent cookie?
* [ ] What is HttpOnly?
* [ ] What is Secure?
* [ ] What is SameSite?
* [ ] What is a session?
* [ ] How does session-based authentication work?
* [ ] What happens after login in a session-based system?
* [ ] Where is session data stored?
* [ ] What is a session ID?
* [ ] What is the difference between cookie and session?
* [ ] How does a browser send cookies?
* [ ] What is a third-party cookie?
* [ ] Why are third-party cookies restricted?

---

# 23. Authentication and Authorization

* [ ] What is authentication?
* [ ] What is authorization?
* [ ] Authentication vs authorization?
* [ ] What is a session-based authentication system?
* [ ] What is token-based authentication?
* [ ] What is JWT?
* [ ] What is inside a JWT?
* [ ] What is a JWT header?
* [ ] What is a JWT payload?
* [ ] What is a JWT signature?
* [ ] Is JWT encrypted by default?
* [ ] How is JWT verified?
* [ ] What is an access token?
* [ ] What is a refresh token?
* [ ] Why should access tokens expire?
* [ ] How does refresh-token flow work?
* [ ] Where should tokens be stored?
* [ ] What are the security risks of storing tokens in localStorage?
* [ ] What is OAuth?
* [ ] What is OpenID Connect?
* [ ] OAuth vs JWT?
* [ ] Authentication vs authorization in an API?

---

# 24. CORS

## ⭐⭐⭐ Very Common

* [ ] What is CORS?
* [ ] Why does CORS exist?
* [ ] What is the same-origin policy?
* [ ] What is an origin?
* [ ] What makes two URLs different origins?
* [ ] What is a simple CORS request?
* [ ] What is a preflight request?
* [ ] Why does the browser send an OPTIONS request?
* [ ] What is `Access-Control-Allow-Origin`?
* [ ] What is `Access-Control-Allow-Methods`?
* [ ] What is `Access-Control-Allow-Headers`?
* [ ] What is `Access-Control-Allow-Credentials`?
* [ ] Why can CORS errors appear only in browsers?
* [ ] Is CORS a frontend issue or backend issue?
* [ ] Why does Postman often work when a browser request fails because of CORS?
* [ ] How would you debug a CORS error?

---

# 25. Browser Networking

## ⭐⭐⭐ Important for Frontend/SWE

* [ ] What happens when you enter a URL into a browser?
* [ ] What is the complete lifecycle of a browser request?
* [ ] How does DNS participate?
* [ ] How does TCP participate?
* [ ] How does TLS participate?
* [ ] How does HTTP participate?
* [ ] What happens after the server sends HTML?
* [ ] How does the browser download CSS?
* [ ] How does the browser download JavaScript?
* [ ] How does the browser download images?
* [ ] What is browser caching?
* [ ] What is HTTP caching?
* [ ] What is a cache hit?
* [ ] What is a cache miss?
* [ ] What is a CDN?
* [ ] Why does a CDN improve performance?
* [ ] What is browser connection pooling?
* [ ] What is keep-alive?
* [ ] What is prefetching?
* [ ] What is preloading?
* [ ] What is lazy loading?
* [ ] What is resource prioritization?

---

# 26. "What Happens When You Type a URL?"

## ⭐⭐⭐⭐ Must Be Able to Explain

* [ ] What happens when you type `https://example.com` into the browser?
* [ ] How does the browser parse the URL?
* [ ] How does DNS resolution happen?
* [ ] How does the browser find the server IP?
* [ ] How is the TCP connection established?
* [ ] How is TLS established?
* [ ] How is the HTTP request sent?
* [ ] How does the server process the request?
* [ ] How does the HTTP response return?
* [ ] How does the browser render the response?
* [ ] Where can caching happen during this process?
* [ ] Where can latency occur during this process?
* [ ] What could make this request slow?

---

# 27. CDN

* [ ] What is a CDN?
* [ ] Why do we need CDNs?
* [ ] How does a CDN work?
* [ ] What is an edge server?
* [ ] What is an origin server?
* [ ] What is cache hit?
* [ ] What is cache miss?
* [ ] How does CDN caching reduce latency?
* [ ] What types of content should be served through a CDN?
* [ ] Can APIs use CDNs?
* [ ] What happens when cached content expires?
* [ ] What is cache invalidation?
* [ ] What are the trade-offs of CDN caching?

---

# 28. Caching

* [ ] What is caching?
* [ ] Why does caching improve performance?
* [ ] Where can caching happen?
* [ ] What is browser cache?
* [ ] What is CDN cache?
* [ ] What is server-side cache?
* [ ] What is database cache?
* [ ] What is Redis?
* [ ] What is cache hit?
* [ ] What is cache miss?
* [ ] What is cache invalidation?
* [ ] What is TTL?
* [ ] What is stale data?
* [ ] What is cache-control?
* [ ] What is ETag?
* [ ] What is conditional GET?
* [ ] What is cache busting?
* [ ] What problems can caching introduce?
* [ ] How would you design caching for an API?

---

# 29. Proxy

* [ ] What is a proxy server?
* [ ] Why do we use proxies?
* [ ] What is a forward proxy?
* [ ] What is a reverse proxy?
* [ ] Forward proxy vs reverse proxy?
* [ ] What is Nginx?
* [ ] How can Nginx act as a reverse proxy?
* [ ] Why are reverse proxies useful for backend applications?
* [ ] How can a reverse proxy provide load balancing?
* [ ] How can a reverse proxy terminate TLS?
* [ ] How can a reverse proxy improve security?

---

# 30. Load Balancing

## ⭐⭐ SWE / Backend Interviews

* [ ] What is load balancing?
* [ ] Why do we need load balancers?
* [ ] What problem does a load balancer solve?
* [ ] What is a Layer 4 load balancer?
* [ ] What is a Layer 7 load balancer?
* [ ] L4 vs L7 load balancing?
* [ ] What is round-robin load balancing?
* [ ] What is weighted round-robin?
* [ ] What is least-connections?
* [ ] What is consistent hashing?
* [ ] What is health checking?
* [ ] What happens when a backend server goes down?
* [ ] What is sticky session?
* [ ] Why can sticky sessions become a problem?
* [ ] How does load balancing improve availability?
* [ ] How does load balancing improve scalability?

---

# 31. Firewalls

* [ ] What is a firewall?
* [ ] Why do we need firewalls?
* [ ] What does a firewall inspect?
* [ ] What is an inbound rule?
* [ ] What is an outbound rule?
* [ ] What is a stateful firewall?
* [ ] What is a stateless firewall?
* [ ] What is a security group?
* [ ] Why are firewalls important for backend applications?
* [ ] How can a firewall cause a connection failure?

---

# 32. Sockets

* [ ] What is a socket?
* [ ] What is a socket address?
* [ ] What is the relationship between socket, IP, and port?
* [ ] What is a TCP socket?
* [ ] What is a UDP socket?
* [ ] What happens when a server listens on a socket?
* [ ] What happens when a client connects?
* [ ] What is a listening socket?
* [ ] What is an established socket?
* [ ] How can a server handle thousands of socket connections?

---

# 33. Network Reliability

* [ ] What is reliability in networking?
* [ ] How does TCP provide reliable delivery?
* [ ] What is acknowledgment?
* [ ] What is retransmission?
* [ ] What is timeout?
* [ ] What is sequence numbering?
* [ ] What is duplicate packet detection?
* [ ] What happens when packets arrive out of order?
* [ ] How does TCP recover from packet loss?
* [ ] What is checksum?
* [ ] Why are checksums used?
* [ ] Does TCP guarantee that data reaches the application eventually?

---

# 34. Flow Control vs Congestion Control

* [ ] What is flow control?
* [ ] Why is flow control required?
* [ ] What is congestion control?
* [ ] Why is congestion control required?
* [ ] Flow control vs congestion control?
* [ ] What is receiver window?
* [ ] What is congestion window?
* [ ] How does TCP use both?
* [ ] What happens when the receiver is slow?
* [ ] What happens when the network is congested?

---

# 35. Network Performance

* [ ] What is latency?
* [ ] What is bandwidth?
* [ ] What is throughput?
* [ ] What is round-trip time?
* [ ] What is RTT?
* [ ] What is packet loss?
* [ ] What is jitter?
* [ ] What causes high latency?
* [ ] What causes packet loss?
* [ ] How can latency affect APIs?
* [ ] How can bandwidth affect applications?
* [ ] Why can a high-bandwidth network still feel slow?
* [ ] How would you reduce API latency?
* [ ] How would you investigate a slow API?
* [ ] What is network timeout?
* [ ] Why should APIs have timeouts?

---

# 36. API Networking Problems

* [ ] What happens if an API request times out?
* [ ] What causes an API timeout?
* [ ] What causes a connection refused error?
* [ ] What causes connection reset?
* [ ] What causes DNS failure?
* [ ] What causes HTTP 502?
* [ ] What causes HTTP 503?
* [ ] What causes HTTP 504?
* [ ] How would you troubleshoot a slow API?
* [ ] How would you troubleshoot an unreachable server?
* [ ] How would you troubleshoot intermittent network failures?
* [ ] How would you determine whether the problem is client-side or server-side?
* [ ] What logs and tools would you check?

---

# 37. API Reliability

* [ ] Why should API clients have timeouts?
* [ ] What is retry?
* [ ] When should you retry?
* [ ] When should you NOT retry?
* [ ] What is exponential backoff?
* [ ] What is jitter in retry systems?
* [ ] What is retry storm?
* [ ] What is idempotency?
* [ ] Why is idempotency important when retrying requests?
* [ ] Why should POST requests be handled carefully during retries?
* [ ] What is a circuit breaker?
* [ ] Why is a circuit breaker useful?
* [ ] What is graceful degradation?

---

# 38. HTTP Caching

* [ ] What is HTTP caching?
* [ ] What is `Cache-Control`?
* [ ] What is `max-age`?
* [ ] What is `no-cache`?
* [ ] What is `no-store`?
* [ ] What is `public`?
* [ ] What is `private`?
* [ ] What is ETag?
* [ ] What is Last-Modified?
* [ ] What is a conditional request?
* [ ] What does HTTP 304 mean?
* [ ] How does conditional GET save bandwidth?
* [ ] How can incorrect caching cause stale data?

---

# 39. Authentication Networking

* [ ] How does a login request travel over HTTPS?
* [ ] Why should login credentials be sent over HTTPS?
* [ ] How does session authentication work over HTTP?
* [ ] How does JWT authentication work over HTTP?
* [ ] Where is the token sent?
* [ ] What is the Authorization header?
* [ ] What is Bearer authentication?
* [ ] How does refresh-token authentication work?
* [ ] How should logout invalidate authentication?
* [ ] What happens when an access token expires?

---

# 40. Network Security Basics

* [ ] What is encryption?
* [ ] What is symmetric encryption?
* [ ] What is asymmetric encryption?
* [ ] What is hashing?
* [ ] Encryption vs hashing?
* [ ] What is digital signature?
* [ ] What is certificate?
* [ ] What is certificate authority?
* [ ] What is TLS?
* [ ] What is MITM attack?
* [ ] How does HTTPS help prevent MITM attacks?
* [ ] What is replay attack?
* [ ] What is packet sniffing?
* [ ] Why should sensitive APIs use HTTPS?
* [ ] What is HSTS?
* [ ] What is secure cookie?
* [ ] What is HttpOnly cookie?

---

# 41. Web Security Concepts

* [ ] What is XSS?
* [ ] What is CSRF?
* [ ] What is CORS?
* [ ] What is Same-Origin Policy?
* [ ] How are XSS and CSRF different?
* [ ] How can CSRF be prevented?
* [ ] How can XSS be prevented?
* [ ] Why does SameSite cookie protection help with CSRF?
* [ ] Why does HTTPS not automatically prevent XSS?
* [ ] Why does CORS not replace authentication?

---

# 42. HTTP Connection Lifecycle

* [ ] What happens before an HTTP request is sent?
* [ ] What is DNS resolution?
* [ ] What is TCP connection establishment?
* [ ] What is TLS handshake?
* [ ] What is HTTP request transmission?
* [ ] What is server processing?
* [ ] What is response transmission?
* [ ] What is connection reuse?
* [ ] What is keep-alive?
* [ ] What happens when the connection closes?
* [ ] Where can latency be introduced?

---

# 43. HTTP/2 and Multiplexing

* [ ] What is multiplexing?
* [ ] Why was HTTP/2 multiplexing introduced?
* [ ] How does HTTP/2 handle multiple requests over one connection?
* [ ] What is a stream in HTTP/2?
* [ ] What is a frame?
* [ ] What is header compression?
* [ ] Why can HTTP/2 improve page loading?
* [ ] What limitations of HTTP/1.1 does HTTP/2 address?
* [ ] What is HTTP/2 server push?
* [ ] Is server push still commonly recommended?

---

# 44. HTTP/3 and QUIC

* [ ] What is QUIC?
* [ ] Why was QUIC created?
* [ ] Which transport protocol does QUIC use?
* [ ] How does QUIC differ from TCP?
* [ ] Why does HTTP/3 use QUIC?
* [ ] What is connection migration?
* [ ] How does QUIC reduce connection establishment latency?
* [ ] How does QUIC handle packet loss?
* [ ] What is the relationship between HTTP/3 and TLS 1.3?
* [ ] HTTP/2 vs HTTP/3?

---

# 45. Network Tools for Software Engineers

* [ ] What is `ping`?
* [ ] What does ping test?
* [ ] What is `traceroute`?
* [ ] What does traceroute show?
* [ ] What is `nslookup`?
* [ ] What is `dig`?
* [ ] What does `curl` do?
* [ ] How can `curl` be used to debug an API?
* [ ] What is `netstat`?
* [ ] What is `ss`?
* [ ] What is `telnet` commonly used for in networking diagnostics?
* [ ] What is `nc` / netcat?
* [ ] What is Wireshark?
* [ ] What is packet capture?
* [ ] How would you debug whether a port is reachable?
* [ ] How would you debug DNS from the command line?
* [ ] How would you inspect an HTTP request using curl?

---

# 46. Troubleshooting Scenarios

* [ ] DNS resolution works sometimes but fails sometimes. How would you investigate?
* [ ] The server is running but clients cannot connect. What would you check?
* [ ] Port 8080 works locally but not from another machine. What could be wrong?
* [ ] API works in Postman but not in the browser. What would you investigate?
* [ ] API works on HTTP but fails on HTTPS. What would you investigate?
* [ ] API response is slow only for users in another region. What could be causing it?
* [ ] API randomly returns 504. What would you investigate?
* [ ] API returns 502 from a reverse proxy. What could be wrong?
* [ ] Server returns 503 during high traffic. What would you investigate?
* [ ] DNS lookup is slow. How could you reduce the impact?
* [ ] TCP connection takes too long. What could cause it?
* [ ] Many connections are stuck in TIME_WAIT. What does that mean?
* [ ] The server suddenly has thousands of open connections. What would you investigate?
* [ ] A request succeeds after retry but fails initially. What could be happening?
* [ ] A service is reachable by IP but not by hostname. What does that suggest?
* [ ] Two services can communicate locally but not across machines. What would you investigate?
* [ ] A browser reports a CORS error. How would you debug it?
* [ ] Users complain that a website is slow only during peak traffic. What networking factors would you investigate?

---

# 47. Distributed Systems Networking Basics

## ⭐ Useful for SWE Interviews

* [ ] Why is networking important in distributed systems?
* [ ] What is service-to-service communication?
* [ ] What is a network partition?
* [ ] What happens when one service cannot reach another?
* [ ] What is partial failure?
* [ ] Why are distributed systems harder than single-machine systems?
* [ ] What is service discovery?
* [ ] Why is service discovery needed?
* [ ] What is a health check?
* [ ] What is load balancing between services?
* [ ] What is a timeout?
* [ ] What is retry?
* [ ] What is exponential backoff?
* [ ] What is circuit breaking?
* [ ] What is bulkheading?
* [ ] What is graceful degradation?
* [ ] Why can retries make a distributed system worse?
* [ ] What is request tracing?
* [ ] What is correlation ID?
* [ ] Why is observability important for distributed systems?

---

# 48. Microservices Networking

* [ ] How do microservices communicate?
* [ ] REST vs gRPC?
* [ ] HTTP vs gRPC?
* [ ] When would you choose REST?
* [ ] When would you choose gRPC?
* [ ] What is service discovery?
* [ ] What is an API gateway?
* [ ] Why is an API gateway useful?
* [ ] What is load balancing between microservices?
* [ ] What is service-to-service authentication?
* [ ] What happens when one microservice is unavailable?
* [ ] How should timeouts be configured between services?
* [ ] Why can retries create cascading failures?
* [ ] What is a cascading failure?

---

# 49. API Gateway

* [ ] What is an API gateway?
* [ ] Why do we need an API gateway?
* [ ] What responsibilities can an API gateway have?
* [ ] How can an API gateway perform authentication?
* [ ] How can an API gateway perform rate limiting?
* [ ] How can an API gateway perform routing?
* [ ] How can an API gateway perform load balancing?
* [ ] How can an API gateway handle TLS?
* [ ] What is the difference between an API gateway and a reverse proxy?
* [ ] What are the disadvantages of using an API gateway?

---

# 50. Rate Limiting

* [ ] What is rate limiting?
* [ ] Why do APIs need rate limiting?
* [ ] What is a request-per-second limit?
* [ ] What is token bucket?
* [ ] What is leaky bucket?
* [ ] What is fixed-window rate limiting?
* [ ] What is sliding-window rate limiting?
* [ ] How can rate limiting protect a service?
* [ ] What HTTP status code is commonly used for rate limiting?
* [ ] What is `Retry-After`?
* [ ] Where can rate limiting be implemented?
* [ ] How would you implement distributed rate limiting?

---

# 51. DNS + CDN + Load Balancer

* [ ] How can DNS route users to different servers?
* [ ] How does DNS-based load balancing work?
* [ ] How does a CDN work with DNS?
* [ ] How does a load balancer work with a CDN?
* [ ] What happens when a user requests a resource from a CDN?
* [ ] What happens on a CDN cache miss?
* [ ] What happens when the origin server is unavailable?
* [ ] How can DNS failover work?
* [ ] What are the limitations of DNS-based load balancing?

---

# 52. Networking in Cloud Applications

* [ ] What is a virtual network?
* [ ] What is a subnet in cloud networking?
* [ ] What is a public subnet?
* [ ] What is a private subnet?
* [ ] What is a security group?
* [ ] What is a network ACL?
* [ ] What is an internet gateway?
* [ ] What is NAT gateway?
* [ ] Why should databases generally not be publicly accessible?
* [ ] How does a backend service communicate with a database in a private network?
* [ ] How does a public API communicate with private services?
* [ ] Why is network segmentation important?

---

# 53. Networking + Databases

* [ ] How does an application communicate with a database?
* [ ] What is a database connection?
* [ ] What is a connection pool?
* [ ] Why do applications use connection pooling?
* [ ] What happens when the connection pool is exhausted?
* [ ] How does network latency affect database queries?
* [ ] Why should application servers and databases often be geographically close?
* [ ] What happens when the database becomes unreachable?
* [ ] How should database connection timeouts be handled?
* [ ] What is connection pooling vs HTTP keep-alive?

---

# 54. Networking + Redis

* [ ] How does an application communicate with Redis?
* [ ] What is a Redis connection?
* [ ] Why is Redis usually placed close to application servers?
* [ ] How does network latency affect Redis performance?
* [ ] What happens if Redis becomes unavailable?
* [ ] Why shouldn't an application wait forever for Redis?
* [ ] What are Redis connection timeouts?
* [ ] What is connection pooling?

---

# 55. Networking + Kafka

* [ ] How does a producer communicate with Kafka?
* [ ] How does a consumer communicate with Kafka?
* [ ] What is a Kafka broker?
* [ ] What is a Kafka topic?
* [ ] What is a partition?
* [ ] How does networking affect Kafka performance?
* [ ] What happens when a broker becomes unavailable?
* [ ] What is replication in Kafka?
* [ ] Why does Kafka use persistent connections?
* [ ] How can network bandwidth become a Kafka bottleneck?

---

# 56. Networking + Docker

* [ ] How does networking work inside Docker?
* [ ] What is a Docker network?
* [ ] What is port mapping?
* [ ] What does `-p 8080:3000` mean?
* [ ] What is the difference between container port and host port?
* [ ] How do containers communicate with each other?
* [ ] What is bridge networking?
* [ ] Why can't `localhost` inside one container refer to another container?
* [ ] How do containers discover each other?
* [ ] How does Docker DNS work?
* [ ] What causes a container-to-container connection failure?

---

# 57. Networking + Kubernetes Awareness

* [ ] Why does Kubernetes need networking?
* [ ] What is a Pod IP?
* [ ] What is a Kubernetes Service?
* [ ] Why does a Service exist?
* [ ] What is service discovery in Kubernetes?
* [ ] What is ClusterIP?
* [ ] What is NodePort?
* [ ] What is LoadBalancer service?
* [ ] What is Ingress?
* [ ] What is the difference between Service and Ingress?
* [ ] How does one Pod communicate with another Pod?
* [ ] What happens when a Pod dies?
* [ ] Why shouldn't applications depend directly on Pod IPs?

---

# 58. Network Architecture Scenarios

* [ ] Design the networking flow for a simple web application.
* [ ] Design the networking flow for a React + Node.js application.
* [ ] Design the networking flow for a mobile application + backend.
* [ ] Design networking for an e-commerce application.
* [ ] Design networking for a chat application.
* [ ] Design networking for a video streaming application.
* [ ] Design networking for a payment API.
* [ ] Design networking for a microservices system.
* [ ] Where would you place the CDN?
* [ ] Where would you place the load balancer?
* [ ] Where would you place the API gateway?
* [ ] Where would you place the database?
* [ ] Which components should be publicly accessible?
* [ ] Which components should be private?
* [ ] How would you protect internal services?
* [ ] How would you handle traffic spikes?

---

# 59. Most Repeated Fresher Interview Questions

* [ ] What is a computer network?
* [ ] Explain OSI model.
* [ ] Explain TCP/IP model.
* [ ] TCP vs UDP?
* [ ] What is TCP handshake?
* [ ] Why does TCP need a three-way handshake?
* [ ] What is UDP?
* [ ] What is IP address?
* [ ] Public IP vs private IP?
* [ ] What is DNS?
* [ ] Explain DNS resolution.
* [ ] What happens when you type a URL?
* [ ] What is HTTP?
* [ ] HTTP vs HTTPS?
* [ ] What is HTTPS?
* [ ] What is TLS?
* [ ] What is a port?
* [ ] What is a socket?
* [ ] What is MAC address?
* [ ] MAC vs IP?
* [ ] What is ARP?
* [ ] What is routing?
* [ ] What is a router?
* [ ] What is a switch?
* [ ] Router vs switch?
* [ ] What is NAT?
* [ ] What is CORS?
* [ ] What is REST?
* [ ] What is WebSocket?
* [ ] WebSocket vs HTTP?
* [ ] What is CDN?
* [ ] What is load balancing?
* [ ] What is caching?
* [ ] What is latency?
* [ ] What is bandwidth?
* [ ] What is throughput?
* [ ] What is packet loss?
* [ ] What is timeout?
* [ ] What is retry?
* [ ] What is rate limiting?
* [ ] What is reverse proxy?
* [ ] What is API gateway?
* [ ] How do you troubleshoot a network problem?

---

# 60. Comparison Questions

* [ ] OSI vs TCP/IP
* [ ] TCP vs UDP
* [ ] HTTP vs HTTPS
* [ ] HTTP/1.1 vs HTTP/2
* [ ] HTTP/2 vs HTTP/3
* [ ] TCP vs QUIC
* [ ] IPv4 vs IPv6
* [ ] Public IP vs private IP
* [ ] MAC address vs IP address
* [ ] Router vs switch
* [ ] Hub vs switch
* [ ] Port vs socket
* [ ] DNS vs DHCP
* [ ] Forward proxy vs reverse proxy
* [ ] Load balancer vs reverse proxy
* [ ] REST vs WebSocket
* [ ] WebSocket vs SSE
* [ ] Polling vs long polling
* [ ] Authentication vs authorization
* [ ] Cookie vs session
* [ ] Cookie vs JWT
* [ ] Symmetric vs asymmetric encryption
* [ ] Encryption vs hashing
* [ ] Flow control vs congestion control
* [ ] Latency vs bandwidth
* [ ] Bandwidth vs throughput
* [ ] Cache vs database
* [ ] CDN vs cache
* [ ] API gateway vs reverse proxy

---

# 61. "WHY" Questions

* [ ] Why do we need networking protocols?
* [ ] Why does the Internet use IP addresses?
* [ ] Why do we need MAC addresses?
* [ ] Why do we need ports?
* [ ] Why do we need DNS?
* [ ] Why does TCP use a handshake?
* [ ] Why is TCP reliable?
* [ ] Why is UDP faster/lower overhead?
* [ ] Why was IPv6 introduced?
* [ ] Why do we need NAT?
* [ ] Why do we need HTTPS?
* [ ] Why does TLS use certificates?
* [ ] Why does HTTP remain stateless?
* [ ] Why do APIs use status codes?
* [ ] Why do we need CORS?
* [ ] Why do browsers enforce Same-Origin Policy?
* [ ] Why do we need load balancers?
* [ ] Why do we need CDNs?
* [ ] Why do we need caching?
* [ ] Why do we need API timeouts?
* [ ] Why do we need retries?
* [ ] Why can retries be dangerous?
* [ ] Why do we need rate limiting?
* [ ] Why do distributed systems need service discovery?
* [ ] Why should databases generally remain private?

---

# 62. "HOW" Questions

* [ ] How does DNS resolve a domain?
* [ ] How does TCP establish a connection?
* [ ] How does TCP guarantee ordering?
* [ ] How does TCP detect packet loss?
* [ ] How does TCP retransmit lost data?
* [ ] How does TCP control congestion?
* [ ] How does NAT work?
* [ ] How does a router forward packets?
* [ ] How does ARP resolve an IP to a MAC?
* [ ] How does HTTPS secure communication?
* [ ] How does TLS verify a server?
* [ ] How does HTTP/2 multiplex requests?
* [ ] How does HTTP/3 use QUIC?
* [ ] How does a browser send an HTTP request?
* [ ] How does a CDN serve content?
* [ ] How does a load balancer distribute traffic?
* [ ] How does API caching work?
* [ ] How does CORS work?
* [ ] How does a WebSocket connection work?
* [ ] How does authentication work over HTTP?
* [ ] How does a reverse proxy work?
* [ ] How does a rate limiter work?
* [ ] How does a service communicate with another service?

---

# 63. "WHEN" Questions

* [ ] When should TCP be used?
* [ ] When should UDP be used?
* [ ] When should WebSockets be used?
* [ ] When should SSE be used?
* [ ] When should polling be used?
* [ ] When should you use a CDN?
* [ ] When should you use caching?
* [ ] When should you use a reverse proxy?
* [ ] When should you use a load balancer?
* [ ] When should you use an API gateway?
* [ ] When should an API retry a request?
* [ ] When should an API NOT retry?
* [ ] When should an API return 401?
* [ ] When should an API return 403?
* [ ] When should an API return 404?
* [ ] When should an API return 409?
* [ ] When should an API return 429?
* [ ] When should an API return 500?
* [ ] When should an API return 502?
* [ ] When should an API return 503?
* [ ] When should an API return 504?

---

# 64. Whiteboard Questions

Be able to draw and explain:

* [ ] OSI model
* [ ] TCP/IP model
* [ ] TCP three-way handshake
* [ ] TCP connection termination
* [ ] DNS resolution
* [ ] Browser request lifecycle
* [ ] HTTP request/response
* [ ] HTTPS/TLS handshake at a high level
* [ ] Client → Router → Internet → Server
* [ ] Client → CDN → Load Balancer → Backend
* [ ] React → API Gateway → Backend → Database
* [ ] Microservice → Service Discovery → Another Microservice
* [ ] Public subnet vs private subnet
* [ ] Reverse proxy architecture
* [ ] WebSocket architecture

---

# 65. Final 24-Hour Priority

## 🔴 Tier 1: MUST MASTER

* [ ] Networking fundamentals
* [ ] OSI model
* [ ] TCP/IP model
* [ ] IP address
* [ ] MAC address
* [ ] Ports
* [ ] Sockets
* [ ] DNS
* [ ] TCP
* [ ] TCP three-way handshake
* [ ] TCP reliability
* [ ] TCP flow control
* [ ] TCP congestion control
* [ ] UDP
* [ ] TCP vs UDP
* [ ] HTTP
* [ ] HTTP methods
* [ ] HTTP status codes
* [ ] HTTP headers
* [ ] HTTPS
* [ ] TLS
* [ ] REST API
* [ ] CORS
* [ ] Cookies
* [ ] Authentication
* [ ] Browser networking
* [ ] "What happens when you type a URL?"

## 🟠 Tier 2: Strong SWE Knowledge

* [ ] HTTP/2
* [ ] HTTP/3
* [ ] QUIC
* [ ] WebSockets
* [ ] SSE
* [ ] CDN
* [ ] Caching
* [ ] Reverse proxy
* [ ] Load balancing
* [ ] NAT
* [ ] Rate limiting
* [ ] API timeouts
* [ ] Retry
* [ ] Exponential backoff
* [ ] API gateway
* [ ] Network troubleshooting
* [ ] Distributed-system networking

## 🟡 Tier 3: Awareness

* [ ] Subnetting
* [ ] IPv6 details
* [ ] DHCP
* [ ] Firewalls
* [ ] Cloud networking
* [ ] Docker networking
* [ ] Kubernetes networking
* [ ] Kafka networking
* [ ] gRPC
* [ ] Advanced routing
* [ ] Network security details

---

# 66. Final Interview Simulation

## Round 1: Fundamentals

* [ ] What is networking?
* [ ] Explain OSI.
* [ ] Explain TCP/IP.
* [ ] Explain IP address.
* [ ] Explain MAC address.
* [ ] Explain ports.
* [ ] Explain sockets.
* [ ] Explain DNS.
* [ ] Explain routing.
* [ ] Explain NAT.

## Round 2: TCP/IP

* [ ] Explain TCP.
* [ ] Explain three-way handshake.
* [ ] Explain TCP reliability.
* [ ] Explain flow control.
* [ ] Explain congestion control.
* [ ] Explain UDP.
* [ ] Compare TCP and UDP.
* [ ] Explain packet loss.
* [ ] Explain retransmission.
* [ ] Explain TIME_WAIT.

## Round 3: Web

* [ ] Explain HTTP.
* [ ] Explain HTTPS.
* [ ] Explain TLS.
* [ ] Explain REST.
* [ ] Explain HTTP methods.
* [ ] Explain HTTP status codes.
* [ ] Explain HTTP caching.
* [ ] Explain CORS.
* [ ] Explain WebSockets.
* [ ] Explain HTTP/2 and HTTP/3.

## Round 4: Software Engineering

* [ ] Explain CDN.
* [ ] Explain caching.
* [ ] Explain reverse proxy.
* [ ] Explain load balancing.
* [ ] Explain API gateway.
* [ ] Explain rate limiting.
* [ ] Explain retries.
* [ ] Explain timeouts.
* [ ] Explain service discovery.
* [ ] Explain network failure handling.

## Round 5: Scenario Questions

* [ ] API works locally but not in production. How would you investigate?
* [ ] API works in Postman but not in the browser. Why?
* [ ] API returns 504 randomly. What would you check?
* [ ] DNS works on one machine but not another. What would you investigate?
* [ ] Server is running but port is unreachable. What could be wrong?
* [ ] Website is slow only for users in another country. What would you investigate?
* [ ] Backend crashes under high traffic. Which networking components could help?
* [ ] Thousands of clients need real-time updates. Which communication approach would you choose?
* [ ] An API receives thousands of requests per second. How would you protect it?
* [ ] A service dependency becomes unavailable. How should your application behave?

---

# 67. Final Confidence Test

Without looking at notes, explain these aloud:

* [ ] What happens when you type a URL?
* [ ] How does DNS work?
* [ ] How does TCP work?
* [ ] Explain the TCP three-way handshake.
* [ ] Explain TCP reliability.
* [ ] TCP vs UDP.
* [ ] How does HTTPS work?
* [ ] Explain TLS at a high level.
* [ ] HTTP vs HTTPS.
* [ ] Explain REST API.
* [ ] Explain CORS.
* [ ] Explain WebSocket.
* [ ] Explain HTTP/2.
* [ ] Explain HTTP/3 and QUIC.
* [ ] Explain CDN.
* [ ] Explain caching.
* [ ] Explain reverse proxy.
* [ ] Explain load balancing.
* [ ] Explain API gateway.
* [ ] Explain rate limiting.
* [ ] Explain timeout and retry.
* [ ] Explain exponential backoff.
* [ ] Explain authentication vs authorization.
* [ ] Explain browser networking.
* [ ] Explain how you would troubleshoot a slow API.
* [ ] Explain how you would troubleshoot a connection failure.
* [ ] Explain how networking fits into a React + Node.js application.

---

# 68. SWE Fresher Confidence Rule

For every major networking concept, don't stop at the definition.

Be able to answer:

**What is it?**

**Why do we need it?**

**How does it work?**

**When is it used?**

**When would you NOT use it?**

**Give one real software-engineering example.**

**What happens if it fails?**

**What performance/security trade-off exists?**

---

# Final Target

After completing this question bank, you should be comfortable when an interviewer asks:

> "Explain DNS."

> "What happens when you type a URL?"

> "TCP vs UDP?"

> "Why does TCP need a three-way handshake?"

> "How does HTTPS work?"

> "What is CORS?"

> "What is a reverse proxy?"

> "How does a load balancer work?"

> "How would you troubleshoot a slow API?"

> "How would you design communication between services?"

> "Why would you choose WebSocket instead of HTTP?"

The goal is not to become a network administrator.

The goal is to become a **Software Engineer who understands what happens underneath the API call.** 🌐

If you can explain the **Tier 1 topics + URL lifecycle + TCP + HTTP/HTTPS + DNS + CORS + API reliability + troubleshooting scenarios** without notes, you have covered the networking territory most relevant to a fresher SWE interview.
