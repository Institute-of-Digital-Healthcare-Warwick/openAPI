import { UriReference } from "../Types/UriReference.ts";
import { IJsonSchema } from "/sources/openapi/Interfaces/IJsonSchema.ts";


/**
 * JSON Schema reference
 * 
 * Even though the value of a $ref is a URI-reference, it is not a network locator, only an identifier.
 * This means that the schema doesn’t need to be accessible at the resolved URI, but it may be.
 * It is basically up to the validator implementation how external schema URIs will be handled, but one should not assume the validator will fetch network resources indicated in $ref values
 * 
 * These paths need to be specified for the Mapper API
 * 
 * https://json-schema.org/understanding-json-schema/structuring.html?highlight=ref#id1
 * 
 * https://json-schema.org/understanding-json-schema/structuring.html?highlight=ref#id5 
 * 
 * @author Ashley Peake, Institute of Digital Healthcare, WMG
 */
export interface IJsonSchemaRef {
	/**
	 * Reference to schema
	 * There is a definitions property now $defs but this will search the schema
	 * repository in the Mapper app
	 */
	$ref: UriReference;		
}
