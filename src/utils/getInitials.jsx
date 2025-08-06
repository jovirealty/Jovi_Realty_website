/**
 * Get initials from agent object.
 * Supports { MemberFirstName, MemberLastName } or { MemberFullName }
 * Returns empty string if name not found.
 */
export default function getInitials(name) {
  if (!name || typeof name !== "string") return "";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}