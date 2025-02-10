1. Create a stand-alone Flask app that loads Vue3
   a. Benefits: Mirrors existing development paradigm; Flask provides routing.
   b. Drawback: We don't get Vue dependency management via, e.g., Dependabot
   c. --> Also, components in this paradigm gets a .js extension.


2. Create a stand-alone Flask app that uses a front-end build step
   a. Benefits: We get Vue dependency management; Flask provides routing.
   b. Drawback: More complicated because we have to manage both Flask and Vue dependencies, and because deployment requires an extra build step.
   c. NB: This is a common pattern.
   d. --> Components in this paradigm have a .vue extension, and must be transpiled via build script


3. Create a stand-alone Vue3 client app.
   a. Benefits: We get Vue dependency management; Build and deploy are standardized.
   b. Drawback: We either have to build a routing platform or use a framework like Nuxt.
   c. --> Components in this paradigm have a .vue extension, and are served via Node, with or without an additional framework.


Goals:
1. Can deploy via CD
2. Can test via CI
3. Can maintain via Dependabot
4. Code is understandable via existing development paradigms

