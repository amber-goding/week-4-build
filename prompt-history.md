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
