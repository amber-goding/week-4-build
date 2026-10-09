**### Prompt 1 — Create Project Prompt History**

**Context:** Establish a persistent record of project-related requests.

**Task:** Create this file, log this prompt, and automatically log future project prompts.

**Format:** Numbered Markdown entries with short summaries and the exact full prompt.

**Constraints:** Preserve prior entries; exclude casual conversation and redact secrets; modify no other files.

**Full Prompt:**\
Create a \`prompt-history.md\` file in the root of this project.

From this point forward, automatically record every project-related prompt I send you before completing the requested task. This is a standing instruction for the entire project, and I should not need to remind you in future prompts.

My future prompts may be written naturally in a few sentences and may not explicitly label Context, Task, Format, or Constraints. You must infer those elements from the prompt and summarize them in the log.

Record each prompt in chronological numerical order using this format:

**### Prompt [Number] — [Short Title]**

**\*\*Context:\*\*** Briefly infer and summarize the background or purpose of the prompt.

**\*\*Task:\*\*** Briefly summarize what I asked you to do.

**\*\*Format:\*\*** Briefly summarize any requested output, file structure, response style, or implementation format. If no specific format is requested, write \`Not specifically stated\`.

**\*\*Constraints:\*\*** Briefly summarize any limitations, boundaries, exclusions, or requirements. If none are stated, write \`None specifically stated\`.

**\*\*Full Prompt:\*\***\\
Copy my complete original prompt exactly as written.

Keep the Context, Task, Format, and Constraints summaries very short.

Do not require me to structure future prompts in any particular way.

Never delete, overwrite, or renumber previous entries unless I explicitly ask you to do so. Do not log casual conversation unrelated to building, testing, reviewing, or documenting the project. Never store passwords, API keys, tokens, or other secrets; replace them with \`[REDACTED]\`.

For this task, create \`prompt-history.md\`, record this prompt as Prompt 1, and do not modify any other project files.

**### Prompt 2 — Implement Random Meal Fetch**

**Context:** Begin the first functional MVP milestone using the verified TheMealDB endpoint.

**Task:** Fetch and validate one random meal on application load and log it to the console.

**Format:** Simple, readable async/await implementation plus a change summary and testing instructions.

**Constraints:** Reuse the project; add no dependencies, backend, UI, or styling; modify only necessary files and stop after this milestone.

**Full Prompt:**\
Implement the first MVP milestone for Madam Morticia's Candy Emporium.

Task:

- Add a function in the existing React application that fetches one random meal from `https://www.themealdb.com/api/json/v1/1/random.php`.
- Use async/await and check `response.ok`.
- Parse the JSON and return the first valid meal from the `meals` array.
- Handle network errors, invalid responses, and missing meal data.
- For now, trigger the request once when the application loads and log the returned meal to the browser console.

Constraints:

- Reuse the existing project structure.
- No new dependencies, backend, recipe UI, or Halloween styling.
- Keep the implementation simple and readable.
- Modify only the files necessary for this milestone.
- Continue maintaining the existing prompt log.

After implementation, summarize the changes and explain how to test them. Do not start another milestone.

**### Prompt 3 — Use Browser Offline Mode**

**Context:** Test the application's network-error handling for TheMealDB requests.

**Task:** Explain how to enable offline mode.

**Format:** Not specifically stated

**Constraints:** None specifically stated

**Full Prompt:**\
How do I use offline mode?

**### Prompt 4 — Diagnose Empty Offline Console**

**Context:** Offline testing prevented the local React page from loading, so no application error appeared.

**Task:** Explain the empty console and browser disconnection page during the failure test.

**Format:** Not specifically stated

**Constraints:** None specifically stated

**Full Prompt:**\
The console log is empty but the webpage itself displays this: Press space to play

Try:

- Checking the network cables, modem, and router
- Reconnecting to Wi-Fi
- Running Windows Network Diagnostics

ERR_INTERNET_DISCONNECTED

**### Prompt 5 — Find Network Request Blocking**

**Context:** Continue troubleshooting browser-based API failure testing.

**Task:** Explain why the Network command appeared to do nothing and how to access request blocking.

**Format:** Not specifically stated

**Constraints:** None specifically stated

**Full Prompt:**\
I did the `Ctrl+Shift+P`  and clicked Show Network but I didnt see anything happen afterwards.

**### Prompt 6 — Access Request Blocking Controls**

**Context:** The DevTools command menu only shows request-blocking enable and disable actions.

**Task:** Clarify how to reach the controls needed to block the API request.

**Format:** Not specifically stated

**Constraints:** None specifically stated

**Full Prompt:**\
All I see is Enable and Disable network request blocking

**### Prompt 7 — Confirm Blocked-Request Error Handling**

**Context:** Verify the application's response when DevTools blocks TheMealDB.

**Task:** Interpret the resulting console error and stack trace.

**Format:** Not specifically stated

**Constraints:** None specifically stated

**Full Prompt:**\
This is what I got in the console log: Unable to load a random meal: Error: Unable to connect to TheMealDB.
    at fetchRandomMeal (App.jsx:12:11)
    at async loadMeal (App.jsx:52:22)
