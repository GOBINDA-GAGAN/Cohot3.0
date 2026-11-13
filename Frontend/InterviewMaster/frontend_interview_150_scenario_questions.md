# Frontend Interview Scenario Bank
## 150 Production-Oriented Questions for Fresher+ Frontend Engineers

> **Purpose:** Evaluate frontend engineering judgment without testing JavaScript or React syntax.
>
> **Target:** Strong fresher / entry-level frontend engineer who should be capable of reasoning about real web applications.
>
> **Interview philosophy:** Do not judge candidates only by whether they know terminology. Look for structured thinking, trade-offs, debugging ability, performance awareness, scalability, security, accessibility, and the ability to explain *why*.

---

# Interview Decision Tree

```text
Frontend Scenario Interview
│
├── 01. Web & Browser Fundamentals ───────────── Q01–Q15
│
├── 02. HTTP, Networking & APIs ──────────────── Q16–Q30
│
├── 03. Caching & Data Delivery ──────────────── Q31–Q45
│
├── 04. Rendering & Browser Performance ──────── Q46–Q60
│
├── 05. Frontend Performance Engineering ─────── Q61–Q75
│
├── 06. Scalability & Architecture ───────────── Q76–Q90
│
├── 07. Reliability, Resilience & UX ─────────── Q91–Q105
│
├── 08. Security ──────────────────────────────── Q106–Q120
│
├── 09. Accessibility & UX Engineering ───────── Q121–Q130
│
├── 10. Debugging & Production Incidents ─────── Q131–Q140
│
└── 11. Senior-Fresher Design Scenarios ──────── Q141–Q150
```

---

# How to Use This Bank

For each question:

1. Give the **scenario**.
2. Let the candidate propose an approach.
3. Ask the **follow-up questions**.
4. Push on trade-offs.
5. Ask what they would measure.
6. Ask what happens when their first solution fails.
7. Separate memorized terminology from actual engineering reasoning.

## Hiring Signal

### Strong Hire Signal
Candidate:
- clarifies requirements before designing;
- identifies bottlenecks;
- understands browser/network behavior;
- discusses trade-offs;
- considers failure states;
- knows what to measure;
- thinks about cache invalidation;
- distinguishes frontend bottlenecks from backend/network bottlenecks;
- considers security and accessibility naturally;
- can simplify an over-engineered solution.

### Borderline Signal
Candidate:
- knows common concepts;
- can solve straightforward scenarios;
- needs prompting for trade-offs;
- understands performance at a basic level;
- has limited production debugging experience.

### Weak Signal
Candidate:
- gives only definitions;
- proposes libraries instead of reasoning;
- ignores network cost;
- ignores failure states;
- cannot explain why a solution works;
- treats caching as "store everything locally";
- treats performance as only "reduce bundle size";
- ignores accessibility/security.

---

# 01. Web & Browser Fundamentals
## Q01–Q15

### Q01. A user enters a URL and presses Enter. Walk through what happens until the page becomes usable.
**Follow-ups**
- Where does DNS happen?
- When is the TCP connection created?
- Where does TLS fit?
- When does the browser start rendering?
- Which steps can happen in parallel?
- Which stage would you investigate if TTFB is high?

**Look for:** DNS, connection establishment, TLS, HTTP request, response, parsing, resource discovery, rendering, scripting, network waterfall.

---

### Q02. A page works on localhost but takes 5 seconds before showing anything in production. How would you investigate?
**Follow-ups**
- What would you inspect first?
- How do you separate network delay from rendering delay?
- Which browser tools would you use?
- What metrics would you compare between environments?

**Look for:** waterfall, TTFB, server response, CDN, compression, cache, CPU, bundle/resource timing.

---

### Q03. Why can a page display something before all its resources have finished downloading?
**Follow-ups**
- Which resources block initial rendering?
- What does progressive rendering mean?
- Can images continue loading after the first paint?

**Look for:** HTML parsing, CSS, critical resources, incremental rendering.

---

### Q04. A CSS file is 2 MB. What problems can this create beyond bandwidth usage?
**Follow-ups**
- How can CSS affect rendering?
- What happens on a slow mobile CPU?
- How would you reduce its impact?

**Look for:** parsing, style calculation, render blocking, unused CSS, critical CSS.

---

### Q05. The HTML document is only 20 KB, but the page still feels slow. What could explain this?
**Follow-ups**
- What resources can dominate loading?
- How would you verify your hypothesis?
- Could third-party scripts be responsible?

**Look for:** JS, fonts, images, APIs, third parties, CPU work.

---

### Q06. A page has 100 images below the fold. Would you load all of them immediately?
**Follow-ups**
- What would you do instead?
- When is lazy loading harmful?
- How would you prioritize the hero image?

**Look for:** lazy loading, priority, responsive images, LCP.

---

### Q07. The browser cache contains an old CSS file after deployment. Users see broken styling. Why?
**Follow-ups**
- How would you prevent this?
- Would changing the filename help?
- What is cache busting?

**Look for:** immutable asset names, content hashing, cache-control.

---

### Q08. A page contains many fonts. Why can fonts affect perceived performance?
**Follow-ups**
- What is FOIT?
- What is FOUT?
- How can font loading be optimized?
- Would you preload every font?

**Look for:** font-display, subset, preload trade-offs, font count.

---

### Q09. A user opens the same website 20 times. Which resources might not require another network request?
**Follow-ups**
- What determines that?
- Is browser caching always guaranteed?
- How does cache validation work?

**Look for:** HTTP cache, memory/disk cache, validation, cache-control.

---

