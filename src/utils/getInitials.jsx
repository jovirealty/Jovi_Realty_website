/**
 * Get initials from agent object.
 * Supports { MemberFirstName, MemberLastName } or { MemberFullName }
 * Returns empty string if name not found.
 */
export default function getInitials(agent) {
  if (!agent) return "";
  if (agent.MemberFirstName && agent.MemberLastName) {
    return (
      agent.MemberFirstName.charAt(0).toUpperCase() +
      agent.MemberLastName.charAt(0).toUpperCase()
    );
  } else if (agent.MemberFullName) {
    const parts = agent.MemberFullName.trim().split(" ");
    return (
      (parts[0]?.charAt(0).toUpperCase() || "") +
      (parts[1]?.charAt(0).toUpperCase() || "")
    );
  }
  return "";
}