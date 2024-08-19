/**
 * Returns the description if it does not match the label (case-insensitive), otherwise returns null.
 *
 * @param {string | null | undefined} label - The label to compare.
 * @param {string | null | undefined} description - The description to compare.
 * @returns {string | null} - The description if it does not match the label, otherwise null.
 */

// eslint-disable-next-line import/prefer-default-export
export function getInputDescription(
  label: string | null | undefined,
  description: string | null | undefined,
): string | null {
  if (label == null || description == null) {
    return null;
  }
  return label.toLowerCase() !== description.toLowerCase() ? `(${description})` : null;
}