### Q10. Why might two users receive different versions of the same frontend?
**Follow-ups**
- Could CDN caching cause this?
- Could service workers cause this?
- Could deployment propagation cause it?

**Look for:** caching layers, service workers, CDN propagation, versioning.

---

### Q11. A page works in Chrome but behaves differently in Safari. How would you approach the investigation?
**Follow-ups**
- Would you immediately rewrite the implementation?
- How would you isolate browser-specific behavior?
- What compatibility information would you verify?

**Look for:** standards, browser differences, feature support, progressive enhancement.

---

### Q12. Why does a page sometimes feel slower after adding a visually small feature?
**Follow-ups**
- Could a tiny UI feature increase CPU work?
- Could it add network requests?
- How would you prove the regression?

**Look for:** performance budget, profiling, resource waterfall, runtime work.

---

### Q13. A page is blank for several seconds and then appears instantly. What categories of problems could cause this?
**Follow-ups**
- How would you distinguish network blocking from rendering blocking?
- What browser metrics would help?

**Look for:** blocking requests, JS execution, CSS, server delay, hydration-like work.

---

### Q14. What is the difference between "page loaded" and "page usable"?
**Follow-ups**
- Which metrics represent user experience better?
- Can a page have a good load event but poor responsiveness?

**Look for:** FCP, LCP, INP, visual completeness, interaction readiness.

---

### Q15. A user reports that the page loads quickly but scrolling is laggy. What does that tell you?
**Follow-ups**
- Is this necessarily a network problem?
- How would you profile it?
- What browser work can cause scroll jank?

**Look for:** main-thread work, layout, paint, compositing, event handlers, animations.

---

# 02. HTTP, Networking & APIs
## Q16–Q30

### Q16. An API request takes 2 seconds. How would you determine where the 2 seconds are being spent?
**Follow-ups**
- DNS?
- connection?
- TLS?
- server processing?
- response download?
- frontend processing?

**Look for:** timing breakdown and evidence-driven debugging.

---

### Q17. Your frontend makes 30 API calls when opening a dashboard. Is that automatically bad?
**Follow-ups**
- When could 30 calls be reasonable?
- How would you reduce unnecessary calls?
- Would you always combine them?

**Look for:** request waterfall, parallelism, payload size, aggregation, caching.

---

### Q18. A page has five independent API requests. Would you execute them sequentially or in parallel?
**Follow-ups**
- When would sequential requests be necessary?
- What if one request is much slower?
- What if the server rate-limits clients?

**Look for:** dependency graph, parallelism, rate limits, failure isolation.

---

### Q19. An API returns 10 MB for a screen that displays only 20 records. What would you change?
**Follow-ups**
- Pagination?
- filtering?
- field selection?
- compression?
- server-side sorting?

**Look for:** data minimization and API contract design.

---

### Q20. Your frontend sends a request every time a user types into a search box. What problems can occur?
**Follow-ups**
- How would you reduce requests?
- What if responses arrive out of order?
- Would debounce solve everything?

**Look for:** debounce, cancellation, stale responses, server load.

---

### Q21. A user clicks "Pay" twice because the first request appears slow. How should the frontend behave?
**Follow-ups**
- Is disabling the button enough?
- What should the backend guarantee?
- What happens if the response is lost after payment succeeds?

**Look for:** idempotency, UI state, backend correctness, retry semantics.

---

### Q22. A request fails because of a network interruption. Should the frontend automatically retry?
**Follow-ups**
- Which requests are safe to retry?
- How many times?
- What backoff strategy would you use?
- When should the user be informed?

**Look for:** idempotency, exponential backoff, retry limits.

---

### Q23. An API returns HTTP 200 but the UI still cannot use the data. How would you debug it?
**Follow-ups**
- What if the payload schema changed?
- What if the response contains an application-level error?

**Look for:** HTTP status vs application state, schema validation, observability.

---

### Q24. What is the practical frontend impact of HTTP compression?
**Follow-ups**
- What data benefits most?
- Does compression always improve performance?
- What CPU trade-off exists?

**Look for:** transfer size vs CPU cost, text assets.

---

### Q25. Why might HTTP/2 improve a page with many assets?
**Follow-ups**
- How is it different from HTTP/1.1?
- Does it mean request count no longer matters?

**Look for:** multiplexing, connection reuse, header compression, request overhead.

---

### Q26. A CDN is enabled but users still experience high latency. What would you inspect?
**Follow-ups**
- Is the HTML cached?
- Are API calls cached?
- Is the user being routed to the correct edge?
- Is cache hit ratio healthy?

**Look for:** cacheability, origin latency, geography, cache misses.

---

### Q27. What happens when a browser sends an OPTIONS request before an API request?
**Follow-ups**
- When can this happen?
- Why does the browser do it?
- What frontend/backend configuration can affect it?

**Look for:** CORS preflight, non-simple requests, origin rules.

---

### Q28. Your API is geographically far from your users. What frontend-visible problems can occur?
**Follow-ups**
- How can architecture reduce latency?
- Would CDN solve API latency?

**Look for:** RTT, edge delivery, regional infrastructure, request reduction.

---

### Q29. A user loses internet while submitting a form. What should the UI communicate?
**Follow-ups**
- Should the form data remain?
- Should submission retry automatically?
- How would you avoid duplicate submission?

**Look for:** state preservation, retry strategy, idempotency.

---

### Q30. Your API has a 300 ms target but the frontend experiences 1.5 seconds. What could be happening?
**Follow-ups**
- How would you prove where the extra time is?
- Could browser processing account for it?
- Could multiple sequential calls be involved?

