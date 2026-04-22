// Shared mock data
export type Group = {
  id: string;
  name: string;
  subject: string;
  module: string;
  level: string;
  members: number;
  activity: "High" | "Medium" | "Low";
  meeting: "Online" | "On campus" | "Hybrid";
  description: string;
  tags: string[];
};

export const groups: Group[] = [
  { id: "cs201", name: "CS201 Algorithms Crew", subject: "Computer Science", module: "CS201", level: "Year 2", members: 24, activity: "High", meeting: "Hybrid", description: "Weekly problem sets, mock exams, and pair-programming. Friendly to first-timers — we explain things twice.", tags: ["Algorithms", "Coding", "Problem sets"] },
  { id: "psy110", name: "Intro Psychology Study Circle", subject: "Psychology", module: "PSY110", level: "Year 1", members: 38, activity: "High", meeting: "On campus", description: "Discuss lectures, swap flashcards, and quiz each other before tests. We meet every Wednesday in the library.", tags: ["Flashcards", "Discussion", "Library"] },
  { id: "law305", name: "Contract Law Case Readers", subject: "Law", module: "LAW305", level: "Year 3", members: 12, activity: "Medium", meeting: "Online", description: "Case briefs, exam outlines, and Sunday Zoom revisions. Bring your IRAC notes.", tags: ["Case briefs", "Revision", "Zoom"] },
  { id: "eco220", name: "Microeconomics Buddies", subject: "Economics", module: "ECO220", level: "Year 2", members: 18, activity: "Medium", meeting: "Hybrid", description: "Tackle problem sets together. We help each other through demand curves and game theory.", tags: ["Problem sets", "Math"] },
  { id: "bio101", name: "Cell Biology Lab Squad", subject: "Biology", module: "BIO101", level: "Year 1", members: 27, activity: "High", meeting: "On campus", description: "Pre-lab prep, post-lab notes, and shared diagrams. We make biology way less scary.", tags: ["Labs", "Diagrams"] },
  { id: "math210", name: "Linear Algebra Lounge", subject: "Mathematics", module: "MATH210", level: "Year 2", members: 15, activity: "Low", meeting: "Online", description: "Slow, supportive pace. Great for anyone who needs proofs explained in plain English.", tags: ["Proofs", "Beginner-friendly"] },
  { id: "eng150", name: "Thermodynamics Help Desk", subject: "Engineering", module: "ENG150", level: "Year 1", members: 21, activity: "Medium", meeting: "Hybrid", description: "Office-hours-style sessions where we work through past papers as a team.", tags: ["Past papers", "Q&A"] },
  { id: "des240", name: "UX Studio Critique Group", subject: "Design", module: "DES240", level: "Year 2", members: 16, activity: "High", meeting: "On campus", description: "Honest, kind feedback on each other's design projects. Wireframes, prototypes, and crit sessions.", tags: ["Critique", "Prototyping"] },
];

export const subjects = ["All subjects", "Computer Science", "Psychology", "Law", "Economics", "Biology", "Mathematics", "Engineering", "Design"];
export const levels = ["All levels", "Year 1", "Year 2", "Year 3", "Postgraduate"];
export const meetings = ["Any format", "Online", "On campus", "Hybrid"];
