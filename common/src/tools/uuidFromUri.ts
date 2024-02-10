import { v5 } from 'uuid';
import { URI, UUID } from '../IfcData/bsddBridgeData';

const BsddNamespace = 'b989028b-337b-417f-b917-c4e17384b8c5';

/**
 * Generate a UUID from a URI.
 *
 * This function generates a consistent UUID from a given URI. This UUID can be used as a Revit parameter ID.
 * The UUID is generated using the SHA-1 hash of the URI, which is then formatted as a UUID.
 *
 * @param input - The URI to generate a UUID from.
 * @returns The generated UUID.
 */
function createUuidFromUri(input: URI): UUID {
  return v5(input, BsddNamespace);
}

export default createUuidFromUri;