**Look for:** end-to-end latency thinking.

---

# 03. Caching & Data Delivery
## Q31–Q45

### Q31. Explain a caching strategy for static frontend assets.
**Follow-ups**
- Which files can be cached for a year?
- How do you safely deploy updates?
- What role does content hashing play?

**Look for:** immutable versioned assets.

---

### Q32. You cache an API response for 10 minutes. What could go wrong?
**Follow-ups**
- What data is unsafe to cache?
- How would you handle stale data?
- What happens after a user updates the resource?

**Look for:** freshness, invalidation, consistency.

---

### Q33. "Cache invalidation is difficult." Give a real frontend example.
**Follow-ups**
- How would you invalidate related data?
- Would TTL alone be enough?

**Look for:** dependency-based invalidation and stale state.

---

### Q34. A product catalog changes frequently but images change rarely. How would you cache them differently?
**Follow-ups**
- What should have long TTL?
- What should have shorter TTL?
- Would you version images?

**Look for:** differentiated cache policy.

---

### Q35. A user updates their profile but still sees the old profile photo. List every likely caching layer.
**Follow-ups**
- Browser?
- CDN?
- service worker?
- image URL?
- application state?

**Look for:** layered cache debugging.

---

### Q36. When would you prefer stale-while-revalidate behavior?
**Follow-ups**
- What user experiences does it improve?
- What data should not use it?

**Look for:** fast display + background refresh and consistency trade-off.

---

### Q37. Your application has 1 million daily users. Which frontend resources should ideally be served from a CDN?
**Follow-ups**
- What about HTML?
- What about authenticated API responses?
- What about personalized data?

**Look for:** public immutable assets vs personalized content.

---

### Q38. A cache has a 95% hit rate. Is that automatically good?
**Follow-ups**
- What does hit ratio hide?
- Could 95% still produce poor UX?
- What other metrics matter?

**Look for:** latency, object size, miss cost, freshness.

---

### Q39. You cache a user's dashboard locally. What happens when the same account is opened on another device?
**Follow-ups**
- How would you reconcile changes?
- What should be authoritative?

**Look for:** local cache vs server source of truth.

---

### Q40. A user goes offline and opens your web application. What could still work?
**Follow-ups**
- What should be cached?
- How would you indicate stale data?
- What happens when connectivity returns?

**Look for:** offline-first thinking, service worker concepts, synchronization.

---

### Q41. When should you avoid client-side caching?
**Follow-ups**
- Give examples of sensitive or highly volatile data.
- What security concerns exist?

**Look for:** financial, authentication, permissions, real-time state.

---

### Q42. A cached response contains user-specific data. What security mistake could expose it?
**Follow-ups**
- How can shared caches become dangerous?
- Which cache headers matter?

**Look for:** private/public caching boundaries.

---

### Q43. Two browser tabs display different versions of the same data. Why?
**Follow-ups**
- How could you synchronize them?
- Is polling always necessary?

**Look for:** shared state, storage events, broadcast mechanisms, server updates.

---

### Q44. A deployment changes the frontend bundle but old HTML references old assets. How should your deployment strategy handle this?
**Follow-ups**
- Can old and new assets coexist?
- Why is atomic deployment useful?

**Look for:** immutable assets, deployment compatibility.

---

### Q45. Design a caching strategy for a news homepage.
**Follow-ups**
- What can be cached for hours?
- What should refresh quickly?
- How would you handle breaking news?
- How would you prevent cache stampedes?

**Look for:** layered TTL, revalidation, CDN, origin protection.

---

# 04. Rendering & Browser Performance
## Q46–Q60

### Q46. What happens during browser rendering after HTML and CSS are available?
**Follow-ups**
- Where do layout and paint occur?
- Which operations can trigger expensive work?

**Look for:** DOM/CSSOM, render tree, layout, paint, compositing.

---

### Q47. A page has a large layout shift while loading. What could cause it?
**Follow-ups**
- Images?
- fonts?
- advertisements?
- dynamic content?

**Look for:** reserved dimensions, stable layout, CLS.

---

### Q48. A button click causes the entire page to become slow for 500 ms. How would you investigate?
**Follow-ups**
- What profile would you record?
- What would you look for in the main thread?

**Look for:** CPU profile, long tasks, scripting/layout/paint.

---

### Q49. An animation drops frames on low-end phones but works on your laptop. Why?
**Follow-ups**
- What work happens per frame?
- Which properties are cheaper to animate?
- How would you test realistically?

**Look for:** frame budget, compositing, device constraints.

---

### Q50. Why can excessive DOM size hurt performance?
**Follow-ups**
- Does DOM size affect only initial load?
- How can it affect layout and memory?

**Look for:** style calculation, layout, memory, interaction cost.

---

### Q51. A long list contains 50,000 rows. How would you render it?
**Follow-ups**
- Would pagination solve every problem?
- What is virtualization?
- What trade-offs does virtualization introduce?

**Look for:** windowing/virtualization, memory, accessibility.

---

### Q52. Why can forced synchronous layout be expensive?
**Follow-ups**
- What happens when layout is invalidated and immediately queried?
- How would you reduce layout thrashing?

**Look for:** read/write separation, batching.

---

### Q53. A dashboard contains 20 charts. Opening it causes CPU usage to spike. What would you investigate?
**Follow-ups**
- Should every chart render immediately?
- Can charts be deferred?
- What should be prioritized?

**Look for:** lazy rendering, visibility, data reduction, scheduling.

---

### Q54. What is the difference between optimizing network performance and rendering performance?
**Follow-ups**
- Give a scenario where network is fast but rendering is slow.
- Give the opposite.