overrideMethod @ installHook.js:1
loadMeal @ App.jsx:55
await in loadMeal
(anonymous) @ App.jsx:59
react_stack_bottom_frame @ react-dom_client.js?v=84c13312:14178
runWithFiberInDEV @ react-dom_client.js?v=84c13312:944
commitHookEffectListMount @ react-dom_client.js?v=84c13312:6901
commitHookPassiveMountEffects @ react-dom_client.js?v=84c13312:6936
commitPassiveMountOnFiber @ react-dom_client.js?v=84c13312:8313
recursivelyTraversePassiveMountEffects @ react-dom_client.js?v=84c13312:8300
commitPassiveMountOnFiber @ react-dom_client.js?v=84c13312:8372
recursivelyTraversePassiveMountEffects @ react-dom_client.js?v=84c13312:8300
commitPassiveMountOnFiber @ react-dom_client.js?v=84c13312:8322
flushPassiveEffects @ react-dom_client.js?v=84c13312:9583
(anonymous) @ react-dom_client.js?v=84c13312:9312
performWorkUntilDeadline @ react-dom_client.js?v=84c13312:36
<App>
exports.jsxDEV @ react_jsx-dev-runtime.js?v=84c13312:200
(anonymous) @ main.jsx:8
App.jsx:10 Request was blocked by DevTools: "https://www.themealdb.com/api/json/v1/1/random.php"

**### Prompt 8 — Disable Request Blocking**

**Context:** Restore normal TheMealDB access after completing the simulated failure test.

**Task:** Confirm whether network request blocking should be disabled.

**Format:** Not specifically stated

**Constraints:** None specifically stated

**Full Prompt:**\
Do I need to disable network request blocking?

**### Prompt 9 — Display Fetched Recipe**

**Context:** Extend the working random-meal fetch into the second MVP milestone.

**Task:** Display recipe details and add a button that fetches another random meal.

**Format:** Simple React state-driven interface with a summary and manual testing steps.

**Constraints:** Preserve error handling; add no APIs, dependencies, backend, or Halloween styling; modify only necessary files and stop after this milestone.

**Full Prompt:**\
Implement Milestone 2 for Madam Morticia's Candy Emporium: display the fetched recipe.

Requirements:

- Reuse the existing working TheMealDB fetch logic.
- Display the meal name, image, ingredients with measurements, and cooking instructions.
- Pair `strIngredient1–20` with `strMeasure1–20`, skipping empty or null ingredients.
- Add a "Reveal Another Recipe" button that fetches a new random meal.
- Use React state to update the displayed recipe.
- Keep the interface simple and readable.

Constraints:

- Preserve existing API error handling.
- No additional API calls, dependencies, backend, or Halloween styling.
- Avoid unnecessary components or abstractions.
- Modify only necessary files.
- Continue maintaining `prompt-log.md`.

Summarize changes and provide manual testing steps. Stop after this milestone.

**### Prompt 10 — Review Resilient Request States**

**Context:** Validate and strengthen the recipe interface's loading, failure, and no-data behavior.

**Task:** Review request states, make necessary fixes, and verify retry behavior without breaking existing functionality.

**Format:** Minimal implementation changes followed by a summary and concise manual tests.

**Constraints:** Preserve working behavior; avoid unrelated refactors, dependencies, and Halloween styling; run lint and build, then stop.

**Full Prompt:**\
Review the existing loading, error, and no-data handling in Madam Morticia's Candy Emporium.

Requirements:

- Verify failed network requests display a clear, friendly error message.
- Verify invalid or empty API responses do not crash the app.
- Ensure users can retry after an error.
- Ensure loading indicators and button states behave correctly.
- Preserve existing working functionality.

Make only necessary fixes. Do not refactor unrelated code, add dependencies, or introduce Halloween styling.

Maintain the established `prompt-history.md`.

Run lint and build, summarize any changes, and provide concise manual testing steps. Stop after this milestone.

**### Prompt 11 — Create Halloween Emporium UI**

**Context:** Apply the final visual milestone to the working random-recipe experience.

**Task:** Create a responsive, accessible Victorian Halloween candy-shop interface around the existing recipe functionality.

**Format:** CSS-led UI implementation followed by a summary and brief visual testing instructions.

**Constraints:** Preserve API behavior; add no dependencies, generated images, backend, or features; modify only necessary UI files and stop after this milestone.

**Full Prompt:**\
Implement Milestone 4: the Halloween-themed UI for Madam Morticia's Candy Emporium.

Design direction:

- Create a distinctive, immersive, magical Victorian candy-shop atmosphere.
- Use a sophisticated Halloween palette: midnight purple, near-black, burnt orange, antique gold, and warm cream.
- Use expressive typography, atmospheric backgrounds, elegant borders, and subtle decorative details.
- Make the interface feel like a mysterious enchanted emporium, not a generic recipe website.

Requirements:

