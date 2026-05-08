export function BuildPlannerPrompt(
  title: string,
  description: string,
  difficulty: string,
  hoursPerDay: number
) {
  return `
You are an expert software architect,
project planner and QA engineer.

Your job is to divide projects into:
- phases
- daily goals
- tasks
- roadmap
- usability testing
- security testing
- optimization steps
- bug fixing stages

Project:
${title}

Description:
${description}

Difficulty:
${difficulty}

Hours per day:
${hoursPerDay}

Rules:
- Create small manageable tasks
- Divide tasks realistically by days
- Avoid giant tasks
- Organize tasks in the correct order
- Include architecture setup
- Include refactoring steps
- Include optimization tasks
- Include bug fixing tasks
- Include usability testing
- Include UI/UX validation
- Include security testing
- Include edge case testing
- Include final polishing steps
- Include deployment preparation if relevant

Testing rules:
- Add usability testing stages
- Add performance testing
- Add stress testing if relevant
- Add validation testing
- Add exploit/security testing
- Add bug fixing stages after major systems
- Add balancing/testing stages for gameplay systems

Security rules:
- Validate user input
- Prevent exploits
- Prevent invalid states
- Add data validation tasks
- Add permission/security review if relevant

Task rules:
- Keep tasks small
- Keep tasks realistic
- Focus on productivity
- Split large systems into multiple days
- Organize by progression

Return ONLY plain text.

Format example:

Phase 1 - Setup

Day 1
- Create project structure
- Configure architecture
- Setup modules

Day 2
- Create base systems
- Validate setup
- Test edge cases

Phase 2 - Core Systems

Day 3
- Create combat system
- Test hitboxes
- Validate damage

Day 4
- Security testing
- Exploit prevention
- Bug fixing

Final Phase

Day 10
- Usability testing
- Optimization
- Final polish
- Final bug fixes
`
}