**Look for:** complete performance model.

---

### Q55. A page's Largest Contentful Paint is poor. How would you investigate it?
**Follow-ups**
- What resource represents the LCP?
- Could server latency affect it?
- Could an image be the bottleneck?

**Look for:** LCP element identification, critical path.

---

### Q56. A site has excellent LCP but poor interaction responsiveness. What does that suggest?
**Follow-ups**
- Which metric would you inspect?
- What runtime work could cause this?

**Look for:** INP, main-thread contention.

---

### Q57. A third-party analytics script consumes 400 ms of main-thread time. What would you do?
**Follow-ups**
- Would you remove it immediately?
- Can it load later?
- How would you measure business impact?

**Look for:** third-party governance, defer/async, cost-benefit reasoning.

---

### Q58. A page has many CSS animations. How would you decide whether they are hurting performance?
**Follow-ups**
- What tools would you use?
- Which device classes matter?

**Look for:** profiling rather than guessing.

---

### Q59. Why can an image be the largest content element even if its file size is small?
**Follow-ups**
- What matters besides bytes?
- What about dimensions and rendering timing?

**Look for:** visual prominence and timing.

---

### Q60. A web page uses a very large hero image. Design an optimization strategy.
**Follow-ups**
- Responsive formats?
- Compression?
- Preload?
- Lazy loading?
- CDN?
- Priority?

**Look for:** critical resource prioritization.

---

# 05. Frontend Performance Engineering
## Q61–Q75

### Q61. You have a 5 MB frontend bundle. What is your investigation process?
**Follow-ups**
- How would you identify the largest contributors?
- What is code splitting?
- Would minification alone solve it?

**Look for:** bundle analysis, dependency cost, splitting.

---

### Q62. What is the difference between reducing transferred bytes and reducing JavaScript execution cost?
**Follow-ups**
- Can a compressed bundle still be expensive?
- Why does mobile CPU matter?

**Look for:** download vs parse/compile/execute.

---

### Q63. A feature is used by only 2% of users but adds 1 MB to every initial load. What would you consider?
**Follow-ups**
- Would you lazy load it?
- What UX trade-off exists?

**Look for:** route/feature-level code splitting.

---

### Q64. A page loads quickly for developers but slowly for users on mobile networks. What should change in your testing strategy?
**Follow-ups**
- Which network conditions?
- Which devices?
- Which performance metrics?

**Look for:** realistic lab + field testing.

---

### Q65. Your Lighthouse score is 95, but users complain the website is slow. How can both be true?
**Follow-ups**
- What does lab testing miss?
- What are real-user metrics?

**Look for:** RUM, variability, device/network diversity.

---

### Q66. What would you include in a frontend performance budget?
**Follow-ups**
- Bundle size?
- image bytes?
- number of requests?
- LCP?
- INP?
- CLS?

**Look for:** measurable budgets tied to user experience.

---

### Q67. A website becomes slower after every major feature release. How would you prevent performance regression?
**Follow-ups**
- What should CI measure?
- Would you block deployments?
- What thresholds would you choose?

**Look for:** performance CI, budgets, monitoring.

---

### Q68. You need to improve performance but have only one day. How would you prioritize?
**Follow-ups**
- What data would determine priority?
- Would you optimize a low-traffic page with a terrible score?

**Look for:** impact × effort reasoning.

---

### Q69. A page makes many small API requests. Would combining them into one endpoint always improve performance?
**Follow-ups**
- What are the disadvantages?
- Could one huge endpoint become worse?

**Look for:** waterfall vs payload coupling.

---

### Q70. A user opens a page and immediately navigates away. Should all resources continue loading?
**Follow-ups**
- What work could be cancelled?
- Why does cancellation matter?

**Look for:** aborting unnecessary requests and lifecycle awareness.

---

### Q71. How would you optimize a slow e-commerce product page?
**Follow-ups**
- What would you prioritize?
- Which resources are critical?
- Which can load after interaction?

**Look for:** product image, price, CTA, reviews, recommendations, third parties.

---

### Q72. How would you optimize a large admin dashboard differently from a marketing homepage?
**Follow-ups**
- What differs in user behavior?
- What can be deferred?

**Look for:** application-specific performance strategy.

---

### Q73. A page's memory usage continuously increases while navigating between screens. What might be happening?
**Follow-ups**
- How would you detect a memory leak?
- What evidence would you collect?

**Look for:** heap snapshots, detached resources, listeners, retained objects.

---

### Q74. A frontend performance optimization makes the code significantly more complex. When should you reject the optimization?
**Follow-ups**
- How do you quantify benefit?
- What maintenance cost matters?

**Look for:** engineering trade-offs, evidence.

---

### Q75. Design a performance monitoring strategy for a production website.
**Follow-ups**
- Which metrics?
- Which user segments?
- How would you detect regressions?
- What alerts should exist?

**Look for:** RUM, Core Web Vitals, errors, release correlation.

---

# 06. Scalability & Frontend Architecture
## Q76–Q90

### Q76. Your frontend grows from 5 screens to 200 screens. What architectural problems appear?
**Follow-ups**
- Routing?
- shared UI?
- API contracts?
- testing?
- build time?

**Look for:** modularity and ownership boundaries.

---

### Q77. A frontend application is used by 10,000 users today and could reach 10 million. Which frontend concerns actually scale?
**Follow-ups**
- Does frontend code itself scale with user count?
- Which backend/CDN concerns matter?

**Look for:** static delivery, CDN, APIs, caching, observability.

---