- Display the title "Madam Morticia's Candy Emporium" prominently.
- Present the existing recipe as an enchanted discovery.
- Style the recipe image, ingredients, instructions, and "Reveal Another Recipe" button.
- Style loading and error states consistently.
- Ensure responsive layouts for desktop, tablet, and mobile.
- Maintain readability, sufficient contrast, and accessible interactions.

Constraints:

- Preserve all existing API logic and functionality.
- No new dependencies, image-generation services, backend, or extra features.
- Prefer CSS for decorative effects.
- Modify only necessary UI/CSS files.
- Keep the implementation understandable and maintain `prompt-history.md`.

Run lint and build. Summarize changes and provide brief visual testing instructions. Stop after this milestone.

**### Prompt 12 — Restrict Recipes to Desserts**

**Context:** Narrow the enchanted recipe experience to TheMealDB's Dessert category.

**Task:** Select a random dessert ID, retrieve its full recipe, and avoid repeating the current dessert when possible.

**Format:** Simple two-request implementation with a summary and concise manual tests.

**Constraints:** Use only TheMealDB; preserve the UI and existing behavior; add no dependencies, unrelated features, or unnecessary refactors; stop after this milestone.

**Full Prompt:**\
Update Madam Morticia's Candy Emporium to retrieve only dessert recipes from TheMealDB.

Requirements:

- Replace the random-meal request with `filter.php?c=Dessert`.
- Randomly select a returned dessert ID.
- Fetch its full recipe using `lookup.php?i=ID`.
- Reuse the existing recipe display, loading, and error handling.
- Make "Reveal Another Recipe" select another dessert.
- Avoid repeating the currently displayed recipe when alternatives exist.
- Handle empty or invalid responses from either endpoint.

Constraints:

- Continue using only TheMealDB.
- Preserve existing UI styling and functionality.
- No new dependencies, unnecessary refactoring, or unrelated features.
- Keep the implementation simple and readable.
- Maintain `prompt-history.md`.

Run lint and build. Summarize changes and provide concise manual testing steps. Stop after this milestone.

**### Prompt 15 — Make Warnings Spookier**

**Context:** Intensify the Halloween atmosphere of Madam Morticia's fictional dessert warnings.

**Task:** Rewrite the predefined warnings to feel spookier.

**Format:** Concise replacement warning copy.

**Constraints:** Keep the existing warning system and project behavior intact.

**Full Prompt:**\
Manual testing passed. However, I would like the predefined MORTICIA_WARNINGS to be a little spooker, especially since Halloween is right around the corner.

**### Prompt 13 — Add Spooky Recipe Aliases**

**Context:** Give dessert discoveries distinctive Halloween display names while retaining their source names.

**Task:** Generate and display a stable JavaScript-created spooky alias for each retrieved recipe.

**Format:** Small rule-based implementation with a summary and concise testing steps.

**Constraints:** Do not mutate API data or add AI, APIs, dependencies, or unnecessary abstractions; preserve functionality and styling; stop after this milestone.

**Full Prompt:**\
Implement Milestone 6: Spooky Recipe Aliases for Madam Morticia's Candy Emporium.

Requirements:

- Generate a Halloween-themed display name for each dessert using simple JavaScript rules based on its original name.
- Use a small collection of spooky prefixes or descriptions.
- Preserve and display the original API recipe name underneath the Halloween alias.
- Keep aliases readable, creative, and appropriate for desserts.
- Generate the alias when a new recipe is retrieved.
- Keep the alias stable while the current recipe is displayed.

Constraints:

- Do not modify the original API data.
- No AI generation, additional APIs, or dependencies.
- Preserve existing recipe functionality and Halloween styling.
- Avoid unnecessary abstractions or refactoring.
- Modify only necessary files.
- Maintain `prompt-history.md`.

Run lint and build. Summarize changes and provide concise testing steps. Stop after this milestone.

**### Prompt 14 — Add Madam Morticia's Warnings**

**Context:** Add playful narrative flavor to each enchanted dessert discovery.

**Task:** Select and display a stable fictional warning whenever a new dessert is retrieved.

**Format:** Small predefined JavaScript collection with styled output, a summary, and concise tests.

**Constraints:** Use no APIs, dependencies, AI content, API-data mutation, or unnecessary refactoring; preserve all recipe content and styling; stop after this milestone.

**Full Prompt:**\
Implement Milestone 7: Madam Morticia's Warnings.

Requirements:

- Create a small collection of 8–10 predefined, fictional Halloween warnings appropriate for desserts.
- Randomly select one warning when a new dessert is retrieved.
- Display it beneath the recipe's spooky alias in a visually distinct section titled "Madam Morticia's Warning."
- Keep the warning unchanged while viewing the current recipe.
- Select a new warning when "Reveal Another Recipe" is clicked.
- Keep warnings playful, mysterious, and concise.

Constraints:

- Use simple JavaScript and existing React functionality.
- No additional APIs, dependencies, or AI-generated content.
- Preserve original recipe names, ingredients, instructions, and existing styling.
- Do not modify the original API data.
- Avoid unnecessary components, state, or refactoring.
- Maintain `prompt-history.md`.

Run lint and build. Summarize changes and provide concise manual testing steps. Stop after this milestone.