### Q78. Design a frontend architecture for a large e-commerce application.
**Follow-ups**
- How would you separate domains?
- What belongs in shared infrastructure?
- How would teams work independently?

**Look for:** domain boundaries, shared foundations.

---

### Q79. Three teams need the same UI components. How would you prevent inconsistent implementations?
**Follow-ups**
- Shared component library?
- Design system?
- Versioning?
- Governance?

**Look for:** reusable foundations without excessive coupling.

---

### Q80. A shared UI component becomes a bottleneck because every team must wait for changes. What would you do?
**Follow-ups**
- Central ownership?
- Contribution model?
- Versioning?

**Look for:** organizational and technical scalability.

---

### Q81. Your frontend depends on five backend teams. One API frequently changes its response format. How would you protect the frontend?
**Follow-ups**
- API versioning?
- contract testing?
- adapter layer?

**Look for:** contract stability.

---

### Q82. Design a frontend for a dashboard with millions of records.
**Follow-ups**
- Would you download all records?
- Where should filtering happen?
- How would sorting work?

**Look for:** server-side pagination/filtering, virtualization.

---

### Q83. How would you design a search interface for tens of millions of products?
**Follow-ups**
- Should search happen in the browser?
- What belongs on the server?
- How would autocomplete behave?

**Look for:** frontend as client of search infrastructure.

---

### Q84. A frontend team wants micro-frontends because the application is large. What questions should you ask before accepting the architecture?
**Follow-ups**
- Team boundaries?
- deployment independence?
- shared dependencies?
- performance?
- UX consistency?

**Look for:** architecture justified by organizational constraints.

---

### Q85. When can micro-frontends make a frontend worse?
**Follow-ups**
- Duplicate dependencies?
- navigation complexity?
- shared state?
- deployment complexity?

**Look for:** trade-offs, not buzzwords.

---

### Q86. A large application has multiple versions of the same design-system package. What problems can arise?
**Follow-ups**
- Bundle size?
- visual inconsistency?
- runtime duplication?

**Look for:** dependency governance.

---

### Q87. Design a frontend architecture that supports independent deployment without breaking users.
**Follow-ups**
- How would version compatibility work?
- What happens during partial deployment?

**Look for:** backwards compatibility and rollout strategy.

---

### Q88. How would you design frontend observability for a large application?
**Follow-ups**
- Errors?
- performance?
- API failures?
- user journey?
- release tracking?

**Look for:** correlation between release, user, browser, API, and UX.

---

### Q89. A new feature doubles frontend bundle size. Product insists it must ship. How do you architect the feature?
**Follow-ups**
- Can it be isolated?
- Can it load only when needed?
- Can heavy computation move elsewhere?

**Look for:** lazy boundaries and progressive loading.

---

### Q90. Design a scalable frontend for a global application with users in India, Europe, and the US.
**Follow-ups**
- CDN?
- localization?
- regional APIs?
- latency?
- caching?
- compliance?

**Look for:** geography-aware delivery.

---

# 07. Reliability, Resilience & UX
## Q91–Q105

### Q91. Your API is down for 10 minutes. What should a good frontend do?
**Follow-ups**
- Should every screen show an error?
- What can remain usable?
- What should be retried?

**Look for:** graceful degradation.

---

### Q92. An API returns slowly instead of failing. How should the UI behave?
**Follow-ups**
- Spinner forever?
- timeout?
- skeleton?
- retry?
- stale data?

**Look for:** bounded waiting and meaningful states.

---

### Q93. Design all states for a data-fetching screen.
**Follow-ups**
- Loading?
- empty?
- success?
- partial?
- error?
- offline?
- stale?

**Look for:** state completeness.

---

### Q94. A dashboard has 10 widgets and one API fails. Should the whole dashboard fail?
**Follow-ups**
- How would you isolate failures?
- When is all-or-nothing appropriate?

**Look for:** component-level resilience.

---

### Q95. What is graceful degradation in frontend engineering?
**Follow-ups**
- Give a real scenario.
- What functionality can be sacrificed first?

**Look for:** core functionality preservation.

---

### Q96. A user refreshes a form after filling 20 fields. How could you reduce data loss?
**Follow-ups**
- Local persistence?
- browser recovery?
- security concerns?

**Look for:** appropriate persistence.

---

### Q97. Your frontend receives stale data while a fresh API request is running. Should you hide the stale data?
**Follow-ups**
- When is stale data useful?
- How should the UI communicate freshness?

**Look for:** stale-while-revalidate UX.

---

### Q98. A user is on a slow network. What UX decisions should change?
**Follow-ups**
- Image quality?
- loading states?
- request count?
- retries?

**Look for:** adaptive experience.

---

### Q99. A user opens a page with no network connection. What should the application communicate?
**Follow-ups**
- How do you distinguish offline from server failure?
- Can cached content still be shown?

**Look for:** failure classification.

---

### Q100. A request takes 30 seconds because of a backend problem. Should the frontend wait?
**Follow-ups**
- What timeout would you choose?
- What happens after timeout?

**Look for:** bounded latency and recovery.

---

### Q101. A user submits a form and closes the tab immediately. How would you think about reliability?
**Follow-ups**
- Can the browser guarantee delivery?
- What should the server support?

**Look for:** asynchronous processing and server-side guarantees.

---

### Q102. Your application receives intermittent 500 errors from an API. What frontend behavior is appropriate?
**Follow-ups**
- Retry?
- exponential backoff?
- user message?
- logging?

**Look for:** transient vs permanent failure.

---

### Q103. A user reports "sometimes the button does nothing." How would you investigate?
**Follow-ups**
- Network?
- UI state?
- browser console?
- race condition?
- disabled state?

**Look for:** systematic debugging.

---

### Q104. How would you design a reliable file-upload experience?
**Follow-ups**
- Large files?
- progress?
- cancellation?
- retry?
- interrupted upload?

**Look for:** chunking/resume concepts, progress, error handling.

---

### Q105. A user uploads a 500 MB video over mobile internet. Design the frontend experience.
**Follow-ups**
- Should the browser upload it in one request?
- How would resume work?
- What should happen if connection drops?

**Look for:** chunked/resumable upload architecture.

---

# 08. Security
## Q106–Q120

### Q106. A frontend stores an authentication token in browser storage. What security questions should you ask?
**Follow-ups**
- What happens during XSS?
- Are there safer alternatives?
- What is the threat model?

**Look for:** token exposure and secure session design.

---

### Q107. A user can modify a request in DevTools and change `userId=123` to `userId=124`. Is that a frontend security bug?
**Follow-ups**
- Where must authorization happen?
- Can frontend validation protect the resource?

**Look for:** server-side authorization.

---

### Q108. A frontend hides an admin button for normal users. Is the application secure?
**Follow-ups**
- What if the user manually calls the API?
- What must the backend verify?

**Look for:** UI visibility is not authorization.

---

### Q109. Explain an XSS scenario from a frontend perspective.
**Follow-ups**
- Where can untrusted content enter?
- How can output handling reduce risk?
- What role can CSP play?

**Look for:** untrusted input/output context.

---

### Q110. A comment system displays user-generated HTML. What risks should you consider?
**Follow-ups**
- Sanitization?
- encoding?
- script injection?
- trusted vs untrusted HTML?

**Look for:** content sanitization.

---

### Q111. What is CSRF and when should frontend engineers care about it?
**Follow-ups**
- Why do cookies matter?
- What defenses can exist?

**Look for:** browser credential behavior and server-side protections.

---

### Q112. A frontend application is embedded inside an iframe. What security questions arise?
**Follow-ups**
- Who can embed it?
- What browser policies matter?
- What is clickjacking?

**Look for:** framing policies and isolation.

---

### Q113. Your application loads third-party scripts. What security risks does that introduce?
**Follow-ups**
- What if the third party is compromised?
- How would you minimize exposure?

**Look for:** supply-chain and runtime trust.

---

### Q114. A package used by the frontend is compromised. What defenses should a team have?
**Follow-ups**
- Dependency review?
- lockfiles?
- scanning?
- minimizing permissions?

**Look for:** supply-chain security.

---

### Q115. A production frontend accidentally exposes a private API key. What should happen?
**Follow-ups**
- Can frontend secrets really be secret?
- What remediation steps follow?

**Look for:** public client boundary and key rotation.

---

### Q116. Why should sensitive authorization decisions never rely only on frontend state?
**Follow-ups**
- What can a malicious user modify?
- Where is the trusted boundary?

**Look for:** browser is an untrusted environment.

---

### Q117. Design a secure password-reset flow from a frontend perspective.
**Follow-ups**
- What should appear in URLs?
- How should expired links behave?
- What information should error messages reveal?

**Look for:** token handling, leakage prevention, enumeration resistance.

---

### Q118. A website displays user-uploaded images. What security issues should be considered?
**Follow-ups**
- File type?
- SVG?
- metadata?
- remote URLs?

**Look for:** content handling and untrusted assets.

---

### Q119. Your frontend sends personally sensitive information to analytics. What would you investigate?
**Follow-ups**
- Data minimization?
- redaction?
- consent?
- third-party exposure?

**Look for:** privacy-aware telemetry.

---

### Q120. How would you design a security checklist for a new frontend feature?
**Follow-ups**
- Input?
- output?
- authentication?
- authorization?
- storage?
- third parties?
- logging?

**Look for:** threat modeling mindset.

---

# 09. Accessibility & UX Engineering
## Q121–Q130

### Q121. A button looks correct visually but is inaccessible. What could be wrong?
**Follow-ups**
- Keyboard?
- screen reader?
- focus?
- semantics?

**Look for:** semantic HTML and interaction accessibility.

---

### Q122. A modal opens but keyboard users cannot reach its controls. How would you fix the design?
**Follow-ups**
- Focus management?
- Escape?
- focus return?
- screen reader context?

**Look for:** modal accessibility.

---

### Q123. A form has red borders for invalid fields but no text message. What problem could occur?
**Follow-ups**
- Screen readers?
- color-blind users?
- how should errors be communicated?

**Look for:** non-color error communication.

---

### Q124. An application has 100 interactive controls. How would you test keyboard accessibility?
**Follow-ups**
- Tab order?
- focus visibility?
- keyboard traps?
- skip navigation?

**Look for:** systematic accessibility testing.

---

### Q125. Why is semantic structure important even if CSS makes everything look correct?
**Follow-ups**
- Search engines?
- assistive technologies?
- keyboard interaction?

**Look for:** semantics beyond visual presentation.

---

### Q126. A designer wants very light gray text because it looks elegant. What would you evaluate?
**Follow-ups**
- Contrast?
- readability?
- accessibility?
- different displays?

**Look for:** contrast and usability.

---

### Q127. A loading spinner has no accessible announcement. What experience might occur?
**Follow-ups**
- How should dynamic state changes be communicated?

**Look for:** status announcements and meaningful feedback.

---

### Q128. A drag-and-drop interface is required for a critical workflow. How would you make it accessible?
**Follow-ups**
- Keyboard alternative?
- screen reader alternative?
- mobile?

**Look for:** equivalent interaction paths.

---

### Q129. A mobile website has tiny touch targets. What engineering concerns arise?
**Follow-ups**
- Accidental taps?
- accessibility?
- responsive design?

**Look for:** touch usability.

---

### Q130. How would you evaluate whether a frontend UX is robust rather than merely visually attractive?
**Follow-ups**
- Error states?
- accessibility?
- loading?
- slow network?
- mobile?
- keyboard?

**Look for:** whole-experience thinking.

---

# 10. Debugging & Production Incidents
## Q131–Q140

### Q131. A production page suddenly becomes 40% slower after a release. Walk through your investigation.
**Follow-ups**
- What changed?
- Which metrics compare before/after?
- Would you rollback immediately?

**Look for:** release correlation, RUM, profiling, rollback judgment.

---

### Q132. Only users in one country report slow loading. What would you investigate?
**Follow-ups**
- CDN?
- region?
- ISP?
- API region?
- third-party service?

**Look for:** geographic isolation.

---

### Q133. Only Safari users report broken checkout. How would you isolate the problem?
**Follow-ups**
- Browser version?
- feature compatibility?
- network?
- payment provider?

**Look for:** segmentation and reproduction.

---

### Q134. Error rate increases only on mobile devices. What dimensions would you compare?
**Follow-ups**
- OS?
- browser?
- memory?
- network?
- viewport?

**Look for:** multidimensional telemetry.

---

### Q135. A user says "the site is broken," but monitoring shows no server errors. What could still be wrong?
**Follow-ups**
- Frontend exceptions?
- CSS?
- third-party?
- browser-specific?
- stale cache?

**Look for:** client-side observability.

---

### Q136. A page occasionally shows the wrong user's information. What classes of bugs would you investigate first?
**Follow-ups**
- caching?
- shared state?
- race conditions?
- authorization?
- stale data?

**Look for:** security-first thinking and state isolation.

---

### Q137. A frontend error happens only once every 10,000 sessions. How would you debug it?
**Follow-ups**
- What telemetry would you need?
- Which context should be recorded?
- How would you reproduce it?

**Look for:** error monitoring and session context.

---

### Q138. A release introduces a memory leak but only after users navigate for 30 minutes. How would you detect it?
**Follow-ups**
- What metrics?
- How would you reproduce?
- What browser tools?

**Look for:** heap snapshots and long-session profiling.

---

### Q139. A page works after a hard refresh but fails after normal navigation. What does that suggest?
**Follow-ups**
- Cache?
- application state?
- lifecycle?
- stale resources?

**Look for:** stateful navigation reasoning.

---

### Q140. A bug cannot be reproduced locally but appears frequently in production. What would you change in your debugging process?
**Follow-ups**
- What production telemetry is safe?
- What environment differences matter?

**Look for:** observability, environment parity, reproducibility.

---

# 11. Senior-Fresher Design Scenarios
## Q141–Q150

### Q141. Design the frontend architecture for an online banking dashboard.
**Follow-ups**
- Security?
- caching?
- session expiry?
- performance?
- accessibility?
- audit-sensitive actions?

**Look for:** security + reliability + correctness over flashy UX.

---

### Q142. Design a frontend for a food-delivery application used by millions of users.
**Follow-ups**
- restaurant search?
- location?
- live order status?
- images?
- caching?
- real-time updates?

**Look for:** high-traffic read paths, dynamic state, CDN.

---

### Q143. Design the frontend architecture for a video-streaming platform.
**Follow-ups**
- video delivery?
- thumbnails?
- adaptive quality?
- CDN?
- recommendations?
- offline downloads?

**Look for:** media delivery and bandwidth-aware UX.

---

### Q144. Design a real-time collaboration editor.
**Follow-ups**
- multiple users editing simultaneously?
- offline changes?
- conflict resolution?
- reconnect?
- presence?

**Look for:** real-time synchronization concepts and failure handling.

---

### Q145. Design a frontend for an online examination platform with 1 million students.
**Follow-ups**
- autosave?
- network loss?
- timer?
- submission?
- cheating-resistant architecture?
- server authority?

**Look for:** reliability and correctness under load.

---

### Q146. Design the frontend for a social media feed.
**Follow-ups**
- infinite scroll?
- image/video optimization?
- caching?
- ranking?
- prefetching?
- moderation?

**Look for:** large feeds, virtualization, media strategy.

---

### Q147. Design a frontend for an e-commerce flash sale where millions of users arrive within seconds.
**Follow-ups**
- How do you prevent the frontend from overwhelming APIs?
- What can be cached?
- What happens when inventory disappears?
- How should the UI handle failed checkout?

**Look for:** traffic spikes, caching, graceful degradation, server authority.

---

### Q148. Design a frontend for a global SaaS application with multiple organizations and roles.
**Follow-ups**
- tenant isolation?
- permissions?
- localization?
- feature flags?
- performance?
- organization switching?

**Look for:** multi-tenant UX and authorization boundaries.

---

### Q149. Your company asks you to build a frontend that must work on slow 3G, low-end Android phones, and desktop broadband. How would you design the performance strategy?
**Follow-ups**
- What loads first?
- What is optional?
- How would you adapt images?
- How would you measure success?

**Look for:** progressive enhancement, adaptive delivery, performance budgets.

---

### Q150. Final hiring scenario: You inherit a frontend application that is slow, difficult to maintain, has inconsistent UI, and produces intermittent production errors. You have 90 days. What is your plan?
**Follow-ups**
- What do you measure in week 1?
- What do you fix first?
- What should not be rewritten?
- How do you create performance budgets?
- How do you improve observability?
- How do you reduce technical debt without stopping feature delivery?
- What would success look like after 30, 60, and 90 days?

**Look for:** prioritization, evidence, incremental architecture, observability, performance engineering, risk management, communication.

---

# Interviewer Scoring Framework

Use the following dimensions **without turning the interview into a trivia test**.

| Dimension | Weak | Acceptable | Strong |
|---|---|---|---|
| Browser fundamentals | Memorized terms | Understands basic lifecycle | Explains bottlenecks and trade-offs |
| Networking | Knows HTTP basics | Understands requests/errors | Diagnoses end-to-end latency |
| Caching | Knows browser cache | Understands TTL | Designs layered invalidation strategy |
| Performance | Says "optimize bundle" | Knows common techniques | Profiles, prioritizes and measures |
| Scalability | Thinks only about UI | Understands APIs/CDN | Designs for traffic/team/data growth |
| Reliability | Handles success path | Has loading/error states | Designs graceful degradation |
| Security | Knows XSS term | Understands common risks | Thinks in trust boundaries |
| Accessibility | Knows semantic HTML | Handles keyboard basics | Designs inclusive interactions |
| Debugging | Guesses | Uses DevTools | Forms hypotheses and validates them |
| Architecture | Uses buzzwords | Can structure modules | Explains trade-offs and failure modes |
| Communication | Jumps to solution | Explains solution | Clarifies requirements before designing |
| Engineering judgment | Tool-focused | Practical | Evidence-driven and trade-off aware |

---

# Suggested Interview Flow

## 30-Minute Interview

```text
5 min   → Browser + Networking
5 min   → Caching
5 min   → Performance
5 min   → Reliability
5 min   → Security
5 min   → One production scenario
```

## 60-Minute Interview

```text
10 min  → Browser + HTTP
10 min  → Caching
10 min  → Performance
10 min  → Scalability
10 min  → Security + Accessibility
10 min  → Production design scenario
```

## 90-Minute Deep Interview

```text
15 min → Fundamentals + Networking
15 min → Caching + CDN
15 min → Rendering + Performance
15 min → Scalability + Architecture
10 min → Reliability
10 min → Security
5 min  → Accessibility
5 min  → Debugging
```

---

# Red-Flag Answers

These are not automatic rejection criteria, but they should trigger deeper probing.

```text
"Just use a cache."

"Just use a CDN."

"Just increase the server."

"Just use lazy loading."

"Just use pagination."

"Just retry the API."

"Frontend security doesn't matter because backend handles it."

"Lighthouse is 100, so performance is solved."

"Hide the admin button so users can't access it."

"Micro-frontends solve scalability."

"More APIs are always bad."

"One API endpoint for everything is always better."

"Users have fast internet."

"Accessibility can be added later."

"We should rewrite the whole application."
```

The interviewer should respond with:

> "Why?"

Then:

> "What trade-off does that introduce?"

Then:

> "How would you measure whether your solution worked?"

---

# Final Candidate Test

A strong candidate should gradually move from:

```text
"What technology should I use?"
                ↓
"What problem are we solving?"
                ↓
"What constraints exist?"
                ↓
"What can fail?"
                ↓
"What is the bottleneck?"
                ↓
"What trade-offs exist?"
                ↓
"What should we measure?"
                ↓
"How do we know the solution works?"
```

That progression is more valuable than memorizing 150 definitions.

---

# Master Topic Tree

```text
FRONTEND ENGINEERING
│
├── Browser
│   ├── Navigation
│   ├── Rendering
│   ├── Layout
│   ├── Paint
│   ├── Compositing
│   ├── Memory
│   └── Compatibility
│
├── Networking
│   ├── DNS
│   ├── TCP/TLS
│   ├── HTTP
│   ├── HTTP/2
│   ├── CORS
│   ├── APIs
│   └── Latency
│
├── Caching
│   ├── Browser Cache
│   ├── CDN
│   ├── HTTP Cache
│   ├── Revalidation
│   ├── TTL
│   ├── Stale Data
│   └── Invalidation
│
├── Performance
│   ├── Bundle Size
│   ├── Network
│   ├── Images
│   ├── Fonts
│   ├── Rendering
│   ├── Main Thread
│   ├── LCP
│   ├── INP
│   ├── CLS
│   └── RUM
│
├── Scalability
│   ├── Architecture
│   ├── CDN
│   ├── Large Data
│   ├── Large Teams
│   ├── Design Systems
│   ├── Micro-frontends
│   └── Global Delivery
│
├── Reliability
│   ├── Loading
│   ├── Empty
│   ├── Error
│   ├── Retry
│   ├── Timeout
│   ├── Offline
│   ├── Partial Failure
│   └── Uploads
│
├── Security
│   ├── XSS
│   ├── CSRF
│   ├── Authentication
│   ├── Authorization
│   ├── Tokens
│   ├── Secrets
│   ├── Third Parties
│   └── Supply Chain
│
├── Accessibility
│   ├── Semantics
│   ├── Keyboard
│   ├── Focus
│   ├── Screen Readers
│   ├── Contrast
│   └── Inclusive UX
│
└── Production Engineering
    ├── Monitoring
    ├── Debugging
    ├── Regression
    ├── Browser Issues
    ├── Memory Leaks
    ├── Release Safety
    └── Incident Response
```

# End

**150 scenario-based questions. No JavaScript syntax questions. No React questions. No duplicate question themes intentionally.**

The objective is to determine whether a candidate can **reason like a frontend engineer in a production environment**, not whether they can recite frontend terminology.
